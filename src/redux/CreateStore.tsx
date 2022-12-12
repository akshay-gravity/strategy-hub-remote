import { TypedUseSelectorHook, useSelector } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxSaga from "redux-saga";
import { InitialState as homeInitialState, homeReducer } from "./home";
import { rootSaga } from "../sagas/index";

export const initialState = {
    home: homeInitialState,
  },
  sagaMiddleware = reduxSaga(),
  rootReducer = combineReducers({
    homeReducer,
  }),
  store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;
