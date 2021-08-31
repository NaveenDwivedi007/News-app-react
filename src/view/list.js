import React from 'react'
import './list.css'

const List=({title,summary,published})=>{
 
    return(
        <div className='list-card'>
            <span className='list-card-body' >
                <img className='img' src='https://images.unsplash.com/photo-1544873221-1b85d4624756?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' alt='not' />
                <span className='list-detail' >
                    <p className='wrap list-title' >{title}</p>
                    <p className='wrap list-summary'>{summary}</p>
                    <p className='list-date' >{published}</p>
                </span>
            </span>
            <button className='btn'>X</button>
        </div>
    )
}
export default List