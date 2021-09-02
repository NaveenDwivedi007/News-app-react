export const NEWS_LIST = "list"
export const NEWS_GRID = "grid"
export const GET_NEWS_API_DATA = "get_news_api_data"
export const ADD_PAGE_DETAIL='add_page_detail'
export const CHANGE_PAGE = "change_page"
export const NEXT_PAGE = "next_page"
export const PREV_PAGE = "prve_page"
export const MODAL_LINK = "modal_link"
export const DELETE_NEWS_ARTICLE ="delete_news_article"
export const FEEDBACK_STATUS ="feedback_status"



export const get_news_api_data =(data)=>{ return {type:GET_NEWS_API_DATA, payload:data}}
export const add_page_detail =(data)=>{ return {type:ADD_PAGE_DETAIL,payload:data}}
export const news_list =()=>{return {type:NEWS_LIST}}
export const news_grid =()=>{return {type:NEWS_GRID}}
export const change_page =(data)=>{ return {type:CHANGE_PAGE,payload:data}}
export const next_page =(data)=>{ return {type:NEXT_PAGE,payload:data}}
export const prev_page =(data)=>{ return {type:PREV_PAGE,payload:data}}
export const modal_link =(data)=>{ return {type:MODAL_LINK,payload:data}}
export const delete_news_article = (data)=>{return {type:DELETE_NEWS_ARTICLE,payload:data}}
export const feedback_status = ()=>{return {type:FEEDBACK_STATUS}}
