import React from "react";
import Header from "../compenant/Header";
import Footer from "../compenant/Footer";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../FireBase/Config";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [haserreur, sethaserreur] = useState(false);
  const [firebaserreur, setfirebaserreur] = useState("false");
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Page Sign In</title>
      </Helmet>
      <Header />
      <main>
        <form>
          <label for="email">Email d'utilisateur :</label>
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

              signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  console.log("conexion ok");
                  navigate("/");
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;

                  sethaserreur(true);

                  switch (errorCode) {
                    case "auth/invalid-email":
                      setfirebaserreur("email incorrect");
                      break;
                    case "auth/wrong-password":
                      setfirebaserreur("mot de passe  incorrect");
                      break;
                    case "auth/user-not-found":
                      setfirebaserreur("vous etes pas enregistrer");
                      break;

                    default:
                      setfirebaserreur("s'il vous plait vérifier votre email et password");
                      break;
                  }
                });
            }}
            type="submit"
            value="Se connecter"
          />
          <p>
            Dont have an account <Link to="/SignUp">S'inscrire</Link>
          </p>
          {haserreur && <p className="error-message">{firebaserreur}</p>}
        </form>
      </main>

      <Footer />
    </>
  );
};

export default SignIn;
