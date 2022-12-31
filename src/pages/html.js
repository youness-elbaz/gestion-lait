import React from "react";
import Header from '../compenant/Header'
import Footer from '../compenant/Footer';
import MainContent from "../compenant/MainContent";



const Html = () => {
  return (
    <>
      <Header/>
      <MainContent  NamePage={"HTML Page"}   Desagner={"Hajar elbaz"}/>
    
      <Footer/>
    
    </>
  );
};

export default Html;