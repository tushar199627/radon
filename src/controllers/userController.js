const UserModel= require("../models/userModel")

const bookDetails= async function (req, res) {
    let details= req.body
    let savedDetails= await UserModel.create(details)
    res.send({msg: savedDetails})
}

const getBookDetails= async function (req, res) {
    let allDetails= await UserModel.find()
    res.send({msg: allDetails})
}

module.exports.bookDetails= bookDetails
module.exports.getBookDetails= getBookDetails