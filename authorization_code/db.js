var mongoose=require('mongoose');
require("dotenv").config();
const aws = require('aws-sdk');
// mongoose.connect('mongodb://localhost:27017/backend');

let s3 = new aws.S3({
	mongoose_connection: process.env.MONGO_CONNECTION,
});

mongoose.connect(s3.config.mongo_connection);

var userSchema =new mongoose.Schema({
    user:String,
    artista_fav:Array,
    genero_fav:Array
},{collection:'usercollection'}
);

module.exports={Mongoose:mongoose,UserSchema:userSchema}