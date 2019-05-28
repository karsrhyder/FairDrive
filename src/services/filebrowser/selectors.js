import { mountPoint } from "./";
import { createSelector } from "reselect";

// Service > filebrowser

const getLocal = state => state[mountPoint];
export const getDirectories = state => getLocal(state).directories;
