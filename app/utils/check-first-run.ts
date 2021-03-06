import * as fs from "fs-extra";
import * as path from "path";
import { FIRST_TIME_RUN_FILE } from "../shared-constants";
import { BITSKY_HOME_FOLDER } from "./constants";
import logger from "./logger";

const getConfigPath = () => {
  const firstRunFilePath = path.join(
    BITSKY_HOME_FOLDER,
    "FirstRun",
    FIRST_TIME_RUN_FILE
  );
  logger.info("utils->check-first-run->firstRunFilePath: ", firstRunFilePath);
  return firstRunFilePath;
};

/**
 * Whether or not the app is being run for
 * the first time
 *
 * @returns {boolean}
 */
export function isFirstRun(): boolean {
  const configPath = getConfigPath();

  try {
    if (fs.existsSync(configPath)) {
      return false;
    }

    fs.outputFileSync(configPath, "");
    logger.info(
      "utils->check-first-run->isFirstRun, writ file to path: ",
      configPath
    );
  } catch (error) {
    console.warn(`First run: Unable to write firstRun file`, error);
  }

  return true;
}
