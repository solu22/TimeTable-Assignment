import { combineReducers } from "redux";
import reducers from "./reducers";

const rootReducer = combineReducers({dataReducer: reducers})

export default rootReducer