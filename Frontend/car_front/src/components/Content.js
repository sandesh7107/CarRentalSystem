import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Profile from './Profile'
import Home from './home'
import Login from './login'
import Register from './Register'
import Single from './Viewprofile'
import Dashboard from './Dashboard'
import Adminprofile from './Adminprofview'
import Workers from './workers'
import BookingHistory from './booking'
import Servicepage from './services'
import Addcar from './Addcar/Addcar'
import ViewCar from './Viewcar'
import SingleCar from './Singlecar'
import ViewUser from './viewUser'
import Updatecar from './Addcar/Updatecar'
import Forgetpassword from './forgetpassword'
import Newpassword from './Newpassword'
import BookCar from './Addcar/bookCar'
import ViewBooking from './viewBooking'
import Changepsw from './changepsw'
import Rate from './Rating'
import Contact from './contact'
import AboutUs from './Aboutus'
import ViewContact from './viewcontact'

export default function Content() {
    return (
       <Routes>
       
           <Route path='/' element={<Home/>}></Route>
           <Route path='/register' element={<Register/>}></Route>
           <Route path='/login' element={<Login/>}></Route>
           <Route path='/profile' element={<Profile/>}></Route>
           <Route path='/viewprofile' element={<Single/>}></Route>
           <Route path='/admin' element={<Dashboard/>}></Route>
           <Route path='/profileadmin' element={<Adminprofile/>}></Route>
           <Route path='/addworker' element={<Workers/>}></Route>
           <Route path='/addcar' element={<Addcar/>}></Route>
           <Route path='/tick' element={<BookingHistory/>}></Route>
           <Route path='/servicepage' element={<Servicepage/>}></Route>
           <Route path='/viewcar' element={<ViewCar/>}></Route>
           <Route path='/viewuser' element={<ViewUser/>}></Route>
           <Route path='/singlecar/:id' element={<SingleCar/>}></Route>
           <Route path='/updatecar/:id' element={<Updatecar/>}></Route>
           <Route path='/forget' element={<Forgetpassword/>}></Route>
           <Route path='/newpsw' element={<Newpassword/>}></Route>
           <Route path='/bookcar/:id' element={<BookCar/>}></Route>
           <Route path='/viewbooking' element={<ViewBooking/>}></Route>
           <Route path='/changepsw/:id' element={<Changepsw/>}></Route>         
           <Route path='/rate' element={<Rate/>}></Route>
           <Route path='/contact' element={<Contact/>}></Route>
           <Route path='/about' element={<AboutUs/>}></Route>
           <Route path='/viewcontact' element={<ViewContact/>}></Route>

         
           
       </Routes>
    )
}
