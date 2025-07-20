const { Router } = require('express')
const db = require('../db')
const router = Router()
const {isStatusValid} = require('../consts/consts')

router.get('/', async (req, res) => {
    try {
        const {status} = req.query
        let query = db('todos')

        if(isStatusValid(status)) {
            query = query.where('status', status)
        }

        const todos = await query
        return res.status(200).json({todos})

    } catch (error) {
        console.log(error)
        return res.status(500).json({error: 'Query failed'})
    }
})

router.post('/', async (req, res) => {
    try {
        const {name, status} = req.body

        if(!name) {
            return res.status(400).json({error: 'name is not provided'})
        }
        if(!isStatusValid(status)) {
            return res.status(400).json({error: 'status is not provided'})
        }

        const [id] = await db('todos').insert({name, status})
        return res.status(201).json({id, name, status})

    } catch (error) {
        console.log(error)
        return res.status(500).json({error: 'Query failed'})
    }
})

router.put('/:id', async (req, res) => {
    
    try {
        const {id} = req.params
        const {status} = req.body
        
        if(!id) {
            return res.status(400).json({error: 'id is not provided'})
        }
        if(!isStatusValid(status)) {
            console.log('sdfsdfs')
            return res.status(400).json({error: 'status is not provided'})
        }

        const updated = await db('todos').where('id', id).update({status})
        if(updated) {
            return res.status(201).json({id, status})
        }
        else {
            return res.status(404).json({error: 'todo not found'})
        }
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: 'Query failed'})
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const deleted = await db('todos').where('id', id).del()
        
        if(deleted) {
            return res.json({message: 'delete successfull'})
        }
        else {
            return res.status(404).json({error: 'todo not found'})
        }

    } catch (error) {
        console.log(error)
        return res.status(500).json({error: 'Query failed'})
    }
})

module.exports = router