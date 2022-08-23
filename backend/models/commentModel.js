// const { builtinModules } = require("module");
const mongoose = require("mongoose");
// const { required } = require("nodemon/lib/config");
//customer model
const Comment = mongoose.model('Comment',{
    
   text:{
       type:String
   },

   user:{
    type: mongoose.Schema.Types.ObjectId, ref: "User"
   },
   car:{
    type: mongoose.Schema.Types.ObjectId, ref: "Car"
   },
   
   rating:{
    type:Number,

   },

   like: [{

    type: mongoose.Schema.Types.ObjectId, ref: "User"

}],

flag: [{

    type: mongoose.Schema.Types.ObjectId, ref: "User"

}],

})

module.exports = Comment;