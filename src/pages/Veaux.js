import React from "react";
import Header from '../compenant/Header'
import Footer from '../compenant/Footer';
import MainContent from "../compenant/MainContent";
import { Helmet } from 'react-helmet-async';

const Veaux = () => {
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