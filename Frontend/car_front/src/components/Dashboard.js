import React from 'react'
import axios from 'axios'
import { useEffect, useState } from "react";
import './dashboard.css'
import { Link } from 'react-router-dom'
import log from '../images/log.png'
import { BsPencilSquare } from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa';
import {FaCar} from 'react-icons/fa';
import {FaUserCheck} from 'react-icons/fa';
import {ImProfile} from 'react-icons/im';
import {AiOutlineUsergroupAdd} from 'react-icons/ai';
export const Dashboard = () => {

    const logout=()=>{
        localStorage.clear();
        window.location.replace('/')
    }
    const [message, setMessage] = useState('');
    const [booking, setBooking] = useState([])
    function showBooking() {
        const booking = axios.get('http://localhost:90/show/bookings').then(data => {
            setBooking(data.data)
        })
    }
    useEffect(() => {
        showBooking()
    })
    // 
    const [vehiclename, setvehiclename] = useState('')
    const [username, setusername] = useState('')
    const [vehiclenumber, setvehiclenumber] = useState('')
    const [data, setData] = useState({})
    const showData = (id) => {
        axios.get(`http://localhost:90/booking/show/${id}`).then(data => {
            setData(data.data)
            setvehiclename(data.data.vehiclename)
            setvehiclenumber(data.data.vehiclenumber)
            setusername(data.data.username)
        })
    }
    console.log(data);
    // useEffect(() => {
    //     showData()
    // }, [])
    // invoice post
    const [problemdescription, setproblemdescription] = useState('')
    const [totalcost, settotalcost] = useState('')
    // delete
    const invoice = (e) => {
        e.preventDefault()
        axios.post('http://localhost:90/invoice/insert', {
            problemdescription,
            totalcost,
            username,
            vehiclename,
            vehiclenumber
        }).then(res=>{
            console.log(res);
        })
    }
    // 
    const deletebooking = (bookingid) => {
        axios.delete(`http://localhost:90/delete/bookings/${bookingid}`, {    
        }).then(res=>{
            console.log(res.data);
        })
    }
    return (
        <>
            <div className="d-flex" id="wrapper">
                {/* Sidebar */}
                <div className="bg-white" id="sidebar-wrapper">
                    
                    <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"> 	<img src= {log} alt="#" height={200}/>Car Rental System</div>
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
                            <div className="col-md-3">
                                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 className="fs-2">8</h3>
                                        <p className="fs-5">Cars</p>
                                    </div>
                                    <i className="FaPeopleCarry primary-text border rounded-full secondary-bg p-3" 
                                    
                                    ><FaCar size={40}></FaCar></i> 
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 className="fs-2">4</h3>
                                        <p className="fs-5">Registered User</p>
                                    </div>
                                    <i className="FaUserCheck primary-text border rounded-full secondary-bg p-3" > 
                                    <FaUserCheck size={40}></FaUserCheck></i>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 className="fs-2">4</h3>
                                        <p className="fs-5">Profile</p>
                                    </div>
                                    <i className="ImProfile primary-text border rounded-full secondary-bg p-3" >
                                        <ImProfile size={40}></ImProfile> </i>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 className="fs-2">4</h3>
                                        <p className="fs-5">Add Cars</p>
                                    </div>
                                    <i className="AiOutlineUsergroupAdd primary-text border rounded-full secondary-bg p-3" >
                                        <FaCar size={40}></FaCar> </i>
                                </div>
                            </div>
                        </div>
                        <div className="row my-5">
                            <h3 className="fs-4 mb-3">Recent Registred Users</h3>
                            <div className="container mx-auto">
                                <table className="table bg-white rounded shadow-sm  table-hover">
                                    <thead style={{ fontSize: ".9em" }}>
                                        <tr>
                                            <th scope="col" width={50}>#</th>
                                            <th scope="col" className=''>Client Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">Phone</th>
                                            {/* <th scope="col">problemdescription</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            booking.map((data, ind) => {
                                                return (
                                                    <tr className='col-md-12' style={{ fontSize: ".8em" }}>
                                                        <th scope="row">1</th>
                                                        <td>{data.username}</td>
                                                        <td>{data.dateofbooking}</td>
                                                        <td>{data.address}</td>
                                                        <td>{data.phone}</td>
                                                        <td>{data.vehiclename}</td>
                                                        <td>{data.vehiclebrand}</td>
                                                        <td>{data.vehiclemodel}</td>
                                                        <td>{data.vehiclenumber}</td>
                                                        <td>{data.vehiclecategory} </td>
                                                        <>
                                                        <button onClick={showData.bind(this, data._id)} type='button' className='btn btn-outline-success my-1 btn-sm' data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Invoice</button>
                                                        <>
                                                        <Link to={`/updatebooking/${data._id}`} type='button' className='btn my-1 mx-1 btn-outline-warning btn-sm'><BsPencilSquare/></Link>
                                                        <button onClick={deletebooking.bind(this, data._id)} type='button' className='btn my-1 mx-1 btn-outline-danger btn-sm'><FaTrashAlt/></button>
                                                        </>
                                                        </>
                                                        {/* <td>{data.problemdescription}</td> */}
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
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
                             <h4>{message}</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Username:</label>
                                    <input value={username} onChange={e=>setusername(e.target.value)} type="text" className="form-control" id="recipient-name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Vehicle Name:</label>
                                    <input value={vehiclename} onChange={e=>setvehiclename(e.target.value)} type="text" className="form-control" id="recipient-name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Vehicle Number</label>
                                    <input value={vehiclenumber} onChange={e=>setvehiclenumber(e.target.value)} type="text" className="form-control" id="recipient-name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message-text" className="col-form-label">Problemdescription:</label>
                                    <textarea onChange={(e=>setproblemdescription(e.target.value))} className="form-control" id="message-text" defaultValue={""} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message-text" className="col-form-label">Total Cost:</label>
                                    <textarea onChange={(e=>settotalcost(e.target.value))} className="form-control" id="message-text" defaultValue={""} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={invoice} type="button" className="btn btn-primary">Invoice </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard;