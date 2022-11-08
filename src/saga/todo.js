import axios from "axios";
import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import {
  ALLPOST_FAILURE,
  ALLPOST_REQUEST,
  ALLPOST_SUCCESS,
} from "../reducer/todo";

function postApi() {
  return axios.get("http://localhost:9000/todo");
}

function* loadPost() {
  try {
    const result = yield call(postApi);
    yield put({
      type: ALLPOST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ALLPOST_FAILURE,
      error: err.response.data,
    });
    throw new Error(err);
  }
}

function* watchLoadPost() {
  yield takeLatest(ALLPOST_REQUEST, loadPost);
}

export default function* todoSaga() {
  yield all([fork(watchLoadPost)]);
}
