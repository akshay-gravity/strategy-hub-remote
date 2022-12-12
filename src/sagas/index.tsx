import { all, fork } from "redux-saga/effects";
import HomeSaga from "./HomeSaga";

export function* rootSaga(): Generator {
  yield all([fork(HomeSaga)]);
}
