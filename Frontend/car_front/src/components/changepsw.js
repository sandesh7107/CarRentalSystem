import React from "react";
import "./Register.css";
import Navbar from "./navbar";
import log from "../images/log.png";
import googles from "../images/google.jpg";
import { useState } from "react";
import axios from "axios";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
export default function Changepsw() {
  const [password, setPassword] = useState("");
  const [newpassword, setnewPassword] = useState("");
  const [currentpassword, setCurrentpassword] = useState("");

  const {id}=useParams();

  const changepassword = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:180/changepassword/" +id, { password,newpassword,currentpassword
       
      })
      .then((result) => {
        if (result.data==='passwod chnged sucessfully') {
          alert(" Password updated Successfully");
        } else {
          alert("Something went wrong");
        }
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <Toaster />
      <div class="wrapper ">
        <div class="inner">
          <div>
            <form action="" id="registerForm">
              <h3>Change Password</h3>

              <div class="form-wrapper">



              <input
                  type="password"
                  class="form-control"
                  name="password"
                  id="password"
                  placeholder=" Current Password"
                  value={currentpassword}
                  required
                  onChange={(e) => setCurrentpassword(e.target.value)}
                />

                <input
                  type="password"
                  class="form-control mt-3"
                  name="password"
                  id="password"
                  placeholder="Add New Password"
                  value={newpassword}
                  required
                  onChange={(e) => setnewPassword(e.target.value)}
                />

                <input
                  type="password"
                  class="form-control mt-3"
                  name="password"
                  id="password"
                  placeholder="Confirm Password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                className="fogotpsw"
                type="submit"
                id="signup"
                onClick={changepassword}
              >
                Submit
              </button>
            </form>
          </div>

          <div class="classa">
            <img src={log} alt="#" height="300" />

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
