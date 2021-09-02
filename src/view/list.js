import React from 'react'
import './list.css'

const List=({
    title="title Not Found",
    summary='summary Not Found',
    published="N/A",
    newsImg='https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80', 
    myModal=()=>{},
    deletelist=()=>{}
})=>{
 
    return(
        <div className='list-card'>
            <span className='list-card-body' onClick={()=>myModal()} >
                <img className='img' src={newsImg} alt='not img found' />
                <span className='list-detail' >
                    <p className='wrap list-title' >{title}</p>
                    <p className='wrap list-summary'>{summary}</p>
                    <p className='list-date'  >{published}</p>
                </span>
            </span>
            <button className='btn' onClick={()=>deletelist()}>X</button>
        </div>
    )
}
export default List