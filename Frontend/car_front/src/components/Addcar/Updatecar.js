import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../dashboard.css";
import { Link, useNavigate } from "react-router-dom";
import log from "../../images/log.png";
import { TiTickOutline } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { useParams } from "react-router-dom";

export const Updatecar = () => {
    let navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    window.location.replace("/");
  };

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("t"),
    },
  };

  const {id}= useParams();

  const [prodata, setProdata] = useState([]);
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [phone, setphone] = useState("");
  const [gender, setgender] = useState("");
  const [address, setaddress] = useState("");
  const [age, setage] = useState("");
  const [photo, setimage] = useState("");
  const [experience, setexperience] = useState("");
  const [workinglocation, setworkinglocation] = useState("");

  
  const updateInfo =(e)=>{
    e.preventDefault();

    const pdata ={
      id, firstname, lastname, phone, gender, address, age, experience, workinglocation,photo
    }
    axios.put("http://localhost:180/car/update/"+id, pdata)
   .then(result=>{
   if(result.data.success){
       navigate('/addcar')
    alert('updated Successfully')
    
      }
      
      
      else{
        alert('Something went wrong')
      }
     
     
    })
    .catch()
  }
  

  useEffect(()=>{
    axios.get('http://localhost:180/car/single/'+ id, config)
    .then(result=>{

      
        setfirstname(result.data.firstname)
        // setlastname(result.data.lastname)
        setphone(result.data.phone)
        setgender(result.data.gender)
        setaddress(result.data.address)
        setage(result.data.age)
        setimage(result.data.photo)
        setexperience(result.data.experience)
        setworkinglocation(result.data.workinglocation)
      

    })
      .catch()
   
  },[])

  return (
    <>
      <div className="d-flex" id="wrapper">
        {/* Sidebar */}
        <div className="bg-white" id="sidebar-wrapper">
          <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
            {" "}
            <img src={log} alt="#" height={200} />
            Car Rental System
          </div>
          <div className="list-group list-group-flush my-3">
            <Link
              to="/dashboard"
              className="list-group-item list-group-item-action bg-transparent second-text active"
            >
              <i className="fas fa-tachometer-alt me-2" />
              Dashboard
            </Link>
          </div>
          <div className="list-group-item list-group-item-action bg-transparent second-text fw-bold  ">
            <p> Interface</p>
                        <Link to="/profileadmin" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i className="fas fa-gift me-2" />View Profile</Link>
                        <Link to='/viewuser' className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i className="fas fa-comment-dots me-2" /> View Registered User</Link>
                        <Link to="/addworker" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i className="fas fa-map-marker-alt me-2" />Add Cars</Link>
                        <Link to="/viewbooking" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i className="fas fa-map-marker-alt me-2" />View Booking</Link>
                        <Link to="/viewcontact" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i className="fas fa-map-marker-alt me-2" />View Conatact</Link>
          </div>
        </div>
        {/* /#sidebar-wrapper */}
        {/* Page Content */}
        <div id="page-content-wrapper">
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
            <div className="d-flex align-items-center">
              <i
                className="fas fa-align-left primary-text fs-4 me-3"
                id="menu-toggle"
              />
              <h2 className="fs-2 m-0">Update Cars</h2>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle second-text fw-bold"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fas fa-user me-2" />
                    Admin
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link to="/userprofile" className="dropdown-item">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item" onClick={logout}>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container mt-3">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <form action="" id="addworkerform">
                  <h1 className="custom-heading-h2 p-3 ml-5">Update Cars</h1>

                  <div className="form-group">
                    <input
                      type="text"
                      id="firstname"
                      className="form-control"
                      placeholder="Car Name"
                      value={firstname}
                      onChange={(e) => setfirstname(e.target.value)}
                    />
                  </div>

                  {/* <div className="form-group">
                    <input
                      type="text"
                      id="lastname"
                      className="form-control"
                      placeholder="lastname"
                      value={lastname}
                      onChange={(e) => setlastname(e.target.value)}
                    />
                  </div> */}

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Number Plate"
                      id="phone"
                      value={phone}
                      onChange={(e) => setphone(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="gender"
                      id="Car Brand"
                      value={gender}
                      onChange={(e) => setgender(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="Office Address"
                      value={address}
                      onChange={(e) => setaddress(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      id="age"
                      className="form-control"
                      placeholder="In use for"
                      value={age}
                      onChange={(e) => setage(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="experience"
                      placeholder="Used by"
                      value={experience}
                      onChange={(e) => setexperience(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      id="age"
                      className="form-control"
                      placeholder="Location"
                      value={workinglocation}
                      onChange={(e) => setworkinglocation(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="file"
                      className="form-control"
                      onChange={(e) => setimage(e.target.files[0])}
                    />
                  </div>
                  <button
                    type="submit"
                    id="worker"
                    className="btn btn-dark ml-5"
                    onClick={updateInfo}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
         
        </div>
      </div>
      {/* /#page-content-wrapper */}
    </>
  );
};
export default Updatecar;
