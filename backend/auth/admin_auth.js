const jsonwebtoken = require('jsonwebtoken');
const Admin = require('../models/adminModel');




module.exports.verifyAdmin = function (req, res, next) {
    
    try{
    const token = req.headers.authorization.split(" ")[1];
    const data = jsonwebtoken.verify(token, "anysecretkey");


    console.log(data);
    Admin.findOne({ _id: data.aId }).then(function (result) {
        // console.log(result)gg;
        req.adminInfo= result;
        next();
    })
    .catch(function(e){
        res.json({error:e})
    })
}
    catch(e){
        res.json({error:'Invalid Access'})
    }




}
