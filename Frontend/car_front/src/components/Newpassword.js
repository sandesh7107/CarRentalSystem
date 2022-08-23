import React from "react";
import "./Register.css";
import Navbar from "./navbar";
import sahayogi from "../images/logo.jpg";
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
export default function Newpassword() {
  const [password, setPassword] = useState("");

  const [email, setEmail] = useSearchParams();

  const updatePassword = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:180/updatepassword", {
        email: email.get("email"),
        password: password,
      })
      .then((result) => {
        if (result.data) {
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
              <h3>Add New Password</h3>

              <div class="form-wrapper">
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  id="password"
                  placeholder="Add New Password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                className="fogotpsw"
                type="submit"
                id="signup"
                onClick={updatePassword}
              >
                Submit
              </button>
            </form>
          </div>

          <div class="classa">
            <img src={sahayogi} alt="#" height="300" />

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
