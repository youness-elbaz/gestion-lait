import React from "react";
import Header from '../compenant/Header'
import Footer from '../compenant/Footer';
import MainContent from '../compenant/MainContent';
import { Helmet } from 'react-helmet-async';
import { useAuthState } from "react-firebase-hooks/auth";
import "../compenant/Main.css"
import { auth } from "../FireBase/Config";
import { Link } from "react-router-dom";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
  
    <>
    <Helmet>
        <title>Page Home</title>
      
      </Helmet>

      <Header/>
<main>
  
        {user && (
                <p>Hommmmmme page</p>
            )}
    
    {!user && (
                
                <p>veuillez se connecter <Link className="main-link" to="/SignIn">SignIn</Link> </p>

            )}
    
</main>
        
        <Footer/>
  
      
    
    </>
  );
};

export default Home;
