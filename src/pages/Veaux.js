import React, { useEffect } from "react";
import Header from '../compenant/Header'
import Footer from '../compenant/Footer';
import MainContent from "../compenant/MainContent";
import { Helmet } from 'react-helmet-async';


import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../FireBase/Config";

import { useNavigate } from "react-router-dom";


const Veaux = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => { 
    if (!user) {
      navigate("/");
    }


   })


  return (
    <>
    <Helmet>
        <title>Page Traitement des Veaux</title>
      
      </Helmet>
      <Header/>
      <MainContent  NamePage={"Traitement des Veaux"} Desagner={" kaabi aicha "}/>
    
      <Footer/>
    
    </>
  );
};

export default Veaux;