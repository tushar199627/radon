const { isValidObjectId } = require("mongoose")
const authorModel = require("../models/authorModel")
const { populate } = require("../models/bookModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")

const createBook= async function (req, res) {
    const {author, publisher} = req.body
    if(!author || !publisher){
        res.send("this field is required")
    }else{
        const authorId=await authorModel.findById(author);
        const publisherId=await publisherModel.findById(publisher);
        if(!authorId && !publisherId){
            res.send("error")
            
            
        }else{
            let bookCreated = await bookModel.create(req.body)
            res.send({data: bookCreated})
        }
    }
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate("author").populate("publisher")
    res.send({data: books})
}


// const book=async function(req,res) {
//     let data1= await publisherModel.find()
//     console.log(data1)
    //if(data1.name=="penguin" && data1.name=="HarperCollins")
    // let data= await bookModel.update(
    //     {data1.name:}
    //         )
    // }
    // )

// }
// const book1=async function(req,res){
//     const authorId=await authorModel.find();
//     console.log(authorId)
// }

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
// module.exports.book=book
// module.exports.book1=book1