import React from 'react'
import './Grid.css'

const Grid =({
    title="title Not Found",
    summary='summary Not Found',
    published="N/A",
    newsImg='https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
    myModal=()=>{},
    deletelist=()=>{}
})=>{
    return(
        <div className='grid-card'>
            <button onClick={()=>deletelist()} className='btn'>X</button>
            <span onClick={()=>myModal()} >
                <h5 className='warp title'>{title}</h5>
                <p className='warp summary'>{summary}</p>
                <p className='date'>{published } </p>
                <img className='grid-img' src={newsImg} alt='img'/>
            </span>
        </div>
    )
}

export default Grid