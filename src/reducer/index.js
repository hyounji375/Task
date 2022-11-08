import { combineReducers } from "redux";
import userReducer from "./user";
import todoReducer from "./todo";

const rootReducer = combineReducers({
  userReducer,
  todoReducer,
});
export default rootReducer;
