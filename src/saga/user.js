import { all, call, fork, takeLatest, put } from "redux-saga/effects";
import { useNavigate } from "react-router-dom";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../reducer/user";
import axios from "axios";

function loginApi() {
  return axios.post("http://localhost:9000/user/login");
}

function* Login() {
  const Navigate = useNavigate();
  try {
    const result = yield call(loginApi);
    yield put({
      type: LOGIN_SUCCESS,
      data: result.data,
    });
    Navigate("/");
  } catch (err) {
    yield put({
      type: LOGIN_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, Login);
}

export default function* userSaga() {
  yield all([fork(watchLogin)]);
}
