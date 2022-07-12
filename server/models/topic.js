const { mongoose } = require("mongoose");

const TopicSchema = new mongoose.Schema({
    title: {type: String, required: true},
    timeEstimate: {type: String, required: true},
    description: {type: String, required: true}
})

module.exports = new mongoose.model('Topic', TopicSchema)