const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
const bookList= async function (req, res) {
    let listOfBooks = await BookModel.find().select({bookName:1,authorName:1, _id:0})
    res.send({msg: listOfBooks})
}

const getBooksInYear= async function (req, res) {
    let year=req.body.year
    let listOfBooks = await BookModel.find({year}).select({bookName:1, _id:0})
    res.send({msg: listOfBooks})
}

const getXINRBooks= async function (req, res) {
    let listOfBooks = await BookModel.find({$or:[{"prices.indianPrice":{$eq:"Rs 100"}}, {"prices.indianPrice":{$eq:"Rs 200"}},{"prices.indianPrice":{$eq:"Rs 500"}}]})
    res.send({msg: listOfBooks})
}
const getParticularBooks= async function (req, res) {
    let listOfBooks = await BookModel.find(req.body)
    res.send({msg: listOfBooks})

}
const getRandomBooks= async function (req, res) {
    let listOfBooks = await BookModel.find({$or:[{stockAvailable:true},{totalPages:{$gt:500}}]})
    res.send({msg: listOfBooks})

}

  
module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks