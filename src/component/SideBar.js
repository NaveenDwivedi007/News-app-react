import React, { useState } from 'react'
import './SideBar.css'; 
import list from '../assets/list.png'
import grid from '../assets/grid.png'
import { useDispatch, useSelector } from 'react-redux';
import { feedback_status, news_grid, NEWS_GRID, news_list, NEWS_LIST } from '../redux/action';
import FeedBack from './Feedback';


const Sidebar=()=>{
    const newsView = useSelector(state=>state.view)
    const [feedbackStatus,setFeedbackStatus]= useState(true)
    const dispatch = useDispatch()
    const viewChange = ()=>{
        if (newsView === NEWS_GRID) {
            return dispatch(news_list())
        }else{
            return dispatch(news_grid())
        }
    }
   
    const feedStatus = ()=>{
        dispatch(feedback_status())
        return setFeedbackStatus(!feedbackStatus)
    }

    return(
        <div className='container'>
            <div 
            className={feedbackStatus? "feedback-container shift" : "feedback-container"}
            >
                <FeedBack/>
            </div>
            <div className="card-container">
                    <div className="card">
                    <img className='img' src='https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80' alt='Reader Profile pic'/>
                    <div className='detailSection'>
                        <p className='title'>Hi Reader,</p>
                        <p className='detail'>Here is user Name</p>
                    </div>
                </div>
                <div className='card toggle-switch' style={feedbackStatus ? {display:"none"}: null} >
                    <h2>View Toggle</h2>
                    <div className='switch' onClick={()=>viewChange()}>
                        <img className='toggle' style={newsView===NEWS_GRID ? {backgroundColor:'#4DE578',scale:'1.05'} : {scale:'.95'}} src={grid} alt='img of grid view' />
                        <img className='toggle' style={newsView === NEWS_LIST ? {backgroundColor:'#4DE578',scale:'1.05'} : {scale:'.95'}} src={list} alt='' />
                    </div>
                </div>
                <div className='card'>
                    <div className='feedback'>
                        <h2>Have a FeedBack ?</h2>
                        <button
                        onClick={()=>feedStatus()}
                        style={feedbackStatus ? {backgroundColor: '#F24469'} :{backgroundColor:'#4DE578'}} 
                        >We're Listening!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar