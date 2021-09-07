import { 
  ADD_PAGE_DETAIL,
  GET_NEWS_API_DATA,
  NEWS_GRID, 
  NEWS_LIST,
  CHANGE_PAGE,
  DELETE_NEWS_ARTICLE,
  NEXT_PAGE,
  PREV_PAGE,
  MODAL_LINK,
  FEEDBACK_STATUS
} from "./action"


const initialState = {
    data:{},
    view: "list",
    currentPage: 1,
    pageOne:[],
    pageTwo:[],
    pageThree:[],
    modalLink:null,
    feedBack:true
}


export const reducer =(state = initialState,action)=>{

  if (action.type=== GET_NEWS_API_DATA) {
    return state.data= {...state,...action.payload}
  }
  if (action.type === ADD_PAGE_DETAIL) {
      return state ={
        ...state,
        pageOne:action.payload.filter((x,i)=>i<6),
        pageTwo:action.payload.filter((x,i)=>i>5 && i<12),
        pageThree:action.payload.filter((x,i)=>i>11 && i<18),
        
      }
  }
  if (action.type === NEWS_GRID) {
      return state={...state,view:NEWS_GRID}
  }
  if (action.type === NEWS_LIST) {
      return state={...state,view:NEWS_LIST}
  }
  if (action.type === CHANGE_PAGE ) {
    return state={
      ...state,
      currentPage:action.payload
    }
  }
  if (action.type === NEXT_PAGE ) {
    return state={
      ...state,
      currentPage:action.payload>3 ? 1 : action.payload
    }
  }
  if (action.type === PREV_PAGE ) {
    return state={
      ...state,
      currentPage:action.payload<1 ? 3 : action.payload
    }
  }
  if (action.type=== DELETE_NEWS_ARTICLE) {
    if (state.currentPage===1) {
      state.pageOne.splice(action.payload,1)
      return state={
        ...state,
      }
    }
    if (state.currentPage===2) {
      state.pageTwo.splice(action.payload,1)
      return state={
        ...state
      }
    }
    if (state.currentPage===3) {
      state.pageThree.splice(action.payload,1)
      return state={
        ...state,
      }
    }
  }
  if (action.type === MODAL_LINK) {
    return state= {
      ...state,
      modalLink:action.payload
    }
  }
  if (action.type === FEEDBACK_STATUS) {
    return state={
      ...state,
      feedBack:!state.feedBack
    }
  }
  return state

}

