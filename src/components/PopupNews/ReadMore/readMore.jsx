import React from 'react';
import '../../../styles/popupNews.css'
import close from '../../../../public/img/btnSettingsClose.png'

const ReadMore = ({openReadMore,setOpenReadMore,id,news}) =>{
    let currentItem = news.find(item => item.id === id)

    return (
    <div className="popupContainer">
        <p className="textTitle">NEWs</p>
        <span onClick={()=>setOpenReadMore(!openReadMore)}><img className="close" src={close}/></span>
        <div className="textMoreContainer">
            <img className="imgMore" src={currentItem.headerImage}/>
            <p className="textMore">{currentItem.body}</p>
        </div>
    </div>
    )
}

export default ReadMore