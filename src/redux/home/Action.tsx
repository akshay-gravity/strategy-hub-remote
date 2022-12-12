import { action } from "typesafe-actions";
import { HomeActionTypes } from "../../types";

export const fetchRequest = () => action(HomeActionTypes.FETCH_COUNTRY_LIST);
export const fetchSuccess = (data: any) =>
  action(HomeActionTypes.FETCH_SUCCESS, data);
export const fetchError = (message: string) =>
  action(HomeActionTypes.FETCH_ERROR, message);
