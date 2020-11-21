import React from 'react';
import '../../styles/popupNews.css'
import likeTrue from '../../../public/img/dialogs_icon_like_green.png'
import likeFalse from '../../../public/img/dialogs_icon_like.png'

const ScrollBlock = ({item,openMoreAndFindItemId}) =>{
    return (
    <div className="ContentBlockSecond">
        <div className="imgBlock">
            <img src={item.headerThumb}/>
        </div>
        <div className="textBlock">
            <h2>{item.title}</h2>   
            <p>{item.publicationDate}</p>
            <p>{item.shortSummary}</p>
        </div>
        <div className="LikeAndMore">
            <span className="likes">
                {item.likes.hasLiked
                    ?  <img className="imgLike" src={likeTrue}/> 
                    :  <img className="imgLike" src={likeFalse}/> 
                } 
                <span className="countLike">{item.likes.amount}</span>
            </span>
            <span className="readMore" onClick={()=>openMoreAndFindItemId(item.id)}>Read More</span>
        </div>
    </div>
    )
}

const ScrollContent = ({ItemsNews,openMoreAndFindItemId}) =>{  
    return (
        <div className="contextSecond">
            {ItemsNews.map(item=>{
                return <ScrollBlock key={item.id} item={item} openMoreAndFindItemId={openMoreAndFindItemId} />
            })}
        </div>
    )
}

export default ScrollContent