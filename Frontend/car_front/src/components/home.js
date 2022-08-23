
import React from "react";
import "./home.css";
import "./bootstrap.min.css";
import "./animate.css";
import "./animate.min.css";
import yes from "../images/yes.jpg";
import car from "../images/car.jpg";
import about from "../images/about.png";
import news from "../images/newsletter.png";
import Navbar from "./navbar";
import MessengerCustomerChat from "react-messenger-customer-chat";

export default function Home() {
  return (
    <div>
      <MessengerCustomerChat pageId="100920462658215" appId="557086452712237" />,
      <div class="container-xxl bg-white p-0">
      
        {/* Navbar & Hero Start */}
        <div class="container-xxl position-relative p-0">
          <Navbar></Navbar>
          <div class="container-xxl bg-danger hero-header">
            <div class="container">
              <div class="row g-5 align-items-center">
                <div class="col-lg-6 text-center text-lg-start">
                  <h1 class="text-white mb-4 animated zoomIn">
                    RENT A BEST CAR IN TOWN
                  </h1>
                  <p class="text-white pb-3 animated zoomIn">
                    Rent a car in just the single click
                  </p>
                  <a
                    href=""
                    class="btn btn-outline-light rounded-pill border-2 py-3 px-5 animated slideInRight"
                  >
                    Learn More
                  </a>
                </div>
                <div class="col-lg-6 text-center text-lg-start">
                  <img class=" animated zoomIn" src={car} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Start */}
        {/* <div class="container-xxl py-6">
          <div class="container">
            <div class="row g-5 align-items-center">
              <div class="col-lg-6 wow zoomIn" data-wow-delay="0.1s">
                <img class="animated zoomIn " src={about} />
              </div>
              <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="d-inline-block border rounded-pill text-primary px-4 mb-3">
                  About Us
                </div>
                <h2 class="mb-4">
                  Award Wining Consultancy Agency For Your Business
                </h2>
                <p class="mb-4">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                  tempor sit. Aliqu diam amet diam et eos labore. Clita erat
                  ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                  clita duo justo et tempor eirmod
                </p>
                <div class="row g-3 mb-4">
                  <div class="col-12 d-flex">
                    <div class="flex-shrink-0 btn-lg-square rounded-circle bg-success">
                      <i class="fa fa-user-tie text-white"></i>
                    </div>
                    <div class="ms-4">
                      <h6>Business Planning</h6>
                      <span>
                        Tempor erat elitr rebum at clita. Diam dolor ipsum amet
                        eos erat ipsum lorem et sit sed stet lorem sit clita duo
                      </span>
                    </div>
                  </div>
                  <div class="col-12 d-flex">
                    <div class="flex-shrink-0 btn-lg-square rounded-circle bg-success">
                      <i class="fa fa-chart-line text-white"></i>
                    </div>
                    <div class="ms-4">
                      <h6>Financial Analaysis</h6>
                      <span>
                        Tempor erat elitr rebum at clita. Diam dolor ipsum amet
                        eos erat ipsum lorem et sit sed stet lorem sit clita duo
                      </span>
                    </div>
                  </div>
                </div>
                <a class="btn btn-success rounded-pill py-3 px-5 mt-2" href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div> */}
        {/* <!-- About End --> */}

        {/* <!-- Newsletter Start --> */}
        <div
          class="container-xxl bg-danger my-6 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div class="container px-lg-5">
            <div class="row align-items-center">
              <div class="col-12 col-md-6">
                <h3 class="text-white">Ready to get started</h3>
                <small class="text-white">
                  Diam elitr est dolore at sanctus nonumy.
                </small>
                <div class="position-relative w-100 mt-3">
                  <input
                    class="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                    type="text"
                    placeholder="Enter Your Email"
                  />
                  <button
                    type="button"
                    class="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
                  >
                    <i class="fa fa-paper-plane text-primary fs-4"></i>
                  </button>
                </div>
              </div>
              <div class="col-md-6 text-center mb-n5 d-none d-md-block">
                <img class="mt-5" src={yes} />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Service Start --> */}
        {/* <div class="container-xxl py-6">
          <div class="container  animated zoomIn">
            <div class="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s">
              <div class="d-inline-block border rounded-pill text-primary px-4 mb-3">
                Our Services
              </div>
              <h2 class="mb-5">We Provide Solutions On Your Business</h2>
            </div>
            <div class="row g-4">
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="service-item rounded h-100">
                  <div class="d-flex justify-content-between">
                    <div class="service-icon">
                      <i class="fa fa-user-tie fa-2x"></i>
                    </div>
                    <a class="service-btn" href="">
                      <i class="fa fa-link fa-2x"></i>
                    </a>
                  </div>
                  <div class="p-5">
                    <h5 class="mb-3">Business Research</h5>
                    <span>
                      Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                      lorem sed diam stet diam sed stet lorem.
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div class="service-item rounded h-100">
                  <div class="d-flex justify-content-between">
                    <div class="service-icon">
                      <i class="fa fa-chart-pie fa-2x"></i>
                    </div>
                    <a class="service-btn" href="">
                      <i class="fa fa-link fa-2x"></i>
                    </a>
                  </div>
                  <div class="p-5">
                    <h5 class="mb-3">Stretagic Planning</h5>
                    <span>
                      Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                      lorem sed diam stet diam sed stet lorem.
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                <div class="service-item rounded h-100">
                  <div class="d-flex justify-content-between">
                    <div class="service-icon">
                      <i class="fa fa-chart-line fa-2x"></i>
                    </div>
                    <a class="service-btn" href="">
                      <i class="fa fa-link fa-2x"></i>
                    </a>
                  </div>
                  <div class="p-5">
                    <h5 class="mb-3">Market Analysis</h5>
                    <span>
                      Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                      lorem sed diam stet diam sed stet lorem.
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="service-item rounded h-100">
                  <div class="d-flex justify-content-between">
                    <div class="service-icon">
                      <i class="fa fa-chart-area fa-2x"></i>
                    </div>
                    <a class="service-btn" href="">
                      <i class="fa fa-link fa-2x"></i>
                    </a>
                  </div>
                  <div class="p-5">
                    <h5 class="mb-3">Financial Analaysis</h5>
                    <span>
                      Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                      lorem sed diam stet diam sed stet lorem.
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div class="service-item rounded h-100">
                  <div class="d-flex justify-content-between">
                    <div class="service-icon">
                      <i class="fa fa-balance-scale fa-2x"></i>
                    </div>
                    <a class="service-btn" href="">
                      <i class="fa fa-link fa-2x"></i>
                    </a>
                  </div>
                  <div class="p-5">
                    <h5 class="mb-3">legal Advisory</h5>
                    <span>
                      Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                      lorem sed diam stet diam sed stet lorem.
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                <div class="service-item rounded h-100">
                  <div class="d-flex justify-content-between">
                    <div class="service-icon">
                      <i class="fa fa-house-damage fa-2x"></i>
                    </div>
                    <a class="service-btn" href="">
                      <i class="fa fa-link fa-2x"></i>
                    </a>
                  </div>
                  <div class="p-5">
                    <h5 class="mb-3">Tax & Insurance</h5>
                    <span>
                      Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                      lorem sed diam stet diam sed stet lorem.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <!-- Service End --> */}

        {/* <!-- Features Start --> */}
        <div class="container-xxl py-6">
          <div class="container animated zoomIn">
            <div class="row g-5">
              <div class="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                <div class="d-inline-block border rounded-pill text-primary px-4 mb-3">
                  Features
                </div>
                <h2 class="mb-4">
                  Why People Choose Us? We Are Trusted & Award Wining Agency
                </h2>
                <p>
                  Clita nonumy sanctus nonumy et clita tempor, et sea amet ut et
                  sadipscing rebum amet takimata amet, sed accusam eos eos
                  dolores dolore et. Et ea ea dolor rebum invidunt clita eos.
                  Sea accusam stet stet ipsum, sit ipsum et ipsum kasd
                </p>
                <p>
                  Et ea ea dolor rebum invidunt clita eos. Sea accusam stet stet
                  ipsum, sit ipsum et ipsum kasd
                </p>
                <a class="btn btn-danger rounded-pill py-3 px-5 mt-2" href="">
                  Read More
                </a>
              </div>
              <div class="col-lg-7">
                <div class="row g-5">
                  <div class="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                    <div class="d-flex align-items-center mb-3">
                      <div class="flex-shrink-0 btn-square bg-danger rounded-circle me-3">
                        <i class="fa fa-cubes text-white"></i>
                      </div>
                      <h6 class="mb-0">Best In Industry</h6>
                    </div>
                    <span>
                      Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos
                      diam dolor
                    </span>
                  </div>
                  <div class="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                    <div class="d-flex align-items-center mb-3">
                      <div class="flex-shrink-0 btn-square bg-danger rounded-circle me-3">
                        <i class="fa fa-percent text-white"></i>
                      </div>
                      <h6 class="mb-0">99% Success Rate</h6>
                    </div>
                    <span>
                      Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos
                      diam dolor
                    </span>
                  </div>
                  <div class="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                    <div class="d-flex align-items-center mb-3">
                      <div class="flex-shrink-0 btn-square bg-danger rounded-circle me-3">
                        <i class="fa fa-award text-white"></i>
                      </div>
                      <h6 class="mb-0">Award Winning</h6>
                    </div>
                    <span>
                      Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos
                      diam dolor
                    </span>
                  </div>
                  <div class="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                    <div class="d-flex align-items-center mb-3">
                      <div class="flex-shrink-0 btn-square bg-danger rounded-circle me-3">
                        <i class="fa fa-smile-beam text-white"></i>
                      </div>
                      <h6 class="mb-0">100% Happy Client</h6>
                    </div>
                    <span>
                      Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos
                      diam dolor
                    </span>
                  </div>
                  <div class="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                    <div class="d-flex align-items-center mb-3">
                      <div class="flex-shrink-0 btn-square bg-danger rounded-circle me-3">
                        <i class="fa fa-user-tie text-white"></i>
                      </div>
                      <h6 class="mb-0">Professional Advisors</h6>
                    </div>
                    <span>
                      Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos
                      diam dolor
                    </span>
                  </div>
                  <div class="col-sm-6 wow fadeIn" data-wow-delay="0.6s">
                    <div class="d-flex align-items-center mb-3">
                      <div class="flex-shrink-0 btn-square bg-danger rounded-circle me-3">
                        <i class="fa fa-headset text-white"></i>
                      </div>
                      <h6 class="mb-0">24/7 Customer Support</h6>
                    </div>
                    <span>
                      Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos
                      diam dolor
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Features End --> */}

        {/* <!-- Footer Start --> */}
        <div
          class="container-fluid bg-dark text-light footer pt-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div class="container py-5">
            <div class="row g-5">
              <div class="col-md-6 col-lg-3">
                <h5 class="text-white mb-4">Get In Touch</h5>
                <p>
                  <i class="fa fa-map-marker-alt me-3"></i>123 Street, kathmandu
                </p>
                <p>
                  <i class="fa fa-phone-alt me-3"></i>+012 345 67890
                </p>
                <p>
                  <i class="fa fa-envelope me-3"></i>info@example.com
                </p>
                <div class="d-flex pt-2">
                  <a class="btn btn-outline-light btn-social" href="">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="btn btn-outline-light btn-social" href="">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="btn btn-outline-light btn-social" href="">
                    <i class="fab fa-youtube"></i>
                  </a>
                  <a class="btn btn-outline-light btn-social" href="">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a class="btn btn-outline-light btn-social" href="">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-lg-3">
                <h5 class="text-white mb-4">Quick Link</h5>
                <a class="btn btn-link" href="">
                  About Us
                </a>
                <a class="btn btn-link" href="">
                  Contact Us
                </a>
                <a class="btn btn-link" href="">
                  Privacy Policy
                </a>
                <a class="btn btn-link" href="">
                  Terms & Condition
                </a>
                <a class="btn btn-link" href="">
                  Career
                </a>
              </div>
              <div class="col-md-6 col-lg-3">
                <h5 class="text-white mb-4">Popular Link</h5>
                <a class="btn btn-link" href="">
                  About Us
                </a>
                <a class="btn btn-link" href="">
                  Contact Us
                </a>
                <a class="btn btn-link" href="">
                  Privacy Policy
                </a>
                <a class="btn btn-link" href="">
                  Terms & Condition
                </a>
                <a class="btn btn-link" href="">
                  Career
                </a>
              </div>
              <div class="col-md-6 col-lg-3">
                <h5 class="text-white mb-4">Newsletter</h5>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare velit non vulpu
                </p>
                <div class="position-relative w-100 mt-3">
                  <input
                    class="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                    type="text"
                    placeholder="Your Email"
                  />
                  <button
                    type="button"
                    class="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
                  >
                    <i class="fa fa-paper-plane text-primary fs-4"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="copyright">
              <div class="row">
                <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                  &copy;{" "}
                  <a class="border-bottom" href="#">
                  Car rental system
                  </a>
                  , All Right Reserved. Designed By{" "}
                  <a class="border-bottom" href="https://htmlcodex.com">
                  Car rental system Team
                  </a>
                </div>
                <div class="col-md-6 text-center text-md-end">
                  <div class="footer-menu">
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

        <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top">
          <i class="bi bi-arrow-up"></i>
        </a>
      </div>
    </div>
  );
}
