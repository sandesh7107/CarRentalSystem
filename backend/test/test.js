// use the path of your model
const User = require('../models/userModel');
const mongoose = require('mongoose');
// use the new name of the database
const url = 'mongodb://localhost:27017/Sahayogi_Haath';
beforeAll(async () => {
 await mongoose.connect(url, {
 useNewUrlParser: true,
 useUnifiedTopology : true
 });
});
afterAll(async () => {
 await mongoose.connection.close();
});

describe('Customer  Update test success', () => {
//the code below is for insert testing
//  it('Customer Logged in', () => {
//  const customer = {
//  'username': 'idkpro',
//  'password': '12345',
//  'firstname':"basanta",
//  'lastname':'banjara',
//  'email':'banjarabasanta123@gmail.com'
//  };
 
//  return Customer.create(customer)
//  .then((pro_ret) => {
//  expect(pro_ret.username).toEqual('idkpro');
//  });
//  });


//  it('Customer Logged in', () => {
//     const customer = {
//     'username': 'idkpro',
//     'password': '12345',
//     };
    
//     return Customer.findOne(customer)
//     .then((pro_ret) => {
//     expect(pro_ret.username).toEqual('idkpro');
//     });
//     });

//he code below is for delete testing
//  it('to test the delete product is working or not', async () => {
//  const status = await Customer.deleteOne();
 
// });


it('to test the update', async () => {
 return User.findOneAndUpdate({_id :Object('628906c269366e61764594a1')}, 
{$set : {fullname:'sandesh'}})
 .then((pp)=>{

 })
 
});



// it('Customer Profile in', () => {
//      const profile = {
//      'fullname': 'Ambika',
//      'address': 'dillibazar',
//      'dateofbirth':"2000/2/1",
//      'gender':'female',
//      'phone':'9823432432'
//      };
     
//      return User.create(profile)
//      .then((pro_ret) => {
//      expect(pro_ret.fullname).toEqual('Ambika');
//      });
//      });
 
})
