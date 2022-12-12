import { Reducer } from "redux";
import { HomeActionTypes } from "../../types";
import { InitialState } from ".";

const reducer: Reducer<any> = (state = InitialState, action) => {
  switch (action.type) {
    case HomeActionTypes.FETCH_COUNTRY_LIST: {
      return { ...state };
    }
    case HomeActionTypes.FETCH_SUCCESS: {
      return { ...state, countryList: action.payload };
    }
    case HomeActionTypes.FETCH_ERROR: {
      return { ...state, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as homeReducer };
