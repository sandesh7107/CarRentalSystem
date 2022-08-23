import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import './Register.css';
import Navbar from './navbar'
import {FcApproval} from 'react-icons/fc'

export default function Single() {
  const [singledata, setSingledata] = useState([]);
  const uid = localStorage.getItem('pid');
  const [prodata, setProdata] = useState([]);
  
  const config= {
    headers :{
        Authorization : 'Bearer '+localStorage.getItem('t')
    }
}
function parseJwt(token) {
    if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }
  // get user form the token
  const token_data = localStorage.getItem("t")
  const token = parseJwt(token_data)
  const userid = token?.cusId

  useEffect (()=>{
    axios.get("http://localhost:180/profile/single/"+ userid)
    .then(result=>{
      console.log(result.data.data)
      setSingledata(result.data.data)
      
    })
  },[])
  return (
    <div>
      <Navbar/>

          
          
        <div className='container '>
     
        <div className='row p-5 '>
          <div className='design text-center'>
        <Link to={'/changepsw/'+userid} class="nav-item nav-link active float-right">Change Password?</Link>
          <h1 className='pfd'> Profile Details</h1>
          <p><img src={'http://localhost:180/'+singledata?.photo} className="myimg"/></p>
          <p>FullName: {singledata?.fullname}  {singledata.isApproved? <FcApproval size={25}></FcApproval>:''}
           </p>
          <p>Email: {singledata?.email}</p>
          <p>Address: {singledata?.address}</p>
          <p>Phone : {singledata?.phone}</p>
          <p>Gender : {singledata?.gender}</p>
          <Link to='/profile' class="btn btn-success rounded-pill text-light py-2 px-5 ms-lg-5 mb-3">Edit</Link>
          </div>
         
        </div>
        
      </div>
                    
                   



















         













      <div class="container-fluid bg-dark text-light footer pt-5 wow fadeIn" data-wow-delay="0.1s" >
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-md-6 col-lg-3">
                        <h5 class="text-white mb-4">Get In Touch</h5>
                        <p><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                        <p><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                        <p><i class="fa fa-envelope me-3"></i>info@example.com</p>
                        <div class="d-flex pt-2">
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-instagram"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <h5 class="text-white mb-4">Quick Link</h5>
                        <a class="btn btn-link" href="">About Us</a>
                        <a class="btn btn-link" href="">Contact Us</a>
                        <a class="btn btn-link" href="">Privacy Policy</a>
                        <a class="btn btn-link" href="">Terms & Condition</a>
                        <a class="btn btn-link" href="">Career</a>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <h5 class="text-white mb-4">Popular Link</h5>
                        <a class="btn btn-link" href="">About Us</a>
                        <a class="btn btn-link" href="">Contact Us</a>
                        <a class="btn btn-link" href="">Privacy Policy</a>
                        <a class="btn btn-link" href="">Terms & Condition</a>
                        <a class="btn btn-link" href="">Career</a>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <h5 class="text-white mb-4">Newsletter</h5>
                        <p>Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu</p>
                        <div class="position-relative w-100 mt-3">
                            <input class="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Your Email"/>
                            <button type="button" class="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i class="fa fa-paper-plane text-primary fs-4"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a class="border-bottom" href="#">Car Rental </a>, All Right Reserved. 
							
							
							Designed By <a class="border-bottom" href="https://htmlcodex.com">Car Rental Team</a>
                           
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            <div class="footer-menu">
                                <a href="">Home</a>
                                <a href="">Cookies</a>
                                <a href="">Help</a>
                                <a href="">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}