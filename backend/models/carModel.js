// const { builtinModules } = require("module");
const mongoose = require("mongoose");
// const { required } = require("nodemon/lib/config");
//customer model
const Car = mongoose.model('Car',{
    
    firstname : {
        type : String
    },
    lastname : {
        type : String
    },   

    phone : {
        type : String
    },
    gender : {
        type : String
    },
    address : {
        type : String
    },
   
    age: {
        type : String
    },

    photo:{
        type:String
    },

    alternativephone:{
        type:String
    },
    
    isApproved:{

        type:Boolean,

        default:true

    },
    experience:{
        type:String
    },

    workinglocation:{
        type:String
    }


})

module.exports = Car;