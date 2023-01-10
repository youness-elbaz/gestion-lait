import React from "react";
import Header from "../compenant/Header";
import Footer from "../compenant/Footer";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <Helmet>
        <title>Page Sign In</title>
      </Helmet>
      <Header />
      <main>
        <form>
          <label for="email">Email d'utilisateur :</label>
          <input type="email" id="email" name="email" />

          <label for="password">Mot de passe :</label>

          <input type="password" id="password" name="password" />

          <input type="submit" value="Se connecter" />
          <p>
            Dont have an account <Link to="/SignUp">S'inscrire</Link>
          </p>
        </form>
      </main>

      <Footer />
    </>
  );
};

export default SignIn;
