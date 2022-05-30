import { Button, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Bounce from "react-reveal/Bounce";
// import bgimg from "../asserts/images/bgimg.svg";
import bgimg from "../asserts/images/bg.mp4";
// import bgimg from "../asserts/images/rabia.mp4";
import "../pages/ImageProperty.css";

const BookConsultation = () => {
  return (
    <Stack
      direction={{ lg: "row", md: "row", base: "column" }}
      width={"100%"}
      px={{ lg: "20", md: "14", base: "7" }}
      pt={"8"}
    >
      <Stack
        width={{ lg: "50%", base: "100%" }}
        gap={"4"}
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <Heading
          display={{ lg: "block", md: "block", base: "none" }}
          color={"#0AA1DD"}
          fontSize={{ lg: "3xl", base: "lg" }}
        >
          Lorem ipsum dolor sit amet consteur
          <br /> pim moasaic ipsum amer
        </Heading>
        <Heading
          display={{ lg: "none", md: "none", base: "block" }}
          color={"#0AA1DD"}
          fontSize={{ lg: "3xl", base: "lg" }}
        >
          Lorem ipsum dolor sit amet consteurpim moasaic ipsum amer
        </Heading>

        <Text
          fontSize={{ lg: "unset", md: "unset", base: "sm" }}
          color={"#828282"}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maecenas
          at nec <br /> dolor ac. Tortor luctus sit laoreet egestas.
        </Text>
        <Button
          color={"white"}
          size={{ lg: "md", base: "sm" }}
          bgColor={"#0AA1DD"}
          width={"max-content"}
        >
          Book consultation
        </Button>
      </Stack>
      <Stack
        width={{ lg: "50%", base: "100%" }}

        // data-aos="flip-left"
        // data-aos-easing="ease-out-cubic"
        // data-aos-duration="2000"
        // className="rotate-img"
      >
        <video
          autoPlay
          muted
          loop
          // style={{
          //   position: "absolute",
          //   width: "100%",
          //   left: "50%",
          //   top: "50%",
          //   height: "100%",
          //   objectFit: "cover",
          //   transform: "translate(-50% , 50%)",
          //   zIndex: "-1",
          // }}
          // id="myVideo"
        >
          <source src={bgimg} type="bg/mp4" />
          Your browser does not support HTML5 video.
        </video>
        {/* <Image height={"272.69px;"} src={bgimg} /> */}
      </Stack>
    </Stack>
  );
};

export default BookConsultation;
