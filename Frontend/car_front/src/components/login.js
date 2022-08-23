import React from 'react'
import './Register.css'
import Navbar from './navbar'
import car from '../images/car.jpg'
import { useState } from "react";
import axios from "axios";
import {Link,useNavigate} from 'react-router-dom'
import {Toaster, toast} from 'react-hot-toast'
import emailjs from 'emailjs-com'
export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [messages, setMessage] = useState("");
  
  let navigate = useNavigate();


  const loginUser = (e) => {
    e.preventDefault();
    const customerData={
      username,password
    }

  axios.post("http://localhost:180/customer/login", customerData)
            .then(result => {
                if (result.data.token) {   
                    localStorage.setItem('t', result.data.token);
                    
                    console.log(result.data)
                    if( customerData.username ==='admin'){
                      navigate('/admin')
                      toast.success('You are successfully logged in!!!');
                      
                    }
                    else{
                      toast.success('You are successfully logged in!!!');
                        navigate('/')
                    }
                                  
                }
                
                else {
                    //invalid
                   toast.error('Invalid username or password')
                }
            })
            .catch(e => {
                console.log(e)
            })
      

           }
       
  return (
    <div>
    
             <Navbar></Navbar>
             <Toaster/>
        <div class="wrapperlog " >
			<div class="inner">
				<div>
				<form action="" id='loginForm'>
					<h3>Login Form</h3>
					<div class="form-group">
						<div class="form-wrapper">
							<label for="">Username </label>

							<input type="text" class="form-control"
                               
                                     name="username"
                                    id="username"
                                    placeholder="username"
                                    value={username}
                                     onChange={(e) => setUsername(e.target.value)}
                                     required
                            />
						</div>
						<div class="form-wrapper">
							<label for="">Password</label>
							<input type="password" class="form-control"
                            name="password"
                                    id="password"
                                    placeholder="password"
                                    value={password}
                                     onChange={(e) => setPassword(e.target.value)}
                                     required

                            />

						</div>
  					
					</div>
				
					<button 
                    className='logbtn'
                     type="submit"
                     id="login"
                     onClick={(e) => {
                        loginUser(e);
                  }}
                  >Login
                  
                  </button>
                  <p className='text-right'><Link to='/forget'>Forget Password?</Link></p>

				</form></div>
       
				<div class="classa">

					<img src= {car} alt="#" height="300"/>
				
				</div>
				
			</div>
			
		</div>
    </div>
  )
}
