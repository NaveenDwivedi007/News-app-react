import React from 'react'
import './SideBar.css'; 

const Sidebar=()=>{
    let color = true
    return(
        <div className='container'>
            <div className="card">
                <img className='img' src='https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80' alt='Reader Profile pic'/>
                <div className='detailSection'>
                    <p className='title'>Hi Reader,</p>
                    <p className='detail'>Here is user Name</p>
                </div>
            </div>
            <div className='card toggle-switch'>
                <h2>View Toggle</h2>
                <div className='switch'>
                    <img className='toggle' src='C:\Users\Naveen Dwivedi\Documents\projects\news-app\src\assets\grid-view.png' alt='img of grid view' />
                    <img className='toggle' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fthenounproject.com%2Fterm%2Flist-view%2F&psig=AOvVaw1B40s67456-gty96VKIWw_&ust=1630396686420000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCNCL3Y2j2PICFQAAAAAdAAAAABAF' alt='' />
                </div>
            </div>
            <div className='card'>
            <div className='feedback'>
                <h2>Have a FeedBack ?</h2>
                <button style={color ?{backgroundColor:'#4DE578'}: {backgroundColor: '#F24469'}}>We're Listening!</button></div>
            </div>
        </div>
    )
}

export default Sidebar