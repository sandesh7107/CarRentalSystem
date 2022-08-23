import React from 'react'
import './Register.css'
import Navbar from './navbar'
import car from '../images/car.jpg'
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom'
import emailjs from 'emailjs-com'
import { Toaster, toast } from 'react-hot-toast'
import { GoogleLogin } from 'react-google-login'
import { gapi } from 'gapi-script'


const clientId = "806401067505-oqa1qchkj98iuj9chd9ghb1tka6c9171.apps.googleusercontent.com"

export default function Register() {



  const responseSuccessGoogle = (response) => {
    console.log(response)
    localStorage.setItem('googletoken', response.tokenId);
    navigate('/')
    alert('Success')
  }

  const LoginFailure = (response) => {
    console.log(response)
    alert('Login fail')
  }



  const onSuccess = (res) => {
    console.log('LOGIN SUCCESS! Current user:', res.profileObj)



  }

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.client.init({
        // retrieve clientid from your .env file
        clientId:
          process.env.REACT_APP_GOOGLE_CLIENT_ID,
        plugin_name: "chat",
      });
    });
  }, []);

  const onFailure = (res) => {
    console.log('LOGIN FAILED!! res:', res)
  }


  let navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");




  const registerUser = (e) => {
    e.preventDefault();
    const userData = {
      firstname,
      lastname,
      password,
      username,
      email,
    };

    if (!firstname || !lastname || !password || !username || !email) {
      toast.error('Field Required');


    } else {
      axios.post("http://localhost:180/customer/register", userData)




        .then(result => {
          if (result.data) {
            toast.success('Registration Success');
            emailjs.sendForm('service_aicg1fz', 'template_150cxet', e.target, 'r3j4WyQW1cAwsZsBn')
              .then(res => {
                console.log(res)
                console.log('asdas')

              })



            navigate('/login')
          }
          else {
            //not registered

          }
        })
        .catch();
    }



  };




  return (
    <div>
      <Navbar></Navbar>
      <Toaster />
      <div class="wrapper " >
        <div class="inner">
          <div>
            <form action="" id="registerForm" onSubmit={registerUser}>
              <h3>Registration Form</h3>
              <div class="form-group">
                <div class="form-wrapper">
                  <label for="">First Name</label>

                  <input type="text" class="form-control"
                    name="fname"
                    id="fname"
                    placeholder="firstName"
                    value={firstname}
                    required
                    onChange={(e) => setFirstname(e.target.value)}

                  />
                </div>
                <div class="form-wrapper">
                  <label for="">Last Name</label>
                  <input type="text" class="form-control"
                    name="lname"
                    id="lname"
                    placeholder="lastName"
                    value={lastname}
                    required
                    onChange={(e) => setLastname(e.target.value)}

                  />
                </div>


              </div>

              <div class="form-wrapper">
                <label for="">Username</label>
                <input type="text" class="form-control"
                  name="username"
                  id="username"
                  placeholder="username"
                  value={username}
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div class="form-wrapper">
                <label for="">Email</label>
                <input type="text" class="form-control"
                  name="email"
                  id="email"
                  placeholder="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="form-wrapper">
                <label for="">Password</label>
                <input type="password" class="form-control"

                  name="password"
                  id="password"
                  placeholder="password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div class="checkbox">
                <label>
                  <input type="checkbox" /> I accept the Terms of Use & Privacy Policy.
                  <span class="checkmark"></span>
                </label>
              </div>

              <button

                type="submit"
                id="signup"
                onClick={registerUser}
              >Register Now</button>

            </form></div>

          <div class="classa">

            <img src={car} alt="#" height="300" />


            <div >

              <GoogleLogin
                clientId="806401067505-oqa1qchkj98iuj9chd9ghb1tka6c9171.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseSuccessGoogle}
                onFailure={LoginFailure}
                cookiePolicy={'single_host_origin'}
              />,
            </div>

          </div>
















        </div>

      </div>

    </div>
  )
}
