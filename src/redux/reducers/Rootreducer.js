import { loginInfo } from "./Reducer";
import { combineReducers } from "redux";

const RootReducer= combineReducers({
    LOGIN_INFO:loginInfo,
})

export default RootReducer