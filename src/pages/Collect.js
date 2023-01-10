import React from "react";
import Header from '../compenant/Header'
import Footer from '../compenant/Footer';
import MainContent from "../compenant/MainContent";
import { Helmet } from 'react-helmet-async';


const Collect = () => {
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