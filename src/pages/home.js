import React from "react";
import Header from '../compenant/Header'
import Footer from '../compenant/Footer';
import MainContent from '../compenant/MainContent';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
    <Helmet>
        <title>Page Home</title>
      
      </Helmet>
    <Header/>
    <MainContent  NamePage={"Home Page"} Desagner="ELbaz Youness" />
    
      
      <Footer/>
      
    
    </>
  );
};

export default Home;
