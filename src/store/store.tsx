import { createStore,combineReducers } from "redux";
import { counter, list } from "../reducers/reducers";

const store = createStore(combineReducers({counter, list}));

export default store;