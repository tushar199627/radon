const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

// router.get('/hello', function (req, res) {
   
//     res.send('Hello there!')
// });

// router.get('/candidates', function(req, res){
//     console.log('Query paramters for this request are '+JSON.stringify(req.query))
//     let gender = req.query.gender
//     let state = req.query.state
//     let district = req.query.district
//     console.log('State is '+state)
//     console.log('Gender is '+gender)
//     console.log('District is '+district)
//     let candidates = ['Akash','Suman']
//     res.send(candidates)
// })

// router.get('/candidates/:canidatesName', function(req, res){
//     console.log('The request objects is '+ JSON.stringify(req.params))
//     console.log('Candidates name is '+req.params.canidatesName)
//     res.send('Done')
//})
router.get('/movies', function(req, res){
    const arr=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    console.log("arr")
    res.send({arr})

})
router.get('/movies/:indexNumber', function(req, res){
    const arr=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
       let index=arr[req.params.indexNumber]
    if(index!=arr.length){
        res.send(index || "no film")
    }
    console.log("sent")

})
router.get('/films',function(req,res){
const arr= [ {
    "id": 1,
    "name": "The Shining"
   }, {
    "id": 2,
    "name": "Incendies"
   }, {
    "id": 3,
    "name": "Rang de Basanti"
   }, {
    "id": 4,
    "name": "Finding Nemo"
   }]
   console.log(arr)
   res.send(arr)
})
router.get('/films/:filmid',function(req,res){
    const arr= [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
   let filmname=arr[req.params.filmid-1]
   if(filmname!=arr.length){
       res.send(filmname || "no film")
   }
       console.log("response is sent")
    })


module.exports = router;
// adding this comment for no reason