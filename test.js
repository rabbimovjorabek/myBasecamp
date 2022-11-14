const mongoose = require('mongoose')
const Post = require('./models/post')

mongoose.connect("mongodb+srv://rabbimovjorabek:20020107@testcluster.qjtwqwb.mongodb.net/?retryWrites=true&w=majority")

Post.create({
    title: 'my first',
    description: "first description"
}, (err, post) => {console.log(err,post)})