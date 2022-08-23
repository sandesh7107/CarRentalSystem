import React from 'react'
import './home.css'
import './bootstrap.min.css'
import './animate.css'
import './animate.min.css'
import {Link} from 'react-router-dom'
import {CgProfile} from 'react-icons/cg'

export default function Navbar() {

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
  console.log(userid)

    const logout=()=>{
        localStorage.clear();
        window.location.replace('/')
    }


    var log;

if (
    localStorage.getItem('t') || localStorage.getItem('googletoken')
)

log=(
<nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="index.html" class="navbar-brand p-0">
                    <h1  class="text-dark">Car Rental System</h1>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0">
                        <Link to='/' class="nav-item nav-link active">Home</Link>
                        <Link to='/about' class="nav-item nav-link active">About Us</Link>
                        <Link to='/servicepage' class="nav-item nav-link active">Services</Link>
                        
                        <Link to='/contact' class="nav-item nav-link active">Contact</Link>
                    </div>
                    <Link to='#' class="btn btn-danger rounded-pill text-light py-2 px-4 ms-lg-5 m-3" onClick={logout}>Logout</Link>
                    
                    <Link to='/viewprofile'><CgProfile size={40} ></CgProfile></Link>
                </div>
            </nav>



)

else{
    var log=(
<nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="index.html" class="navbar-brand p-0">
                    <h1  class="text-dark">Car Rental System</h1>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0">
                        <Link to='/' class="nav-item nav-link active">Home</Link>
                        <Link to='/about' class="nav-item nav-link active">About Us</Link>
                   
                        <Link to='/contact' class="nav-item nav-link active">Contact</Link>
                    </div>
                    <Link to='/login' class="btn btn-danger rounded-pill text-light py-2 px-4 ms-lg-5">Login</Link>
                    <Link to='/register' class="btn btn-danger rounded-pill text-light py-2 px-4 ms-lg-4">Signup</Link>
                </div>
            </nav>


    )
}
  return (
    <div>
        {log}
    </div>
  )
}
