import React from "react";
import Header from '../compenant/Header'
import Footer from '../compenant/Footer';
import MainContent from "../compenant/MainContent";
import { Helmet } from 'react-helmet-async';


const Vaches = () => {
  return (
    <>
    <Helmet>
        <title>Page Traitement Des Vaches</title>
      
      </Helmet>
      <Header/>
      <MainContent  NamePage={"Page Traitement Des Vaches"}   Desagner={"Hajar elbaz"}/>
    
      <Footer/>
    
    </>
  );
};

export default Vaches;