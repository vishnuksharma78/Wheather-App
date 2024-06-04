let input = document.querySelector('#city')
let btn = document.querySelector('#add')
let city = document.querySelector('#output')
let temp = document.querySelector('#temp')
let wind = document.querySelector('#wind')
let Humidity = document.querySelector('#Humidity')

btn.addEventListener('click',function(){
    let url1 = `https://api.weatherapi.com/v1/current.json?key=67d2338d029e4766987161651240206&q=${input.value}`
    fetch(url1)
    .then(res => res.json())

    .then(data =>{
        let Cityname = data.location.name
        let tempature = data.current.temp_c
        let wndspeed = data.current.wind_kph
        let humd = data.current.humidity
       
        city.innerHTML=`Weather of <span>${Cityname} </span>`
        temp.innerHTML=`Temperature : <span>${tempature} c</span>`
        wind.innerHTML =`wind speed : <span> ${wndspeed} km/h </span>`
        Humidity.innerHTML=`Humidity : <span> ${humd} %</span>`
    })
    .catch(err => alert("You entered wrong city name "))
})
