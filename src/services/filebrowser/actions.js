import * as t from "./actionTypes";

console.log("actions")

// Service > user
export const fetchDirectoryList = dirId => ({
  type: t.FETCH_DIRECTORY_LIST,
  dirId
});

export const updateDirectoryList = directoryList => ({
  type: t.UPDATE_DIRECTORY_LIST,
  data: directoryList
})