import React,{useEffect, useState} from 'react';
import '../../styles/popupNews.css'
import close from '../../../public/img/btnSettingsClose.png'
import TopContent from './topContent';
import ScrollContent from './scrollContent';
import ReadMore from './ReadMore/readMore';

const PopupNews = ({setOpenNews,openNews,news,getAllNews}) =>{

    const [newsContent, setNewsContent] = useState(news.articles);
    const [TopItemsNews, setTopItemsNews] = useState([]);
    const [openReadMore, setOpenReadMore] = useState(false);
    const [id, setId] = useState(0);
  
    console.log(newsContent);

    useEffect(()=>{
        getAllNews()
        setTopItemsNews(newsContent.splice(3))
    },[])

    const openMoreAndFindItemId = (id) =>{
        setId(id);
        setOpenReadMore(!openReadMore);
    }
   
    return(<>
        {openReadMore 
            ? <ReadMore openReadMore={openReadMore} setOpenReadMore={setOpenReadMore} id={id} news={news.articles}/>
            : <div className="popupContainer">
            <p className="textTitle">NEWs</p>
            <span onClick={()=>setOpenNews(!openNews)}><img className="close" src={close}/></span>
            <div className="scrollWrapper">
                <div className="contentContainer">
                {newsContent 
                    ? <>
                        <TopContent ItemsNews={TopItemsNews} />
                        <ScrollContent ItemsNews={newsContent} openMoreAndFindItemId={openMoreAndFindItemId} />
                    </>
                    : null
                } 
                </div>
            </div>
        </div>
        }
        
    </>)
}

export default PopupNews