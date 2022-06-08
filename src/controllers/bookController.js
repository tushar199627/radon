const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}
const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
const getBook= async function (req, res) {
    let data = await AuthorModel.find({author_name:"Chetan Bhagat"}).select("author_id")
    console.log(data)
    let dataBook = await BookModel.find({author_id:data[0].author_id})
    res.send({msg: dataBook})
}


const bookList= async function (req, res) {
    let listOfBooks = await BookModel.findOneAndUpdate(
        {name:"Two States"},
        {$set: {price:100}},
        {new:true}
    )
    let authornames = await AuthorModel.find({author_id:listOfBooks.author_id}).select("author_name",)
    let updatedPrice=listOfBooks.price
    res.send({msg: authornames, updatedPrice})
}


const costList= async function (req, res) {
    let listOfBooks = await BookModel.find({ price : { $gte: 50, $lte: 100} }).select({author_id:1, })
    let authornamess = await AuthorModel.find({author_id:listOfBooks.map(ele=>ele.author_id)}).select({author_name:1, author_id:1, _id:0})
    
    res.send({msg:authornamess})
    }

    const booksByAuthorId= async function (req, res) {
        let  authorId=req.params.authorId
        let listOfBooks = await BookModel.find({author_Id:authorId}).select({name:1})
        res.send({msg:listOfBooks})
    }
    
    const nameAge = async function (req,res) {
        let data= await BookModel.find({rating:{$gt:4}}).select({author_id:1, name:1})
        const id=data.map(ele=>ele.author_id)
        let temp=[]
        for(i=0;i<id.length;i++)
        {
            const author=await authorModel.find({$and:[{author_id:id[i]},{age:{$gt:50}}]}).select({author_name:1,author_id:1})
            temp.push(author)
        }
        const authorna=temp.flat()
        res.send({msg: authorna})
        }

    

module.exports.createAuthor= createAuthor
module.exports.createBook= createBook
module.exports.getBook= getBook
module.exports.bookList= bookList
module.exports.costList= costList
module.exports.booksByAuthorId= booksByAuthorId
module.exports.nameAge=nameAge

//https://telegram.me/+FFmo-674uwUyMzg9