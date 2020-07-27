import { app, remote } from "electron";
import * as path from "path";
import {TypeormConnection} from '../interfaces';

const getHomeFolder = () => {
  try {
    return path.join(app.getPath("home"));
  } catch (err) {
    return path.join(remote.app.getPath("home"));
  }
};
export const MUNEW_HOME_FOLDER = path.join(getHomeFolder(), ".munew");
export const DEFAULT_ANALYST_SERVICE_FOLDER = 'retailerservice';
// default sqlite db configuration
export const DEFAULT_SQLITE_DB_CONFIG = {
  TYPEORM_CONNECTION: TypeormConnection.sqlite,
  TYPEORM_DATABASE: path.join(MUNEW_HOME_FOLDER, "munew_dia.sql")
};

// default mongodb configuration
export const DEFAULT_MONGODB_CONFIG = {
  TYPEORM_CONNECTION: TypeormConnection.mongodb,
  TYPEORM_URL: `mongodb://localhost:27017/munew_dia`
};

// log files path for engine
export const LOG_FILES_PATH = path.join(MUNEW_HOME_FOLDER, "./engine/log");

export const PREFERENCES_JSON_PATH = path.join(MUNEW_HOME_FOLDER, 'preferences.json');

// Timeout value for check whether a SOI start successfully
export const SOI_CHECK_TIMEOUT = 15*1000;