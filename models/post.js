const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema (
    {
        user_id: {type: Schema.Types.ObjectId , required: true},
        content: {type: String , required: true},
    },
    {timestamps:true},
)

module.exports = mongoose.model('user', User), mongoose.model('post', Post)