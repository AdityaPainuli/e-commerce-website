import React from "react";
import "./login.css";
import { useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ loogedUser }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const handleNewUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        loogedUser();
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  };
  const existingUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        loogedUser();
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  const forgetPassword = (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Please fill your email so that we can send verification link 📧");
    } else {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert("Email send Succesfully 📩");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }
  };
  const handleUser = () => {
    let std = 5;
    console.log("count : %d", std);
    return;
  };
  return (
    <div className="login__container">
      <div className="login__form">
        <div className="form__description">
          <p className="main-text">Login 👋👋</p>
          <p className="description-text">Here our journey Start.</p>
        </div>
        <form>
          <input
            type="email"
            name="email"
            placeholder="username123@gmail.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => {
              setPass(e.target.value);
            }}
            required
          />
          <span className="forget_link" onClick={forgetPassword}>
            Forget your Password.
          </span>
          <button className="btn-login" type="submit" onClick={existingUser}>
            Login
          </button>
          <button className="btn-create-account" onClick={handleNewUser}>
            Create my Account
          </button>
        </form>
      </div>
      <img
        src="https://cdn.shopify.com/s/files/1/0566/0839/1368/products/4-min_0b05bed4-2f45-4a4e-8ba2-63ac51543bb0.jpg?v=1655814519"
        alt="Login Page"
      />
    </div>
  );
};

export default Login;
