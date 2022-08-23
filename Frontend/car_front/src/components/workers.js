import React from 'react'
import axios from 'axios'
import { useEffect, useState } from "react";
import './dashboard.css'
import { Link } from 'react-router-dom'
import log from '../images/log.png'
import { BsPencilSquare } from 'react-icons/bs';
import { FaCar } from 'react-icons/fa';
import {ImProfile} from 'react-icons/im';
import {GiWaveCrest} from 'react-icons/gi';
import {MdLocalLaundryService} from 'react-icons/md';
import {GiToolbox} from 'react-icons/gi';
import {GiVacuumCleaner} from 'react-icons/gi';
export const Workers = () => {
    const logout=()=>{
        localStorage.clear();
        window.location.replace('/')
    }
    const [viewdata, setViewdata] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:180/profile/details")
        .then(result=>{
            console.log(result.data)
            setViewdata(result.data);
        })
        .catch(e=>{
            console.log("something went wrong")
        })
     }, [viewdata])
    return (
        <>
            <div className="d-flex" id="wrapper">
                {/* Sidebar */}
                <div className="bg-white" id="sidebar-wrapper">
                    <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">   <img src= {log} alt="#" height={200}/>Car Rental System</div>
                    <div className="list-group list-group-flush my-3">
                        <Link to="/dashboard" className="list-group-item list-group-item-action bg-transparent second-text active"><i className="fas fa-tachometer-alt me-2" />Dashboard</Link>
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
                            <i className="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle" />
                            <h2 className="fs-2 m-0">Dashboard</h2>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle second-text fw-bold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fas fa-user me-2" />Admin
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link to="/userprofile" className="dropdown-item">Profile</Link></li>
                                        <li><Link to="#" className="dropdown-item" onClick={logout}>Logout</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="container-fluid px-3">
                        <div className="row g-3 my-2">
                            <div className="col-md-6">
                            <Link to='/addcar' className='link'>
                                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 className="fs-2">2</h3>
                                        <p className="fs-5 bold">Add Cars</p>
                                    </div>
                                    <i className="FaPeopleCarry primary-text border rounded-full secondary-bg p-3"
                                    ><FaCar size={40}></FaCar></i>
                                </div>
                                </Link>
                            </div>
                            
                            <div className="col-md-6">
                            <Link to='/addlaundry' className='link'>
                                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 className="fs-2">4</h3>
                                        <p className="fs-5 bold">Servicing</p>
                                    </div>
                                    <i className="FaUserCheck primary-text border rounded-full secondary-bg p-3" >
                                    <GiWaveCrest size={40}></GiWaveCrest></i>
                                </div>
                                </Link>
                            </div>
                            <div className="col-md-6">
                                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 className="fs-2">4</h3>
                                        <p className="fs-5 bold">Spare parts</p>
                                    </div>
                                    <i className="ImProfile primary-text border rounded-full secondary-bg p-3" >
                                        <GiToolbox size={40}></GiToolbox> </i>
                                </div>
                            </div>
                            {/* <div className="col-md-6">
                                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 className="fs-2">4</h3>
                                        <p className="fs-5 bold">Cleaning</p>
                                    </div>
                                    <i className="AiOutlineUsergroupAdd primary-text border rounded-full secondary-bg p-3" >
                                        <FaCar size={40}></FaCar> </i>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* /#page-content-wrapper */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Invoice</h5>
                        </div>
                        <div className="modal-body">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Workers;