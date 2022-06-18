let axios = require("axios")
let getWeather = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=b93a4cf85c9deebe289b41d3b28f19e3'
        }
        let result = await axios(options);
        console.log(result)
        res.status(200).send({ msg: result.data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getTemp = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=b93a4cf85c9deebe289b41d3b28f19e3'
        }
        let result = await axios(options);
        console.log(result)
        res.status(200).send({ temp: result.data.main.temp, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let getCities = async function (req, res) {

    try {
        let cities=["Bengaluru","Mumbai","Delhi","Kolkata","Chennai,","London","Moscow"]
        let cityObj=[]
        for(i=0;i<cities.length;i++){

            let obj={city: cities[i]}
        
        let options = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=b93a4cf85c9deebe289b41d3b28f19e3`)
        obj.temp=options.data.main.temp
        cityObj.push(obj)
    }
    let sorted=cityObj.sort (function(a,b) { return a.temp-b.temp})
    res.status(200).send({ data:sorted, status: true })
}
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getWeather=getWeather
module.exports.getTemp=getTemp
module.exports.getCities=getCities