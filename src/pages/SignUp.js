import React from "react";
import Header from '../compenant/Header'
import Footer from '../compenant/Footer';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const SignUp = () => {
  return (
    <>
    <Helmet>
        <title>Page Sign Up</title>
      
      </Helmet>
      <Header/>
      <main>
        <form>
          <h2 className="create">Page d'inscription <span>🧡</span></h2>
          <label for="email">Email d'utilisateur :</label>
          <input type="email" id="email" name="email" />

          <label for="password">Mot de passe :</label>

          <input type="password" id="password" name="password" />

          <input type="submit" value="S'inscrire" />
          <p>
            If you have an account <Link to="/SignIn">Se connecter</Link>
          </p>
        </form>
      </main>
    
      <Footer/>
    
    </>
  );
};

export default SignUp;