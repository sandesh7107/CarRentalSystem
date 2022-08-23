import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "./navbar";
import "./dashboard.css";
import { FaCar } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { BsFlag } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { BiShare } from "react-icons/bi";
import { FcApproval } from "react-icons/fc";
import { ImCross } from "react-icons/im";
import { FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { BsFillFlagFill } from "react-icons/bs";

import { Container, Radio, Rating } from "./RatingStyles";

export default function SingleCar() {
  const [singledata, setSingledata] = useState([]);
  const [prodata, setProdata] = useState([]);
  const [rate, setRate] = useState(0);
  const [like, setLike] = useState(0);
  const [flagg, setFlag] = useState(0);

  const { id } = useParams();
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("t"),
    },
  };

  const [text, settext] = useState("");
  function parseJwt(token) {
    if (!token) {
      return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  }
  // get user form the token
  const token_data = localStorage.getItem("t");
  const token = parseJwt(token_data);
  const userid = token?.cusId;
  console.log(userid);

  const addcomment = (e) => {
    e.preventDefault();

    const adata = { text: text, user: userid, car: id, rating: rate };

    axios
      .post("http://localhost:180/comment/add", adata)
      .then((result12) => {
        if (result12.data) {
          alert("Comment Added succsessfullly!!");
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

  useEffect(() => {
    axios
      .get("http://localhost:180/comment/details/" + id)
      .then((result) => {
        // console.log(result.data);
        setProdata(result.data);
      })

      .catch((e) => {
        console.log("something went wrong");
      });
  }, []);
  // console.log(prodata)
  useEffect(() => {
    prodata.map((data) => {
      setLike(data.like?.length);
    });
  }, []);
  const givenRating = 3;

  const incrementCount = () => {
    // Update state with incremented value
    setFlag(flagg + 1);
    alert("Comment Flagged Succesfully");
  };

  const Like = (id) => {
    const adata = { userid: userid, cid: id };
    console.log(userid);

    axios
      .put("http://localhost:180/comment/like/", adata)
      .then((result12) => {
        if (result12.data) {
          alert('Comment Liked Succesfully')
          result12.data.like.map(likess => {

          })
          alert("Liked succsessfullly!!");
        }
      })
      .catch();
  };
  const UnLike = (id) => {
    const adata = { userid: userid, cid: id };
    console.log(userid);
    axios
      .put("http://localhost:180/comment/unlike", adata)
      .then((result12) => {
        if (result12.data) {

          alert("unLiked succsessfullly!!");
        }
      })
      .catch();
  };


  const Flag = (id) => {
    const adata = { userid: userid, cid: id };
    console.log(userid);

    axios
      .put("http://localhost:180/comment/flag", adata)
      .then((result12) => {
        if (result12.data) {
          alert('Comment Reported')

            ;
        }
      })
      .catch();
  };


  const Unflag = (id) => {
    const adata = { userid: userid, cid: id };
    console.log(userid);

    axios
      .put("http://localhost:180/comment/unflag", adata)
      .then((result12) => {
        if (result12.data) {
          alert('Comment Unreported ')
            ;
        }
      })
      .catch();
  };




  return (
    <div>
      <Navbar></Navbar>
      <div className="container ">
        <div className="d-flex">
          <div className="maind row py-5">
            <div className="design text-center">
              <h1 className="hii"> Car Details</h1>
              <div className="d-flex mt-5 ">
                <div className=" d-flex">
                  <img
                    src={"http://localhost:180/" + singledata.photo}
                    width="300"
                    height="300"
                    className="mb-4"
                  />
                </div>
                <div className="col-md-4">
                  <FaCar size={30}></FaCar>
                  <h5 className="mt-2">
                    {singledata.firstname} 
                  </h5>
                  <ImLocation2 size={30}></ImLocation2>
                  <h5 className="mt-2">{singledata.address}</h5>

                  <FaCar size={30}></FaCar>
                  <h5 className="mt-2">{singledata.gender}</h5>
                  <Link to={"/bookcar/" + singledata._id}>
                    {" "}
                    <button type="button" class="btn btn-info">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 ml-5 mt-5 ">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Other Details</span>
            </h4>

            <ul className="list-group mb-3 z-depth-1">
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Used by</h6>
                </div>
                <span className="text">{singledata.experience} Users </span>
              </li>

              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Picking up Location</h6>
                  <small className="text-muted">
                    {singledata.workinglocation}
                  </small>
                </div>
              </li>

              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">In use for</h6>
                </div>
                <span className="text">{singledata.age} years</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">
                    Availability of the car:
                    {singledata.isApproved ? (
                      <FcApproval size={25} className="ml-3"></FcApproval>
                    ) : (
                      <ImCross size={20} className="ml-3"></ImCross>
                    )}
                  </h6>
                  <small className="text-muted">{singledata.brand}</small>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* <h4>Rate worker</h4> */}

        {/* {[...Array(5)].map((item, index) => {
          const givenRating = index + 1;
          return (
            <label>
              <Radio
                type="radio"
                value={givenRating}
                onClick={(e) => {
                  setRate(givenRating);
                  alert(`Are you sure you want to give ${givenRating} stars ?`);
                }}
              />
              <Rating>
                <FaStar
                  color={
                    givenRating < rate || givenRating === rate
                      ? "FDD017"
                      : "rgb(192,192,192)"
                  }
                />
              </Rating>
            </label>
          );
        })} */}
        {/* <h4 className="">Reviews</h4> */}

        {/* <form>
          <div class="form-group">
            <input
              type="textarea"
              class="form-control py-5"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Add a comment"
              value={text}
              onChange={(e) => settext(e.target.value)}
            ></input>
          </div>
          <button type="submit" class="btn btn-info" onClick={addcomment}>
            Post
          </button>
        </form> */}

        {/* {prodata.map((singledata) => {
          return (
            <div>
              <div className="d-flex">
                <img
                  src={"http://localhost:180/" + singledata.user.photo}
                  className="imagesss rounded-circle p-2 m-3"
                />

                <div>
                  <h5 className="pl-1 pt-4">
                    {singledata.user.firstname} {singledata.user.lastname}{" "}
                    <div className="float-right flag">

                      <label>


                        {singledata.rating === 1 ? (
                          <Rating>
                            <AiOutlineStar
                              style={{ color: "orange" }}
                            ></AiOutlineStar>
                          </Rating>
                        ) : singledata.rating === 2 ? (
                          <Rating>
                            <AiOutlineStar
                              style={{ color: "orange" }}
                            ></AiOutlineStar>
                            <AiOutlineStar
                              style={{ color: "orange" }}
                            ></AiOutlineStar>
                          </Rating>
                        ) : singledata.rating === 3 ? (
                          <Rating>
                            <AiOutlineStar
                              style={{ color: "orange" }}
                            ></AiOutlineStar>
                            <AiOutlineStar
                              style={{ color: "orange" }}
                            ></AiOutlineStar>
                            <AiOutlineStar
                              style={{ color: "orange" }}
                            ></AiOutlineStar>
                          </Rating>
                        ) : singledata.rating === 4 ? (
                          <Rating>
                            <AiOutlineStar
                              style={{ color: "orange" }}
                            ></AiOutlineStar>
                            <AiOutlineStar
                              style={{ color: "orange" }}
                            ></AiOutlineStar>
                            <AiOutlineStar
                              style={{ color: "orange" }}
                            ></AiOutlineStar>
                            <AiOutlineStar
                              style={{ color: "orange" }}
                            ></AiOutlineStar>
                          </Rating>
                        ) : singledata.rating === 5 ? (
                          <Rating>
                            <AiOutlineStar
                              style={{ color: "orange" }}
                            ></AiOutlineStar>
                            <AiOutlineStar
                              style={{ color: "orange" }}
                            ></AiOutlineStar>
                            <AiOutlineStar
                              style={{ color: "orange" }}
                            ></AiOutlineStar>
                            <AiOutlineStar
                              style={{ color: "orange" }}
                            ></AiOutlineStar>
                            <AiOutlineStar
                              style={{ color: "orange" }}
                            ></AiOutlineStar>
                          </Rating>
                        ) : (
                          <></>
                        )}
                      </label>
                      {singledata.flag.includes(userid) ? <Link to="#" onClick={Unflag.bind(this, singledata._id)}>
                        {" "}
                        <BsFillFlagFill size={25} style={{ color: 'red' }} ></BsFillFlagFill>
                      </Link> : <Link to="#" onClick={Flag.bind(this, singledata._id)}>
                        {" "}
                        <BsFlag size={25} style={{ color: 'red' }}></BsFlag>
                      </Link>}
                      <small className="text-muted m-2">
                        {singledata.flag?.length}
                      </small>

                    </div>
                  </h5>

                  <p>{singledata.text}</p>
                  {singledata.like.includes(userid) ? <Link to="#" onClick={UnLike.bind(this, singledata._id)}>
                    {" "}
                    <AiFillLike size={25}></AiFillLike>
                  </Link> : <Link to="#" onClick={Like.bind(this, singledata._id)}>
                    {" "}
                    <AiOutlineLike size={25}></AiOutlineLike>
                  </Link>}
                  <small className="text-muted m-2">
                    {singledata.like?.length}
                  </small>
                  <BiShare size={25} className="ml-5"></BiShare>
                </div>
              </div>

              <hr></hr>
            </div>
          );
        })} */}

        
      </div>
    </div>
    
  );
}
