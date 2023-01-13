import React, { useEffect } from "react";
import Header from '../compenant/Header'
import Footer from '../compenant/Footer';
import MainContent from "../compenant/MainContent";
import { Helmet } from 'react-helmet-async';

import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../FireBase/Config";

import { useNavigate } from "react-router-dom";




const Collect = () => {
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
        <title>Page Traitement Collect du lait</title>
      
      </Helmet>
      <Header/>
      <MainContent  NamePage={"Page Traitement Collect du lait"}   Desagner={"elbaz youness"}/>
    
      <Footer/>
    
    </>
  );
};

export default Collect;