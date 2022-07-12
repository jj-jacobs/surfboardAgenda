const Topic = require('../models/topic')

module.exports = {
    createTopic: async (req, res) => {
        try{
            console.log('creating')
            const topic = await Topic.create(req.body)
            res.json(topic)
        }
        catch (err) {
            res.json(err)
        }
    },

    editTopic: async (req, res) => {
        try{
            console.log('creating')
            const topic = await Topic.create(req.body)
            res.json(topic)
        }
        catch (err) {
            res.json(err)
        }
    },

    getOneTopic: async (req, res) => {
        try{
            console.log('creating')
            const topic = await Topic.create(req.body)
            res.json(topic)
        }
        catch (err) {
            res.json(err)
        }
    },

    getAllTopics: async (req, res) => {
        try {
            const topics = await Topic.find()
            res.status(200).json(topics)
        }
        catch (err) {
            res.json(err)
        }
    },

    deleteOneTopic: async (req, res) => {
        try {
            const topics = await Topic.findByIdAndDelete(req.params.id)
            res.status(200).json(topics)
        }
        catch (err) {
            res.json(err)
        }
    }
}