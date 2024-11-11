import { combineReducers } from "redux";
import { addReducer } from "./reducers/addReducers";
import { layoutReducer } from "./reducers/layout";

const rootReducer = combineReducers({
    layout: layoutReducer,
    addReducer,
});

export default rootReducer;