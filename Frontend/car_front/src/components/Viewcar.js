import React from "react";
import "./dashboard.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
export default function ViewCar() {
  const [prodata, setProdata] = useState([]);
  const [SearchTerms, setSearchTerms] = useState('');

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

const searchFunction=(e)=>{
  const searchTerm= e.target.value
  console.log(searchTerm)
  // let temp = []
  axios
      .get("http://localhost:180/car/details")
      .then((result) => {
        console.log(result.data);
        return (result.data);
      })
      .then(temp => {
        setProdata(() => {
        return temp.filter((item) => {
          if (item.address.indexOf(searchTerm) > -1) {
              return true
          }
          return false
        })
      })
    })
    
      .catch((e) => {
        console.log("something went wrong");
      });
  
    }


  return (
    <div>
      <Navbar></Navbar>

      <section className="section-products">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-8 col-lg-6">
              <div className="header">
                <h3>Featured Product</h3>
                <h2>Popular Cars</h2>
              </div>
            </div>

            {/* search */}
            <div class="input-group searchs">
              <div class="form-outline">
                <input type="search"  class="form-control"
                placeholder="Search in location ?"
                onChange={searchFunction}
                 />
              </div>
              <button type="button" class="btn btn-primary">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        
            <div className="row">
              {prodata.map((singleData) => {
                return (
                  <div className="col-md-6 col-lg-6 col-xl-3">
                    <div className="single-product">
                      <div className="part-1">
                        <img
                          src={"http://localhost:180/" + singleData.photo}
                          className="single-product "
                          height="300"
                          width="300"
                        />
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fas fa-shopping-cart"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-heart"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-plus"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-expand"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="part-2">
                        <h4 className="product-title name">
                          Car Name: {singleData.firstname} {singleData.lastname}
                        </h4>
                        <h4 className="product-price address">
                          Address: {singleData.address}
                        </h4>
                        <p className="product-price age">
                        <Link to={'/singlecar/'+ singleData._id}>  <button type="button" class="btn btn-info">View More</button></Link>
                          
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          
        </div>
      </section>

      {/* <!-- Footer Start --> */}
      <div
        className="container-fluid bg-dark text-light footer pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-3">
              <h5 className="text-white mb-4">Get In Touch</h5>
              <p>
                <i className="fa fa-map-marker-alt me-3"></i>123 Street, kathmandu
              </p>
              <p>
                <i className="fa fa-phone-alt me-3"></i>+012 345 67890
              </p>
              <p>
                <i className="fa fa-envelope me-3"></i>info@example.com
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h5 className="text-white mb-4">Quick Link</h5>
              <a className="btn btn-link" href="">
                About Us
              </a>
              <a className="btn btn-link" href="">
                Contact Us
              </a>
              <a className="btn btn-link" href="">
                Privacy Policy
              </a>
              <a className="btn btn-link" href="">
                Terms & Condition
              </a>
              <a className="btn btn-link" href="">
                Career
              </a>
            </div>
            <div className="col-md-6 col-lg-3">
              <h5 className="text-white mb-4">Popular Link</h5>
              <a className="btn btn-link" href="">
                About Us
              </a>
              <a className="btn btn-link" href="">
                Contact Us
              </a>
              <a className="btn btn-link" href="">
                Privacy Policy
              </a>
              <a className="btn btn-link" href="">
                Terms & Condition
              </a>
              <a className="btn btn-link" href="">
                Career
              </a>
            </div>
            <div className="col-md-6 col-lg-3">
              <h5 className="text-white mb-4">Newsletter</h5>
              <p>
                Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                Curabitur facilisis ornare velit non vulpu
              </p>
              <div className="position-relative w-100 mt-3">
                <input
                  className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                  type="text"
                  placeholder="Your Email"
                />
                <button
                  type="button"
                  className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
                >
                  <i className="fa fa-paper-plane text-primary fs-4"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <a className="border-bottom" href="#">
                  Car rental system
                </a>
                , All Right Reserved. Designed By{" "}
                <a className="border-bottom" href="https://htmlcodex.com">
                Car rental system Team
                </a>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="">Home</a>
                  <a href="">Cookies</a>
                  <a href="">Help</a>
                  <a href="">FQAs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}
    </div>
  );
}
