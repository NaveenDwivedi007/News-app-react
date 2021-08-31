import React from 'react'
import './Grid.css'

const Grid =({cb})=>{
    let data =  {
        "id": 40806,
        "title": "Episode 6: Kyle Tobener - VP and Head of Security & IT at Copado",
        "summary": "Kyle is a VP and Head of Security & IT at Copado. Kyle, Martin, and Chris talk security careers and share their own personal experiences. Recorded July 2021. Disclaimer: The views expressed by the hosts and guests are their own and their participation on the podcast does not imply an endorsement of them or any entity they represent.",
        "link": "https://media.first.org/podcasts/FIRST_IMPRESSIONS-KyleTobener.mp3",
        "published": "Fri, 06 Aug 2021 00:00:00 GMT"
      }
    return(
        <div className='grid-card'>
            <button onClick={cb} className='btn'>X</button>
            <span>
                <h5 className='warp title'>{data.title}</h5>
                <p className='warp summary'>{data.summary}</p>
                <p className='date'>{data.published } </p>
                <img className='grid-img' src='https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80' alt='img'/>
            </span>
        </div>
    )
}

export default Grid