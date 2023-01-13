import React, { useEffect } from "react";
import Header from "../compenant/Header";
import Footer from "../compenant/Footer";
import MainContent from "../compenant/MainContent";
import { Helmet } from "react-helmet-async";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../FireBase/Config";

import { useNavigate } from "react-router-dom";
const Genisses = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  },[user]);
  return (
    <>
      <Helmet>
        <title>Page Traitement Des Genisses</title>
      </Helmet>
      <Header />

      <MainContent
        NamePage={"Page Traitement Des Genisses"}
        Desagner={"Elbaz loqman"}
      />
      <Footer />
    </>
  );
};

export default Genisses;
