const express = require("express");
const bcryptjs = require("bcryptjs");
const User = require("../models/userModel");
const router = new express.Router();

const Car = require("../models/carModel");

const auth= require("../auth/authentication");
const upload= require('../uploads/uploads');
const jwt =  require("jsonwebtoken");
//route for customer registration 
router.post("/customer/register", async function (req, res) {
    const username = req.body.username;
    
    const customerData = await User.findOne({ username: username })
    //if the username is in the database
    if (customerData !== null) {
        res.json({ message: "Username already exits!" })
        return;
    
        
    }
    //now it means we are ready for registration

    const password = req.body.password;
    bcryptjs.hash(password, 10, function (e, hashed_pw) {
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        const phone=req.body.phone;
      
        
        
      
        const cdata = new User({
            username: username,
            password: hashed_pw,
            firstname: firstname,
            lastname: lastname,
           phone:phone,
            email: email,
           
            isAdmin:false,
            // product_image: req.file.filename
        })
        cdata.save()
            .then(function () { res.json({ message: "Registered Success!" }) })
            .catch(function (e) { res.json(e) })
    })
})





//login route = for patient

router.post("/customer/login",function(req,res){
    const username = req.body.username;

    
    User.findOne({username : username})
    .then(function(customerData){

        // console.log(patientData);
        if (customerData === null){
            return res.json({message : "invalid"})

        }

        //need to check password

        const password = req.body.password;
        bcryptjs.compare(password,customerData.password, function(e, result){
            //true - correct pw, false = incorrect pw
            if (result===false){
                return res.json({message: "inavalid"});
            }

            //ticket generate - jsonwebtoken
            console.log("login success-->",result)
            const token = jwt.sign({cusId : customerData._id}, "anysecretkey");
            res.json({token: token, message: "success", 'username': req.body.username});

        })


        

    })
})






//customer profile update by customer

router.put("/customer/profile/update",auth.verifyCustomer, function(req,res){
    // console.log(req.customerInfo._id);
    const id=req.customerInfo._id;
    const phone=req.body.phone;
    const address= req.body.address;
    Customer.updateOne({_id:id},{phone:phone, address:address})
    .then(function(){
        res.json({msg:"updated"})
    })
    .catch(function(){
        res.json({msg:"Try Again"})
    })
})


//to upload the single image
router.post("/product/upload", upload.single('liquor'), function(req, res){
        if(req.file==undefined){
            return res.json({
                message:"invalid file type"
            })
        }
})

//details
router.get("/customer/details", function (req, res) {
    const username= req.body.username
    const address= req.body.address
    const phone= req.body.phone
    const email= req.body.email
    //make userid in product model 

    User.find(username,address,phone,email)
      .then(function (result) {
        res.json(result);
        console.log(result);
      })
  
      .catch(function () {
        res.json({ msg: "something went wrong" });
      });
  });


  router.post("/emailcheck",function(req, res){
    if(!req.body.email){
        res.json({ msg: "Email doestnot wrong" });
    }
    else{
        
        const email=req.body.email
        User.findOne({email:email})
            .then(function (result) {
                res.json(result);
                console.log(result);
              }
        )
        .catch(
            console.log('email not exist')
        )
    }
})


router.put("/updatepassword",function(req, res){
    
    if(!req.body.email){
        res.json({ msg: "Email wrong" });
    }
    else{
       
        const email=req.body.email
        bcryptjs.hash(req.body.password, 10, function (e, hashed_pw){
            User.findOneAndUpdate({email:email},{password:hashed_pw})
            .then(function (result) {
                res.json(result);
                console.log(result);
              }
        )
        .catch(
            console.log('email not exist')
        )

        })
        
    }
})




router.put('/changepassword/:id',async(req,res)=>{
    const userData = await User.findOne({_id:req.params.id})
    const comparPass = await bcryptjs.compare(req.body.currentpassword,userData.password);
    if(!comparPass){
      res.json("curent password not match")
    }else{
        if(req.body.newpassword === req.body.password){
            bcryptjs.hash(req.body.password,10, function(e,hasPass){
                 User.findOneAndUpdate({_id:req.params.id},{
                    password:hasPass
                },{new:true}).then(data=>{

                    res.json('passwod chnged sucessfully')
                }).catch(e=>{
                    res.json(e)
                })
            })
        }else{
            res.json("new password and password not match")
        }
    }
})




router.post("/car/add",upload.single("image"),function (req, res) {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const phone = req.body.phone;
    const gender = req.body.gender;
    const address = req.body.address;
    const age = req.body.age;
   
    const photo =req.file.filename;
    const experience = req.body.experience;
    const workinglocation = req.body.workinglocation;

    const pdt = new Car({
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      gender: gender,
      address: address,
      age: age,
      photo: photo,
      experience:experience,
      workinglocation:workinglocation
    });

    pdt
      .save()
      .then(function () {
        res.json({ msg: "Car added!!" });
      })

      .catch(function () {
        res.json({ msg: "Something went wrong!" });
      });
  }
);


router.delete("/customer/delete/:id", function (req, res) {
    User.findByIdAndRemove(req.params.id)
    .then(function () {
      res.json({ msg: "deleted succesfully" });
    })
    .catch(function () {
      res.json({ msg: "Try Again" });
    })
  
    .catch();
  });



module.exports = router;