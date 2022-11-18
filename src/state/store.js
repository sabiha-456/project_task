import { createStore, combineReducers } from "redux";
import { courseReducer } from "./reducers/courseReducer";

export const configStore = () => {
  const mystore = createStore(
    combineReducers({ courseReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return mystore;
};
