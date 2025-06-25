const tempField = document.querySelector(".temp");
const locField = document.querySelector(".location p");
const dataField = document.querySelector(".data span");
const weatherField = document.querySelector(".weather p");
const searchField = document.querySelector(".Search_area");
const form = document.querySelector("form");
form.addEventListener('submit',searchLocation)
let target = "Cuddapah"
const fetchResults = async (target)=>{
    let url = `http://api.weatherapi.com/v1/current.json?key=515b6736dfa540f4a8d131150252406&q=${target}&aqi=no`
    const res = await fetch(url)
    const data = await res.json()
    let location = data.location.name
    let time = data.location.localtime
    let temp = data.current.temp_c
    let condition = data.current.condition.text
    updateDetails(temp,location,time,condition)
}
function updateDetails(temp,location,time,condition){
    tempField.innerText = `${temp}°C`
    locField.innerText = location
    dataField.innerText = time
    weatherField.innerText = condition
}
function searchLocation(e){
    e.preventDefault()
    target = searchField.value
    fetchResults(target)
}
fetchResults(target)