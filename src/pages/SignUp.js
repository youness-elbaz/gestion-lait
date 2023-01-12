import React from "react";
import Header from "../compenant/Header";
import Footer from "../compenant/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FireBase/Config";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Page Sign Up</title>
      </Helmet>
      <Header />
      <main>
        <form>
        <p style={{ fontSize: "23px", marginBottom: "22px" }}>Create a new account <span>🧡</span> </p>
          <label>Email d'utilisateur :</label>
          <input
          required
            onChange={(eo) => {
              setemail(eo.target.value);
            }}
            type="email"
            id="email"
            name="email"
          />

          <label>Mot de passe :</label>

          <input
          required
            onChange={(eo) => {
              setpassword(eo.target.value);
            }}
            type="password"
            id="password"
            name="password"
          />

          <input
            onClick={(eo) => {
              eo.preventDefault();

              createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                
                  const user = userCredential.user;

                  console.log("done");
                  navigate("/");
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log(errorMessage);
                });
            }}
            type="submit"
            value="S'inscrire"
          />

          <p>
            If you have an account <Link to="/SignIn">Se connecter</Link>
          </p>
        </form>
      </main>

      <Footer />
    </>
  );
};

export default SignUp;
