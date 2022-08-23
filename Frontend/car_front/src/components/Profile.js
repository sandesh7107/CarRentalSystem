import Navbar from './navbar'
import { React, useState, useEffect } from 'react'
import axios from 'axios';
import './home.css'
import { useParams,useNavigate } from 'react-router-dom';
import {Toaster, toast} from 'react-hot-toast'
//import './profile.css'
export default function Profile() {
    let navigate = useNavigate();
    const uid = localStorage.getItem('pid')

    const {pid} = useParams();
        const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('t')
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
          console.log(result.data)
          setFullname(result.data.data.fullname)
          setAddress(result.data.data.address)
          setPhone(result.data.data.phone)
          setdateofbirth(result.data.data.dateofbirth)
          setgender(result.data.data.gender)
          setgender(result.data.data.photo)
          
        })
      },[])


    const [fullname, setFullname] = useState("");

    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [dateofbirth, setdateofbirth] = useState("");
    const [gender, setgender] = useState('');
    const [photo, setphoto] = useState('');
    const [messages, setMessage] = useState('');
    //const [profilephoto, setProfilephoto]=useState('');

    const addProfile = (e) => {
        e.preventDefault();

        // const adata = {
        //     fullname, email, address, phone, gender, date, problem
        // }
        const adata = new FormData();
        adata.append('fullname', fullname);
        adata.append('address', address);
        adata.append('phone', phone);
        adata.append('gender', gender);
        adata.append('dateofbirth', dateofbirth);
        adata.append('profile_image', photo);

        

        axios.put("http://localhost:180/profile/insert/"+ userid, adata,config)
            .then(result12 => {
                console.log(result12.data.success)
                if (result12.data.success) {
                    // registered success
                    alert("Profile Updated Succesfully");
                    navigate('/viewprofile')
                }

            })
            .catch(e => {
                setMessage('something went wrong! Please try again!');
            });
    }




    return (
        <div>

            <div className="container-xxl bg-white p-0">

            
                {/* Navbar & Hero Start */}
                <div className="container-xxl position-relative p-0">
                    <Navbar></Navbar>
                    <Toaster/>
                    
                    <div className="container rounded bg-white mt-5 mb-5">
                        <div className="row">
                            <div className="col-md-3 border-right">
                                <div className="d-flex flex-column align-items-center text-center p-3 py-5 imagess"><img className="rounded-circle pl-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
                              
                               <div>{fullname}</div>
                               
                               </div>
                               
                            </div>
                            
                           
                            <div className="col-md-5 border-right">
                                <div className="inputsec">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4 className="text-right">User Profile</h4>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-12"><label className="labels">Name</label><input type="text" className="form-control" placeholder="Full Name" 
                                        id='name'
                                            value={fullname}
                                            onChange={(e) => setFullname(e.target.value)} /></div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="Enter phone number" id='phone'
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)} /></div><br></br><br></br><br></br>
                                        <div className="col-md-12"><label className="labels">Address</label><input type="text" className="form-control" placeholder="Address"
                                            id='address'
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)} /></div><br></br><br></br><br></br>

                                        <div className="col-md-12"><label className="labels">Gender</label></div><br></br>

                                        <div className='d-flex'>

                                            

                                            <div >
                                                <input type="radio"  name="gender" value="male"
                                                onChange={(e)=>setgender(e.target.value)}
                                                id='male'
                                                />
                                                <label for="huey">Male</label>
                                            </div>

                                            <div className='px-3'>
                                                <input type="radio"  name="gender" value="female" 
                                                onChange={(e)=>setgender(e.target.value)}/>
                                                <label for="dewey">Female</label>
                                            </div><br></br>

                                            <div>
                                                <input type="radio"  name="gender" value="other" 
                                                onChange={(e)=>setgender(e.target.value)}/>
                                                <label for="louie">Other</label>
                                            </div>






                                        </div><br></br><br></br>

                                        <div className="col-md-6"><label className="labels">Date Of Birth</label><input type="date" className="form-control" placeholder="Day/Month/Year"
                                           id='dob'
                                            value={dateofbirth}
                                            onChange={(e) => setdateofbirth(e.target.value)} /></div>
                                    </div>


                                    <div className="col-md-6"><label className="labels">Profile Image</label><input type="file"
                                  
                                        onChange={(e) => setphoto(e.target.files[0])} /></div>

                                    <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="submit" id='profile'
                                        onClick={addProfile}

                                    >Save Profile</button></div>
                                </div>
                            </div>
                        
                        </div>
                        
                    </div>
                   
                </div>
                
            </div>
            {/* <!-- Footer Start --> */}
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
                                <input class="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Your Email" />
                                <button type="button" class="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i class="fa fa-paper-plane text-primary fs-4"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="copyright">
                        <div class="row">
                            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a class="border-bottom" href="#">Car rental</a>, All Right Reserved.


                                Designed By <a class="border-bottom" href="https://htmlcodex.com">Car rental Team</a>

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
            {/* <!-- Footer End --> */}


        </div>


    )
}
