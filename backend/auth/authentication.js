const jsonwebtoken = require('jsonwebtoken');
const Customer = require('../models/userModel')
const {OAuth2Client}= require('google-auth-library');
const { response } = require('express');



const client= new OAuth2Client('806401067505-oqa1qchkj98iuj9chd9ghb1tka6c9171.apps.googleusercontent.com')
module.exports.verifyCustomer = function (req, res, next) {
    
    try{
    const token = req.headers.authorization.split(" ")[1];
    console.log("token", token)
    const data = jsonwebtoken.verify(token, "anysecretkey");


    console.log(data);
    Customer.findOne({ _id: data.cusId }).then(function (result) {
        // console.log(result);
        req.customerInfo= result;
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

exports.googlelogin=(req, res)=>{
    const {tokenId}=req.body;
    client.verifyIdToken({tokenId, audience:"806401067505-oqa1qchkj98iuj9chd9ghb1tka6c9171.apps.googleusercontent.com"}).then(response =>{
        const {email_verified, name, email}= response.getPayload;
    } )
    
    console.log(response.payload);
}