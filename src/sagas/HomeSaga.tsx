import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { fetchError, fetchSuccess } from "../redux/home/Action";
// import { callApi } from "../utils/Api";
import { HomeActionTypes } from "../types";
import { Countries } from "../utils/MockData";

function* fetchCountryList(): any {
  try {
    const res: any = Countries();
    if (res.error) {
      yield put(fetchError(res.error));
    } else {
      yield put(fetchSuccess(res));
    }
  } catch (err) {
    console.log(err);
  }
}

function* watchFetchCountry() {
  yield takeEvery(HomeActionTypes.FETCH_COUNTRY_LIST, fetchCountryList);
}

function* HomeSaga() {
  yield all([fork(watchFetchCountry)]);
}

export default HomeSaga;
