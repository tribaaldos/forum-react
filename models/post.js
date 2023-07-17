const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    
    likes: [{type: Schema.Types.ObjectId, ref: 'User'}],

})
const postSchema = new Schema({

    likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
    
    title: {type: String, required: true},
    text: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    comments: [commentSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Post', postSchema)