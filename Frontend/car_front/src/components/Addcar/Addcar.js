import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../dashboard.css";
import { Link } from "react-router-dom";
import log from "../../images/log.png";
import { TiTickOutline } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { AiFillDelete } from "react-icons/ai";

export const Addcar = () => {
  const logout = () => {
    localStorage.clear();
    window.location.replace("/");
  };

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("t"),
    },
  };

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

  const ApproveBooking = (id) => {
    const data = { id: id };
    axios
      .put("http://localhost:180/car/approve/", data, config)
      .then((result) => {
        if (result.data.success) {
          alert("Approval Successful");
        } else {
          alert("Something went wrong");
        }
      })
      .catch(() => {
        alert("invalid");
      });
  };

  const addworkers = (e) => {
    e.preventDefault();

    const adata = new FormData();

    adata.append("firstname", firstname);
    adata.append("lastname", lastname);
    adata.append("phone", phone);
    adata.append("gender", gender);
    adata.append("address", address);
    adata.append("age", age);
    adata.append("experience", experience);
    adata.append("workinglocation", workinglocation);
    adata.append("image", photo);
    console.log(adata);
    axios
      .post("http://localhost:180/car/add", adata)
      .then((result12) => {
        console.log(result12.data.success);
        if (result12.data.success) {
        }
        alert("Product Added succsessfullly!!");
      })
      .catch();
  };

  useEffect(() => {
    axios
      .get("http://localhost:180/car/details")
      .then((result) => {
        console.log(result.data);
        setProdata(result.data);
      })

      .catch((e) => {
        console.log("something went wrong");
      });
  }, []);

  const deleteCar = (id) => {
    axios
      .delete("http://localhost:180/car/delete/" + id)

      .then((result) => {
        // console.log(result.data)
        if (result.data) {
          alert("delete successfully");
          console.log(result.data);
        } else {
          alert("something is wrong");
        }
      })
      .catch(() => {
        alert("something went wrong");
      });

    //delete
  };

  return (
    <>
      <div className="d-flex" id="wrapper">
        {/* Sidebar */}
        <div className="bg-white" id="sidebar-wrapper">
          <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
            {" "}
            <img src={log} alt="#" height={200} />
            CAR RentING SYSTEM
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
              <h2 className="fs-2 m-0">Add Car Here</h2>
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
                  <h1 className="custom-heading-h2 p-3 ml-5">Add Car </h1>

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
                      placeholder="Car Brand"
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
                      placeholder="Car Brand"
                      id="gender"
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
                      placeholder="In use for/ year"
                      value={age}
                      onChange={(e) => setage(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="experience"
                      placeholder="Used by / previous users" 
                      value={experience}
                      onChange={(e) => setexperience(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      id="age"
                      className="form-control"
                      placeholder="Car Picking location"
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
                    onClick={addworkers}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="container ">
            <div className="row">
              <h4 className="text-center mt-5">Added Cars  </h4>
              {prodata.map((singleData) => {
                return (
                  <div className="col-md-4 mt-5 ">
                    <div className="col-md-4 view">
                      <img
                        src={"http://localhost:180/" + singleData.photo}
                        className="img-fluid "
                      />
                      <p>
                        {singleData.firstname} {singleData.lastname}
                      </p>

                      <p>{singleData.address} </p>
                      <p>{singleData.age} </p>
                      <p> {singleData.gender}</p>
                      <Link to="#">
                        <i class="fa fa fa-times text-danger fs-4 "></i>
                      </Link>
                      <Link
                        to="#"
                        onClick={() => {
                          ApproveBooking(singleData._id);
                        }}
                        className="ml-4"
                      >
                        <i class="fa fa-check text-success fs-4"></i>
                      </Link>
                    </div>
                    <Link to={"/updatecar/" + singleData._id}>
                      <button type="button" class="btn btn-warning ml-5 mt-2">
                        Update
                      </button>
                    </Link>
                    <Link to="#" onClick={() => deleteCar(singleData._id)}>
                      <AiFillDelete size={50} className="ml-2"></AiFillDelete>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* /#page-content-wrapper */}
    </>
  );
};
export default Addcar;
