import React from 'react'
import './Register.css'
import Navbar from './navbar'
import sahayogi from '../images/logo.jpg'
import googles from '../images/google.jpg'
import { useState } from "react";
import axios from "axios";
import {Link,useNavigate} from 'react-router-dom'
import {Toaster, toast} from 'react-hot-toast'
import emailjs from 'emailjs-com'

export default function Forgetpassword() {


 

  const [email, setEmail] = useState("");

  const CheckEmail = (e) => {
    e.persist();
    e.preventDefault();
    axios
      .post("http://localhost:180/emailcheck",{email:email})
      .then((result) => {
       
        if (result.data) {
        console.log(result.data)
        console.log(e.target)
        emailjs.sendForm('service_aicg1fz', 'template_j9vziur', e.target, 'r3j4WyQW1cAwsZsBn')

        .then((result) => {
          console.log('2')
            console.log(result.text);
            alert('Please Check your Email')
  
        });
       
            
        } else {
          alert("Email doesnot exist");
        }
      })
     
      
  };

  
  
  
  let navigate = useNavigate();
  
 

  return (
    <div>
        <Navbar></Navbar>
        <Toaster/>
        <div class="wrapper " >
			<div class="inner">
				<div>
				<form action="" id="registerForm" onSubmit={CheckEmail}>
					<h3>Forget Password</h3>
					

                    <div class="form-wrapper">
						
						<input type="text" class="form-control"
                                     name="email"
                                    id="email"
                                    placeholder="Email"
                                    value={email}
                                    required
                                     onChange={(e) => setEmail(e.target.value)}
                        />
                        <input 
                                    name="id"
                                   hidden= {true}
                                   
                                   
                                 
                                    
                        />

					</div>

				
					
					
					
					<button 
                    className='fogotpsw'
                     type="submit"
                     id="signup"
                     
                  >Submit</button>
                 
				</form></div>
     
				<div class="classa">

					<img src= {sahayogi} alt="#" height="300"/>
					
      
					<div >

          
					</div>
					
				</div>

				

			



				



				

				

				
			</div>
			
		</div>

    </div>
  )
}
