import React from 'react';
import '../../styles/popupNews.css'

const TobBlock = ({item}) =>{
    return (
    <div className="ContentBlock">
        <div className="ContentBlockImg">
            <img src={item.headerThumb}/>
        </div>
    </div>
    )
}

const TopContent = ({ItemsNews}) =>{
    return (
        <div className="contextFirst">
            {ItemsNews.map(item=>{
                return <TobBlock key={item.id} item={item} />
            })}
        </div>
    )
}

export default TopContent