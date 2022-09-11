import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { RefreshReducer } from "./reducer";

const reducers = combineReducers({
  Refresh: RefreshReducer,
  });
const initialStates = {};
const middlewares = [thunk];
export const store = createStore(
  reducers,
  initialStates,
  composeWithDevTools(applyMiddleware(...middlewares))
);
