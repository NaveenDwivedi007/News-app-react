async function apiCall(){
    const res = await fetch("https://api.first.org/data/v1/news")
    const json= await res.json()
    return json
}
const apiData = apiCall()
const initialState = {
    data:apiData
}

export const reducer =(state = initialState, action)=>{
    if(action.type==='try'){
        console.log(state);
    }
}