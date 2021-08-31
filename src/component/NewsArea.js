import React, { useEffect, useState } from 'react'
// import Grid from '../view/Grid';
import List from '../view/list';
import Modal from 'react-modal';
import './NewsArea.css';
import { useDispatch } from 'react-redux';
let data =  {
    "id": 40806,
    "title": "Episode 6: Kyle Tobener - VP and Head of Security & IT at Copado",
    "summary": "Kyle is a VP and Head of Security & IT at Copado. Kyle, Martin, and Chris talk security careers and share their own personal experiences. Recorded July 2021. Disclaimer: The views expressed by the hosts and guests are their own and their participation on the podcast does not imply an endorsement of them or any entity they represent.",
    "link": "https://media.first.org/podcasts/FIRST_IMPRESSIONS-KyleTobener.mp3",
    "published": "Fri, 06 Aug 2021 00:00:00 GMT"
  }
const NewsArea=()=>{
    // eslint-disable-next-line
    const [news,setNews] = useState([])
    const [modalOpen,setModalOpen]= useState(true)
    const modalStyle ={
        content:{
            backgroundColor: 'transparent',
            overflow:'hidden',
            border:'none'
        }
    }
    
    const dispatch = useDispatch()
    useEffect(()=>{
        apiCall()
    },    // eslint-disable-next-line
    []) 

    async function apiCall(){
        const res = await fetch("https://api.first.org/data/v1/news")
        const json= await res.json()
        setNews(json.data)
    }

    const toggleModal =()=>{
        setModalOpen(!modalOpen)
    }

    return(
        <div style={{width:'100%'}}>
        <h1 onClick={()=>dispatch(()=>{return {type:'try'}})} >try</h1>
            <List title={data.title} summary={data.summary} published={data.published} />
            <Modal
             isOpen={modalOpen}
             style={modalStyle}
             >
                <div className='modal-container' >
                    <button onClick={toggleModal} className='modal-btn'>X</button>
                    <iframe className='modal-page' title='article detail' src='https://en.wikipedia.org/wiki/Hydrogen' />
                </div>
            </Modal>
        </div>
    )
}

export default NewsArea