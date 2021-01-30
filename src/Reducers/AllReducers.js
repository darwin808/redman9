import { combineReducers } from "redux";
import CounterReducer from "./CounterReducers";
import PeopleReducer from "./PeopleReducer";

const AllReducers = combineReducers({
  CounterReducer,
  PeopleReducer,
});

export default AllReducers;
