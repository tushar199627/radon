let axios = require("axios")
let getmeme = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://api.imgflip.com/get_memes'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let changememe = async function (req, res) {
try {
    let id = req.query.template_id
    let text1 = req.query.text0
    let text2 = req.query.text1
    let username = req.query.username
    let password = req.query.password
    let options = {
        method: "post",
        url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${text1}&text1=${text2}&username=${username}&password=${password}`,
        headers: []
    }
    let result = await axios(options)
    res.status(200).send({ msg: result.data })
}
catch (err) {
    console.log(err)
    res.status(500).send({ msg: err.message })
}
}
module.exports.getmeme=getmeme
module,exports.changememe=changememe