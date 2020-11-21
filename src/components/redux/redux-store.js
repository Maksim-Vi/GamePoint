import thunkMiddleware from "redux-thunk";
import { combineReducers, applyMiddleware, createStore } from "redux";
import AppReducer from "./reducers/app-reducer";

let reducers = combineReducers({
    app: AppReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware)); 

window.store = store;

export default store;