// deleting article not rendering and need to change page to reflect the deleted article
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import './NewsArea.css';
import { useDispatch, useSelector } from 'react-redux';
import { 
    add_page_detail, 
    change_page, 
    delete_news_article, 
    get_news_api_data, 
    modal_link, 
    NEWS_GRID, 
    NEWS_LIST, 
    next_page,
    prev_page
} from '../redux/action';
import Grid from '../view/Grid';
import List from '../view/list.js';




const NewsArea=({pageArr})=>{
    const newsView = useSelector(state => state.view)
    const feedBAck_status = useSelector(state => state.feedBack)
    const modalUrl = useSelector(state => state.modalLink)
    const currentPageNumber = useSelector(state=>state.currentPage)
    const pageNumber = useSelector(state=>state.currentPage)
    const pageOne = useSelector(state=>state.pageOne)
    const pageTwo = useSelector(state=>state.pageTwo)
    const pageThree = useSelector(state=>state.pageThree)
    const [newsArr,setNewsArr] = useState(pageOne)
    const [modalOpen,setModalOpen]= useState(false)
    const modalStyle ={
        content:{
            backgroundColor: 'transparent',
            overflow:'hidden',
            border:'none'
        }
    }
    
    const dispatch = useDispatch()
    async function apiCall(){
        const res = await fetch("https://api.first.org/data/v1/news")
        const json= await res.json()
        console.log(json);
        dispatch(get_news_api_data(json))
        dispatch(add_page_detail(json.data))
    }
    const toggleModal =()=>{
        setModalOpen(!modalOpen)
    }
    const myModal = (link)=>{
        toggleModal()
      return  dispatch(modal_link(link))
    }
    const deleteArticle=(index)=>{
          return dispatch(delete_news_article(index))
      }
    useEffect(()=>{
        apiCall()
        
    },    // eslint-disable-next-line
    []) 


    useEffect(()=>{
        if (pageNumber === 1) {
        return setNewsArr(pageOne)
        }
        if (pageNumber === 2) {
        return setNewsArr(pageTwo)
        }
        if (pageNumber === 3) {
        return setNewsArr(pageThree)
        }
    },[pageNumber, pageOne, pageThree, pageTwo])
   
  
  

    if (newsView === NEWS_LIST) {
        return(
            <div className={feedBAck_status ? "news-container" : ""}>
                <div className="list-news-container" >
                    {newsArr.map((x,i)=>{
                        return(
                            <List 
                            key={x.id}
                            title={x.title}
                            summary={x.summary}
                            published={x.published}
                            deletelist={()=>deleteArticle(i)}
                            myModal={()=>myModal(x.link)}
                            />
                        )
                    })}
                </div>

                <div className="btn-container">
                        <button 
                        className="change-page-btn" 
                        onClick={()=>dispatch(prev_page(currentPageNumber-1))}
                        >
                        {"<<"}</button>
                        <button 
                        className="change-page-btn" 
                        style={currentPageNumber===1 ? {backgroundColor:"white"} : null}
                        onClick={()=>dispatch(change_page(1))}
                        >
                        1</button>
                        <button
                        style={currentPageNumber===2 ? {backgroundColor:"white"} : null}
                        className="change-page-btn"
                        onClick={()=>dispatch(change_page(2))}
                        >
                        2</button>
                        <button
                        style={currentPageNumber===3 ? {backgroundColor:"white"} : null}
                        className="change-page-btn"
                        onClick={()=>dispatch(change_page(3))}
                        >
                        3</button>
                        <button 
                        className="change-page-btn" 
                        onClick={()=>dispatch(next_page(currentPageNumber+1))}
                        >
                        {">>"} </button>
                </div>
                <Modal
                isOpen={modalOpen}
                style={modalStyle}
                >
                    <div className='modal-container' >
                        <button onClick={toggleModal} className='modal-btn'>X</button>
                        <iframe className='modal-page' title='article detail' src={modalUrl} />
                    </div>
                </Modal>
                
            </div>
        )
    }else if (newsView === NEWS_GRID)    
    {
        return(
            <div className={feedBAck_status ? "news-container" : ""} >
                <div className="grid-news-container">
                    {newsArr.map((x,i)=>{
                        return(
                            <Grid 
                            key={x.id}
                            title={x.title}
                            summary={x.summary}
                            published={x.published}
                            deletelist={()=>dispatch(delete_news_article(i))}
                            myModal={()=>myModal(x.link)}
                            />
                        )
                    })}
                </div>
                <div className="btn-container">
                <button 
                className="change-page-btn" 
                onClick={()=>dispatch(prev_page(currentPageNumber-1))}
                >
                {"<<"}</button>
                <button 
                className="change-page-btn" 
                style={currentPageNumber===1 ? {backgroundColor:"white"} : null}
                onClick={()=>dispatch(change_page(1))}
                >
                1</button>
                <button
                style={currentPageNumber===2 ? {backgroundColor:"white"} : null}
                className="change-page-btn"
                onClick={()=>dispatch(change_page(2))}
                >
                2</button>
                <button
                style={currentPageNumber===3 ? {backgroundColor:"white"} : null}
                className="change-page-btn"
                onClick={()=>dispatch(change_page(3))}
                >
                3</button>
                <button 
                className="change-page-btn" 
                onClick={()=>dispatch(next_page(currentPageNumber+1))}
                >
                {">>"} </button>
        </div>


            <Modal
             isOpen={modalOpen}
             style={modalStyle}
             >
                <div className='modal-container' >
                    <button onClick={toggleModal} className='modal-btn'>X</button>
                    <iframe className='modal-page' title='article detail' src={modalUrl}  />
                </div>
            </Modal>
            

        </div>
        )
    }
}

export default NewsArea