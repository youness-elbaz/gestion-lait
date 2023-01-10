import React from "react";
import Header from "../compenant/Header";
import Footer from "../compenant/Footer";
import MainContent from "../compenant/MainContent";
import { Helmet } from 'react-helmet-async';

const Genisses = () => {
  return (
    <>
    <Helmet>
        <title>Page Traitement Des Genisses</title>
      
      </Helmet>
      <Header />

      <MainContent  NamePage={"Page Traitement Des Genisses"} Desagner={"Elbaz loqman"}/>
      <Footer />
    </>
  );
};

export default Genisses;
