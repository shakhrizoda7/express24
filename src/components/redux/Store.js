import { createStore } from "redux";
import { Reducer } from "./Reducer";

// create Redux store with the reducer
const store = createStore(Reducer);

// handle dispatch in store
const dispatch = store.dispatch;
export {dispatch};

export default store;