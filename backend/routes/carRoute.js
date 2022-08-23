const express = require("express");

const Car = require("../models/carModel");
const upload = require("../uploads/uploads");
const router = new express.Router();

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



router.get("/car/details", function (req, res) {
  const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const phone = req.body.phone;
    const gender = req.body.gender;
    const address = req.body.address;
    const age = req.body.age;
    const experience = req.body.experience;
    const workinglocation = req.body.workinglocation;
    
  //make userid in product model

  Car.find(firstname, lastname, phone, gender,address,age,experience,workinglocation)
    .then(function (result) {
      res.json(result);
      console.log(result);
    })

    .catch(function () {
      res.json({ msg: "something went wrong" });
    });
});



router.get("/car/single/:id", function(req,res){
  const id = req.params.id;
  Car.findOne({_id:id})
  .then(function(result){
    res.json(result)
    
  })
  .catch(function(){
     res.json({msg : "something went wrong"})
  })
})






router.put("/car/approve",  function (req, res) {
  const id = req.body.id
  Car.findOne({ _id: id })
      .then(function (result) {
                  if(result.isApproved){
                    Car.updateOne({ _id: id }, { isApproved: false })
                  .then(function () {
                      res.json({ msg: "Visitor Details Approved Successfully", success: true })
                  })
                  }
                  else{
                    Car.updateOne({ _id: id }, { isApproved: true })
                  .then(function () {
                      res.json({ msg: "Visitor Details Approved Successfully", success: true })
                  })
                  }
  })
})



router.put("/car/update/:id",function(req,res){
  
  const id = req.params.id;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const phone = req.body.phone;
  const gender = req.body.gender;
  const address = req.body.address;
  const age = req.body.age;
  const experience = req.body.experience;
  const workinglocation = req.body.workinglocation;
  const photo = req.body.photo;
 
 
  Car.findByIdAndUpdate( {_id:id} ,{firstname:firstname, lastname:lastname, phone:phone, gender:gender, address:address,age:age, experience:experience, workinglocation:workinglocation,photo:photo},function(err,docs){
      if (!err){
        
          res.json({msg: "update successfully!" , success: true })
      }
      else{
          res.json({msg: err , success: true })
      }
      
  })
})

router.delete("/car/delete/:id", function (req, res) {
  Car.findByIdAndRemove(req.params.id)
  .then(function () {
    res.json({ msg: "deleted succesfully" });
  })
  .catch(function () {
    res.json({ msg: "Try Again" });
  })

  .catch();
});

module.exports = router;
