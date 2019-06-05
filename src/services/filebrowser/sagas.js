import { put, call, select, takeEvery } from "redux-saga/effects";
import * as a from "./actions";
import * as t from "./actionTypes";

import getDirectoryList from "./fetchFunctions/getDirectoryList";

console.log("sagas")

function* fetchDirectoryList({ dirId }) {
  try {
    const directoryList = yield call(getDirectoryList, { dirId });

    console.log("sagas dirlist:", directoryList)
    console.log('fetchung dir', dirId);

    yield put(a.updateDirectoryList(directoryList));
    console.log("Saga starging DirectoryList", directoryList);
    return directoryList;

  }
  catch (e) {
    console.error(`Error on fetchHashtagSaga: ${e.stack}`);
  }
}


export default function* () {
  yield takeEvery(t.FETCH_DIRECTORY_LIST, fetchDirectoryList);
}
