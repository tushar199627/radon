const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createBook", BookController.createBook)

router.post("/createAuthor", BookController.createAuthor)

router.get("/getBook", BookController.getBook)
router.get("/bookList1", BookController.bookList)
router.get("/costList", BookController.costList)
router.get("/booksByAuthorId/:authorId", BookController.booksByAuthorId)
router.get("/nameAge",BookController.nameAge)


module.exports = router;