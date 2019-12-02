import produce from "immer";
import * as path from "path";
import { remote } from "electron";
import * as fs from "fs-extra";
import { READ_FILE } from "./constants";
import { OpenFilesHash, OpenFile } from "../../../interfaces";

const openFiles: OpenFilesHash = {};
export const initialState = {
  openFiles
};

const editorsReducer = (state = initialState, action) =>
  produce(state, (draft: any): any => {
    switch (action.type) {
      case READ_FILE:
        const content = fs.readFileSync(
          path.join(
            remote.app.getPath("userData"),
            "soi",
            action.payload.filepath
          ),
          "utf8"
        );
        // For now only support open one file editor
        // TODO: support multiple files
        let openFile:OpenFile = {
          path: action.payload.filepath,
          name: path.basename(action.payload.filepath),
          extName: path.extname(action.payload.filepath),
          content
        }
        draft.openFiles = {};
        draft.openFiles[action.payload.filepath] = openFile;
        break;
      default:
        break;
    }
  });

export default editorsReducer;
