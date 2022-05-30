import { Image, Stack } from "@chakra-ui/react";
import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Section1 from "../components/Section1";
import AboutHealth from "../pages/AboutHealth";
import AllContent from "../pages/AllContent";
import BookConsultation from "../pages/BookConsultation";
import Cards from "../pages/Cards";
import Content from "../pages/Content";
import Form from "../pages/Form";
import TableData from "../pages/TableData";
import Topics from "../pages/Topics";
// import bgimg from "../asserts/images/rabia.mp4";
import bgimg from "../asserts/images/bg.mp4";
import "../pages/ImageProperty.css";

const MainRoutes = () => {
  return (
    <>
      <Stack overflowX={"hidden"} overflowY={"hidden"}>
        <video
          autoPlay
          muted
          loop
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            padding: "0",
            zIndex: "-1",
            opacity: "0.2",
          }}
        >
          <source src={bgimg} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <Header />
        <BookConsultation />
        <Topics />
        <Content />
        <TableData />
        <Section1 />
        <Form />
        <AboutHealth />
        <Cards />
        <AllContent />
        <Footer />
      </Stack>
    </>
  );
};

export default MainRoutes;
