var mongoose=require('mongoose');
// mongoose.connect('mongodb://localhost:27017/backend');
mongoose.connect(process.env.mongo.MONGO_CONNECTION);

var userSchema =new mongoose.Schema({
    user:String,
    artista_fav:Array,
    genero_fav:Array
},{collection:'usercollection'}
);

module.exports={Mongoose:mongoose,UserSchema:userSchema}