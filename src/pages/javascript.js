import React from "react";
import Header from '../compenant/Header'
import Footer from '../compenant/Footer';
import MainContent from "../compenant/MainContent";
import { Helmet } from 'react-helmet-async';

const JavaScript = () => {
  return (
    <>
    <Helmet>
        <title>Page css</title>
      
      </Helmet>
      <Header/>
      <MainContent  NamePage={"JAVASCRIPT Page"} Desagner={" kaabi aicha "}/>
    
      <Footer/>
    
    </>
  );
};

export default JavaScript;