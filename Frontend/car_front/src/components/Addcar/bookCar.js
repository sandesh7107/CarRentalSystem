import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../navbar";
import emailjs from 'emailjs-com'
import Khalti from '../khalti'

export default function BookCar() {
  const [singledata, setSingledata] = useState([]);

  const { id } = useParams();

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("t"),
    },
  };

  const [firstname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [lastname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [street, setStreet] = useState("");
  const [postalcode, setPostalcode] = useState("");

  console.log(singledata.name);

  const checkout = (e) => {
    e.persist();
    e.preventDefault();

    const adata = {
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      address: address,
      email:email,
      street: street,
      postalcode: postalcode,
      workersname: singledata?.firstname,
      workersphone: singledata?.phone,
    };

    //adding to the checkout to the beer

    axios
      .post("http://localhost:180/book/add", adata)
      .then((result12) => {
        console.log(result12.data);
        if (result12.data) {
         
          emailjs.sendForm('service_z8mql18', 'template_0umhdkq', e.target, 'Qr2rkw_7_ueP3QaCg')

          .then((result) => {
            console.log('2')
              console.log(result.text);
              
    
          });
        }
      })
      .catch();
  };

  useEffect(() => {
    axios
      .get("http://localhost:180/car/single/" + id, config)
      .then((result) => {
        // console.log(result.data)
        setSingledata(result.data);
        console.log("hi");
      });
  }, []);

  //made a single page route

  //checkout form for product route

  return (
    <div>
      <Navbar></Navbar>

      <div>
        <div className=" pt-4">
          <div className="container wow fadeIn">
            <h2 className="my-5 h2 text-center">Checkout form</h2>

            <div className="row">
              <div className="col-md-8 mb-4">
                <div className="card">
                  <form className="card-body p-5" onSubmit={checkout}>
                    <div className="row">
                      <div className="col-md-6 mb-2">
                        <div className="md-form ">
                          <input
                            type="text"
                            id="firstName"
                            name="name"
                            className="form-control"
                            placeholder="Firstname"
                            value={firstname}
                            onChange={(e) => setFname(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-md-6 mb-5">
                        <div className="md-form">
                          <input
                            type="text"
                            id="lastName"
                            className="form-control"
                            placeholder="Lastname"
                            value={lastname}
                            onChange={(e) => setLname(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="md-form mb-5">
                      <input
                        type="number"
                        id="phone"
                        name="phone"
                        className="form-control"
                        placeholder="Contact Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>

                    <div className="md-form mb-5">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="md-form mb-5">
                      <input
                        type="text"
                        id="address"
                        name="address"
                        className="form-control"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    {/* <div className="md-form mb-5"><label className="labels">Date Of Birth</label><input type="date" className="form-control" placeholder="Day/Month/Year"
                                           id='dob'
                                            value={street}
                                            onChange={(e) => setStreet(e.target.value)} /></div> */}
                                    

                    <div className="md-form mb-5">
                      <input
                        type="text"
                        id="address-2"
                        className="form-control"
                        placeholder="Office address"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                      />
                    </div>

                    <div className="row">
                      <div className="col-lg-4 col-md-6 mb-4">
                        <select
                          className="custom-select d-block w-100"
                          id="state"
                          required
                        >
                          <option value="">Choose Province</option>
                          <option>Province 1</option>
                          <option>Province 2</option>
                          <option>Province 3</option>
                          <option>Province 4</option>
                          <option>Province 5</option>
                          <option>Province 6</option>
                          <option>Province 7</option>
                        </select>
                        <div className="invalid-feedback">
                          Please provide a valid state.
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6 mb-4">
                        <input
                          type="text"
                          className="form-control"
                          id="zip"
                          placeholder="Driving Experience"
                          required
                          value={postalcode}
                          onChange={(e) => setPostalcode(e.target.value)}
                        />
                        <div className="invalid-feedback">
                          Driving Experience required.
                        </div>
                      </div>
                    </div>

                    <button
                     
                      type="submit"
                    >
                     <Khalti></Khalti>
                    </button>
                  </form>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-muted">Your cart</span>
                </h4>

                <ul className="list-group mb-3 z-depth-1">
                  <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 className="my-0">Car Name</h6>
                    </div>
                    <span className="text">
                      {singledata.firstname} {singledata.lastname}{" "}
                    </span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 className="my-0">Address</h6>
                    </div>
                    <span className="text">{singledata.address}</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 className="my-0">Used by </h6>
                    </div>
                    <span className="text">{singledata.experience} Users</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
