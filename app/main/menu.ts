import {
  Menu,
  shell,
  MenuItemConstructorOptions,
  app,
  BrowserView
} from "electron";
import * as path from "path";
import { ipcMainManager } from "./ipc";
import { IpcEvents } from "../ipc-events";
// import logger from "../utils/logger";
import { getOrCreateMainWindow } from "../main/windows";
// const isMac = process.platform === "darwin";

/**
 * Is the passed object a constructor for an Electron Menu?
 *
 * @param {(Array<Electron.MenuItemConstructorOptions> | Electron.Menu)} [submenu]
 * @returns {submenu is Array<Electron.MenuItemConstructorOptions>}
 */
function isSubmenu(
  submenu?: Array<MenuItemConstructorOptions> | Menu
): submenu is Array<MenuItemConstructorOptions> {
  return !!submenu && Array.isArray(submenu);
}

/**
 * Returns additional items for the help menu
 *
 * @returns {Array<Electron.MenuItemConstructorOptions>}
 */
function getHelpItems(): Array<MenuItemConstructorOptions> {
  let preferencesMenu = [] as Array<MenuItemConstructorOptions>;
  if (process.platform !== "darwin") {
    preferencesMenu = getPreferencesItems();
  }
  // remove unsed `separator`
  preferencesMenu.shift();
  return preferencesMenu.concat([
    {
      label: "Open Munew Repository...",
      click() {
        shell.openExternal("https://github.com/munew");
      }
    },
    {
      label: "Documents",
      click() {
        shell.openExternal("https://docs.munew.io");
      }
    },
    {
      label: "Open Munew Issue Tracker...",
      click() {
        shell.openExternal("https://github.com/munew/dia/issues");
      }
    }
  ]);
}

function showSettings() {
  let win = getOrCreateMainWindow();
  const view = new BrowserView({
    webPreferences: {
      webviewTag: false,
      nodeIntegration: true
    }
  });

  let currentWinBounds = win.getBounds();

  win.setBrowserView(view);
  view.setBounds({
    x: 0,
    y: 0,
    width: currentWinBounds.width,
    height: currentWinBounds.height
  });
  view.setAutoResize({
    width: true,
    height: true
  });
  const modalPath = path.join("./build/settings.html");
  view.webContents.loadFile(modalPath);
}

function hideSettings(){
  let win = getOrCreateMainWindow();
  win.setBrowserView(null);
}

/**
 * Depending on the OS, the `Preferences` either go into the `Fiddle`
 * menu (macOS) or under `File` (Linux, Windows)
 *
 * @returns {Array<Electron.MenuItemConstructorOptions>}
 */
function getPreferencesItems(): Array<MenuItemConstructorOptions> {
  return [
    {
      type: "separator"
    },
    {
      label: "Preferences",
      accelerator: "CmdOrCtrl+,",
      click() {
        // console.log('send message: ', IpcEvents.OPEN_SETTINGS);
        // ipcMainManager.send(IpcEvents.OPEN_SETTINGS);
        showSettings();
      }
    },
    {
      type: "separator"
    }
  ];
}

function setupEventsListeners() {
  ipcMainManager.on(IpcEvents.CLOSE_SETTINGS, (event, arg) => {
    try {
      hideSettings();
    } catch (err) {
      console.error(err);
    }
  });
}

/**
 * Creates the app's window menu.
 */
export function setupMenu() {
  const defaultMenu = require("electron-default-menu");
  const fullmenu = defaultMenu(app, shell) as Array<MenuItemConstructorOptions>;
  const menus: Array<MenuItemConstructorOptions> = [];
  fullmenu.forEach((menu: MenuItemConstructorOptions) => {
    const { label } = menu;

    // Append the "Settings" item
    if (
      process.platform === "darwin" &&
      label === app.getName() &&
      isSubmenu(menu.submenu)
    ) {
      menu.submenu.splice(2, 0, ...getPreferencesItems());
    }

    // Append items to "Help"
    if (label === "Help" && isSubmenu(menu.submenu)) {
      menu.submenu = getHelpItems();
    }

    if (label !== "Edit") {
      menus.push(menu);
    }
  });
  // menus.splice(process.platform === "darwin" ? 1 : 0, 0, getFileMenu());
  // logger.debug("setupMenu->menu: ", JSON.stringify(menus, null, 2));
  Menu.setApplicationMenu(Menu.buildFromTemplate(menus));

  setupEventsListeners();
}
