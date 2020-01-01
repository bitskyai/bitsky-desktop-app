export enum IpcEvents {
  CLOSE_SETTINGS = 'CLOSE_SETTINGS',
  SYNC_SOI_GET_FILE_CONTENT = "SYNC_SOI_GET_FILE_CONTENT",
  SYNC_SOI_UPDATE_FILE_CONTENT = "SYNC_SOI_UPDATE_FILE_CONTENT",
  SYNC_SOI_RESET_TO_DEFAULT = "SYNC_SOI_RESET_TO_DEFAULT",
  SOI_CONSOLE_LOG = "SOI_CONSOLE_LOG",
  DOWNLOADING_ELECTRON = "DOWNLOADING_ELECTRON",
  DOWNLOAD_ELECTRON_FAIL = "DOWNLOAD_ELECTRON_FAIL",
  DOWNLOAD_ELECTRON_SUCCESS = "DOWNLOAD_ELECTRON_SUCCESS",
  STARTING_SOI_SERVER = "STARTING_SOI_SERVER",
  STARTING_SOI_SERVER_FAIL = "STARTING_SOI_SERVER_FAIL",
  STARTING_SOI_SERVER_SUCCESS = "STARTING_SOI_SERVER_SUCCESS",
  STOPPING_SOI_SERVER = "STOPPING_SOI_SERVER",
  STOPPING_SOI_SERVER_FAIL = "STOPPING_SOI_SERVER_FAIL",
  STOPPING_SOI_SERVER_SUCCESS = "STOPPING_SOI_SERVER_SUCCESS",
  STOP_SOI_SERVER = "STOP_SOI_SERVER",
  START_SOI_SERVER = "START_SOI_SERVER",
  SYNC_SOI_STATUS = "SYNC_SOI_STATUS"
}

export const ipcMainEvents = [
  IpcEvents.CLOSE_SETTINGS,
  IpcEvents.SYNC_SOI_GET_FILE_CONTENT,
  IpcEvents.SYNC_SOI_UPDATE_FILE_CONTENT,
  IpcEvents.SYNC_SOI_RESET_TO_DEFAULT,
  IpcEvents.STOP_SOI_SERVER,
  IpcEvents.START_SOI_SERVER,
  IpcEvents.SYNC_SOI_STATUS
];

export const ipcRendererEvents = [
  IpcEvents.SOI_CONSOLE_LOG,
  IpcEvents.DOWNLOADING_ELECTRON,
  IpcEvents.DOWNLOAD_ELECTRON_FAIL,
  IpcEvents.DOWNLOAD_ELECTRON_SUCCESS,
  IpcEvents.STARTING_SOI_SERVER,
  IpcEvents.STARTING_SOI_SERVER_FAIL,
  IpcEvents.STARTING_SOI_SERVER_SUCCESS,
  IpcEvents.STOPPING_SOI_SERVER,
  IpcEvents.STOPPING_SOI_SERVER_FAIL,
  IpcEvents.STOPPING_SOI_SERVER_SUCCESS
];

export const WEBCONTENTS_READY_FOR_IPC_SIGNAL =
  "WEBCONTENTS_READY_FOR_IPC_SIGNAL";
