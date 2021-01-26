import {combineReducers} from "redux";
import {loginReducer} from "./loginReducer";
import {todayReducer} from "./todayReducer";
import {animalsReducer} from "./animalsReducer";

export const rootReducer = combineReducers({
  login: loginReducer,
  today: todayReducer,
  animal: animalsReducer,
})
