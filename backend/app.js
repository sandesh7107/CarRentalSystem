const exp = require("constants");
const express = require("express");
const app = express();



const cors= require('cors');
app.use(cors());


//to use the  the image 
app.use(express.static(__dirname + '/user_images'));

app.use(express.json());
app.use(express.urlencoded({extended : true}));

require("./database/db");
const customerRoute = require("./routes/customerRoute");
const profileroute = require("./routes/profileRoute");
const carRoute = require("./routes/carRoute");
const commentRoute = require("./routes/commentRoute");
const bookRoute = require("./routes/bookRoute");
const contactRoutes = require("./routes/contactRoutes");


app.use(customerRoute);
app.use(profileroute);
app.use(carRoute);
app.use(commentRoute);
app.use(bookRoute);
app.use(contactRoutes);


app.listen("180");