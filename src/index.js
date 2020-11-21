import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./components/App.js";
import { Provider } from 'react-redux';
import store from './components/redux/redux-store'

const Main = () =>{
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    )
}


ReactDOM.render(<Main />, document.getElementById("root"));