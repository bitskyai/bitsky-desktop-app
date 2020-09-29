export enum IpcEvents {
  SYNC_GET_DEFAULT_DB_CONFIGURATIONS = "SYNC_GET_DEFAULT_DB_CONFIGURATIONS",
  SYNC_TEST_DB_CONNECTION = "SYNC_TEST_DB_CONNECTION",
  SYNC_GET_PREFERENCES_JSON = "SYNC_GET_PREFERENCES_JSON", 
  SYNC_UPDATE_PREFERENCES_JSON = "SYNC_UPDATE_PREFERENCES_JSON", 
  CLOSE_SETTINGS = 'CLOSE_SETTINGS',
  OPEN_SETTINGS = 'OPEN_SETTINGS',
  OPEN_RETAILER_EDITOR = 'OPEN_RETAILER_EDITOR',
  CLOSE_RETAILER_EDITOR = 'CLOSE_RETAILER_EDITOR',
  SYNC_RETAILER_GET_FILE_CONTENT = "SYNC_RETAILER_GET_FILE_CONTENT",
  SYNC_RETAILER_UPDATE_FILE_CONTENT = "SYNC_RETAILER_UPDATE_FILE_CONTENT",
  SYNC_RETAILER_RESET_TO_DEFAULT = "SYNC_RETAILER_RESET_TO_DEFAULT",
  RETAILER_CONSOLE_LOG = "RETAILER_CONSOLE_LOG",
  DOWNLOADING_ELECTRON = "DOWNLOADING_ELECTRON",
  DOWNLOAD_ELECTRON_FAIL = "DOWNLOAD_ELECTRON_FAIL",
  DOWNLOAD_ELECTRON_SUCCESS = "DOWNLOAD_ELECTRON_SUCCESS",
  STARTING_RETAILER_SERVER = "STARTING_RETAILER_SERVER",
  STARTING_RETAILER_SERVER_FAIL = "STARTING_RETAILER_SERVER_FAIL",
  STARTING_RETAILER_SERVER_SUCCESS = "STARTING_RETAILER_SERVER_SUCCESS",
  STOPPING_RETAILER_SERVER = "STOPPING_RETAILER_SERVER",
  STOPPING_RETAILER_SERVER_FAIL = "STOPPING_RETAILER_SERVER_FAIL",
  STOPPING_RETAILER_SERVER_SUCCESS = "STOPPING_RETAILER_SERVER_SUCCESS",
  DOWNLOAD_ELECTRON = "DOWNLOAD_ELECTRON",
  STOP_RETAILER_SERVER = "STOP_RETAILER_SERVER",
  START_RETAILER_SERVER = "START_RETAILER_SERVER",
  SYNC_RETAILER_STATUS = "SYNC_RETAILER_STATUS",
  UPDATE_RETAILER_STATUS = "UPDATE_RETAILER_STATUS",
  SYNC_SUPPLIER_UI_TO_MAIN = "SYNC_SUPPLIER_UI_TO_MAIN",
  MESSAGE_TO_SUPPLIER_UI = "MESSAGE_TO_SUPPLIER_UI"
}

// message send to main
export const ipcMainEvents = [
  IpcEvents.SYNC_SUPPLIER_UI_TO_MAIN,
  IpcEvents.OPEN_SETTINGS,
  IpcEvents.CLOSE_SETTINGS,
  IpcEvents.OPEN_RETAILER_EDITOR,
  IpcEvents.CLOSE_RETAILER_EDITOR,
  IpcEvents.SYNC_GET_DEFAULT_DB_CONFIGURATIONS,
  IpcEvents.SYNC_TEST_DB_CONNECTION,
  IpcEvents.SYNC_GET_PREFERENCES_JSON,
  IpcEvents.SYNC_UPDATE_PREFERENCES_JSON,
  IpcEvents.SYNC_RETAILER_GET_FILE_CONTENT,
  IpcEvents.SYNC_RETAILER_UPDATE_FILE_CONTENT,
  IpcEvents.SYNC_RETAILER_RESET_TO_DEFAULT,
  IpcEvents.DOWNLOAD_ELECTRON,
  IpcEvents.STOP_RETAILER_SERVER,
  IpcEvents.START_RETAILER_SERVER,
  IpcEvents.SYNC_RETAILER_STATUS
];

// message send to retailer editor
export const ipcRendererEvents = [
  IpcEvents.RETAILER_CONSOLE_LOG,
  IpcEvents.DOWNLOADING_ELECTRON,
  IpcEvents.DOWNLOAD_ELECTRON_FAIL,
  IpcEvents.DOWNLOAD_ELECTRON_SUCCESS,
  IpcEvents.STARTING_RETAILER_SERVER,
  IpcEvents.STARTING_RETAILER_SERVER_FAIL,
  IpcEvents.STARTING_RETAILER_SERVER_SUCCESS,
  IpcEvents.STOPPING_RETAILER_SERVER,
  IpcEvents.STOPPING_RETAILER_SERVER_FAIL,
  IpcEvents.STOPPING_RETAILER_SERVER_SUCCESS,
  IpcEvents.UPDATE_RETAILER_STATUS,
];

// message send to supplier ui
export const ipcSupplierEvents = [
  IpcEvents.MESSAGE_TO_SUPPLIER_UI
]

// message send to Browser Window
export const BROWSER_WINDOW_EVENTS = {
  STARTING_HEADLESS: "startingHeadless",
  STARTED_HEADLESS: "startedHeadless",
  STOPPING_HEADLESS: "stoppingHeadless",
  STOPPED_HEADLESS: "stoppedHeadless",
  STARTING_HTTP: "startingHTTP",
  STARTED_HTTP: "startedHTTP",
  STOPPING_HTTP: "stoppingHTTP",
  STOPPED_HTTP: "stoppedHTTP",
}

export const WEBCONTENTS_READY_FOR_IPC_SIGNAL =
  "WEBCONTENTS_READY_FOR_IPC_SIGNAL";
