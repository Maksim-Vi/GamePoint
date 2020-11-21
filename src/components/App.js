import React, { useState, useEffect } from "react";
import '../styles/App.css';
import Nav from "./nav/nav";
import PopupNews from "./PopupNews/PopupNews";
import { connect } from 'react-redux';
import { compose } from 'redux';
import {initializeApp,getAllNews} from './redux/reducers/app-reducer'

const App = (props) =>{
    const [openNews,setOpenNews] = useState(true)

    useEffect(()=>{
        props.getAllNews()
    },[])
    
    return (
        <div>
            <Nav openNews={openNews} setOpenNews={setOpenNews}/>
            {props.initialized && openNews
            ? <PopupNews openNews={openNews} setOpenNews={setOpenNews} news={props.news} getAllNews={props.getAllNews}/>
            :null}
           
        </div>
    );
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    news: state.app.news
  });
  
let AppContainer =  compose(
    connect(mapStateToProps,{initializeApp,getAllNews})
)(App);

export default AppContainer