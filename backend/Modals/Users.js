
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const  userschema = new schema(
    {

        name : {
            type : String,
            required : true 

        },
        email : {
            type : String,
            required : true,
            unique : true

        },
        password  : {
            type : String,
            required : true
        }


    }

)
const UserModel= mongoose.model('users',userschema)
module.exports = UserModel ;