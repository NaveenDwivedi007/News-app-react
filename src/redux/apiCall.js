async function apiCall(){
    const res = await fetch("https://api.first.org/data/v1/news")
    const json= await res.json()
    return json.data
}
const apiData = apiCall()
export default apiData