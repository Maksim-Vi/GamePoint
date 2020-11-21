import React from 'react';
import news from '../../../public/img/icon_news_medium.png'
import '../../styles/nav.css'

const Nav = ({setOpenNews,openNews}) =>{
    return (
        <nav>
            <button className="btnNews" onClick={()=>{setOpenNews(!openNews)}}><img src={news}/>Open News</button>
        </nav>
    )
}

export default Nav