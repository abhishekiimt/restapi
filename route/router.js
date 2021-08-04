const express = require('express')
const router = express.Router()
const DataBaseName = require('../model/dataBase')
// change the database name coording to you

//CRUD operation

//CREATE new
router.post('/new', async (req, res) =>{
    const newDbData = new DataBaseName(req.body)
    try {
        const dbData = await newDbData.save()
        res.status(200).send(dbData)
    } catch (error) {
        res.status(400).json(error)
    }
})


//READ all
router.get('/', async (req, res) => {
    const dbData = await DataBaseName.find()
    res.json(dbData)
})

//UPDATE One by ID
router.patch('/:id', async (req, res) =>{
    const updateDB = await DataBaseName.updateOne({ _id : req.params.id}, {$set : res.body})
    res.json(updateDB)
})

// DELETE one By ID
router.delete('/:id', async (req, res) =>{
    const findbyIDandDelete = await DataBaseName.findByIdAndDelete({ _id : req.params.id})
    res.json(findbyIDandDelete)
})

//GET one data by ID
router.get('/:id', async (req, res) =>{
    const findbyID = await DataBaseName.findById({ _id : req.params.id})
    res.json(findbyID)
})



module.exports = router
