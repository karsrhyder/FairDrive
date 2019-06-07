import { put, call, select, takeEvery } from "redux-saga/effects";
import * as a from "./actions";
import * as t from "./actionTypes";

import getDirectoryList from "./fetchFunctions/getDirectoryList";

function* fetchDirectoryList({ dirId }) {
  try {
    const directoryList = yield call(getDirectoryList, {
      dirId
    });

    yield put(a.updateDirectoryList(directoryList));
    return directoryList;
  } catch (e) {
    console.error(`Error on fetchGetDirSaga: ${e.stack}`);
  }
}

export default function*() {
  yield takeEvery(t.FETCH_DIRECTORY_LIST, fetchDirectoryList);
}
