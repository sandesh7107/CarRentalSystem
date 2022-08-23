const express = require("express");

const Comment = require("../models/commentModel");
const router = new express.Router();

router.post("/comment/add", function (req, res) {
  const text = req.body.text;
  const car = req.body.car;
  const user = req.body.user;
  const rating = req.body.rating;

  const pdt = new Comment({
    text: text,
    car: car,
    user: user,
    rating: rating,
  });

  pdt
    .save()
    .then(function () {
      res.json({ msg: "Comment added!!" });
    })

    .catch(function () {
      res.json({ msg: "Something went wrong!" });
    });
});

router.get("/comment/details/:id", function (req, res) {
  const text = req.body.text;

  //make userid in product model

  Comment.find({ car: req.params.id })
    .populate("user")
    .then(function (result) {
      res.json(result);
      console.log(result);
    })

    .catch(function () {
      res.json({ msg: "something went wrong" });
    });
});

// router.put("/like/:id"), function(req,res){

//   const id = req.params.id;
//   const like=req.body;
//   console.log(id)

//   Comment.findByIdAndUpdate( {_id:id} ,{like:like},function(err,docs){
//     if (!err){

//         res.json({msg: "update successfully!" , success: true })
//     }
//     else{
//         res.json({msg: err , success: true })
//     }

// })

// }

router.put("/comment/like", function (req, res) {
  const id = req.body.cid;

  Comment.findByIdAndUpdate(
    id ,{

      $push: { like: req.body.userid },

  },

  { new: true },(err,doc)=>{
      console.log(req.body.userid)
      res.json({success:true})

    
    })
  })

  router.put("/comment/unlike/", function (req, res) {
    const id = req.body.cid;
  
    Comment.findByIdAndUpdate(
      id ,{
  
        $pull: { like: req.body.userid },
  
    },
  
    { new: true },(err,doc)=>{
        console.log(req.body.userid)
        res.json({success:true})
      
      })
    })

    router.put("/comment/flag", function (req, res) {
      const id = req.body.cid;
    
      Comment.findByIdAndUpdate(
        id ,{
    
          $push: { flag: req.body.userid },
    
      },
    
      { new: true },(err,doc)=>{
          console.log(req.body.userid)
          res.json({success:true})
    
        
        })
      })


      router.put("/comment/unflag", function (req, res) {
        const id = req.body.cid;
      
        Comment.findByIdAndUpdate(
          id ,{
      
            $pull: { flag: req.body.userid },
      
        },
      
        { new: true },(err,doc)=>{
            console.log(req.body.userid)
            res.json({success:true})
      
          
          })
        })

module.exports = router;
