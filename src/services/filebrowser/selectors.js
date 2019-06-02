import { mountPoint } from "./";
import { createSelector } from "reselect";

// Service > filebrowser''

export const getDirectoryList = createSelector(
    state => state[mountPoint],
    directories => directories.directoryList
);

export const getDirectories = createSelector(
    state => state[mountPoint],
    directories => directories.directories
);

export const getItemsByDirectoryId = createSelector(
    getDirectories,
    (_, dirId) => dirId,
    (directories, dirId) =>
        Object.values((directories[dirId] || {}).items || {})
);

export const getDirNameByDirId = createSelector(
    getDirectories,
    (_, dirId) => dirId,
    (directories, dirId) =>
        Object.values((directories[dirId] || {}).dirName || {})
);
