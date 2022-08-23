import React from 'react'
import axios from 'axios'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import contacts from '../images/undraw-contact.svg'
import {ImLocation} from 'react-icons/im'
import {BsFillTelephoneOutboundFill} from 'react-icons/bs'

import Navbar from './navbar'

export const Contact = () => {
    const logout=()=>{
        localStorage.clear();
        window.location.replace('/')
    }



  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");


  
  const contact = (e) => {
    e.preventDefault();

    const adata = {name:name,email:email,subject:subject,message:message}
    
console.log(adata);
    axios
      .post("http://localhost:180/contact/add", adata)
      .then((result12) => {
        console.log(result12.data.success);
        if (result12.data.success) {
        }
        alert("Contact Added succsessfullly!!");
      })
      .catch();
  };

    return (
        <div>
  <Navbar></Navbar>
            
  <div class="content">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">
          

          <div class="row justify-content-center">
            <div class="col-md-6">
              
              <h3 class="heading mb-4">Let's talk about everything!</h3>
              <p>Contact us with the queries you have!!</p>
             <div className='d-flex'><ImLocation size={30}></ImLocation> <h5 className='ml-2'>Dillibazar</h5></div> 
             <div className='d-flex mt-1 ml-1'><BsFillTelephoneOutboundFill size={20}></BsFillTelephoneOutboundFill> <h6 className='ml-3'>984035001</h6></div>
              <p><img src={contacts} alt="Image"/></p>


            </div>
            <div class="col-md-6">
              
              <form class="mb-5">
                <div class="row">
                  <div class="col-md-12 form-group">
                    <input type="text" class="form-control" name="name" id="name" placeholder="Your name"

                      value={name}
                      onChange={(e) => setName(e.target.value)}

                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 form-group">
                    <input type="text" class="form-control" name="email" id="email" placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 form-group">
                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject"

                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}

                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 form-group" >
                    <input type='textarea' className='py-5' style={{width:500}}   name="message" id="message" placeholder="Write your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                     ></input>
                  </div>
                </div>  
                <div class="row">
                  <div class="col-12">
                    <button type="submit" class="btn btn-primary rounded-0 py-2 px-4"
                     onClick={contact}
                    >Send Message</button>
                  <span class="submitting"></span>
                  </div>
                </div>
              </form>

              <div id="form-message-warning mt-4"></div> 
              <div id="form-message-success">
                Your message was sent, thank you!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      <h1 className='text-center heading pt-5'>Find us in Map</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3609921409193!2d85.32779051490137!3d27.706138382792354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190a74aa1f23%3A0x74ebef82ad0e5c15!2sSoftwarica%20College%20of%20IT%20%26%20E-Commerce!5e0!3m2!1sen!2snp!4v1655986875258!5m2!1sen!2snp" width="1300" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
    </div>

  </div>
    
</div>
    )
}
export default Contact;