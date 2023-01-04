import React from "react";
import Header from '../compenant/Header'
import Footer from '../compenant/Footer';
import MainContent from "../compenant/MainContent";
import { Helmet } from 'react-helmet-async';


const Html = () => {
  return (
    <>
    <Helmet>
        <title>Page Html</title>
      
      </Helmet>
      <Header/>
      <MainContent  NamePage={"HTML Page"}   Desagner={"Hajar elbaz"}/>
    
      <Footer/>
    
    </>
  );
};

export default Html;