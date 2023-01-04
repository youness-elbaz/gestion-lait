import React from "react";
import Header from "../compenant/Header";
import Footer from "../compenant/Footer";
import MainContent from "../compenant/MainContent";
import { Helmet } from 'react-helmet-async';

const Css = () => {
  return (
    <>
    <Helmet>
        <title>Page css</title>
      
      </Helmet>
      <Header />

      <MainContent  NamePage={"CSS Page"} Desagner={"Elbaz loqman"}/>
      <Footer />
    </>
  );
};

export default Css;
