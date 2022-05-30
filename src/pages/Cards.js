import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import faceimg from "../asserts/images/faceimg.svg";
import doctor from "../asserts/images/doctor.svg";
import hands from "../asserts/images/hands.svg";
import food from "../asserts/images/food.svg";
import dct from "../asserts/images/dct.svg";
import earth from "../asserts/images/earth.svg";
import oil from "../asserts/images/oil.svg";
const Cards = () => {
  return (
    <>
      <Stack
        direction={{ lg: "row", base: "column" }}
        justifyContent={"space-evenly"}
        px={{ lg: "20", md: "14", base: "7" }}
      >
        <Stack width={{ lg: "30%", base: "100%" }}>
          <Stack
            height={{ lg: "40vh", md: "40vh", base: "60vh" }}
            borderRadius={"30px"}
            bgImage={faceimg}
            justifyContent={"end"}
            p={"5"}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <Heading fontSize={"lg"} color={"white"}>
              Topic title goes here
            </Heading>
            <Text color={"white"} fontSize={{ lg: "sm", md: "xs" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ... See
              more
            </Text>
          </Stack>
          <Stack
            height={{ lg: "40vh", md: "40vh", base: "60vh" }}
            borderRadius={"30px"}
            bgImage={earth}
            justifyContent={"end"}
            p={"5"}
            data-aos="zoom-in-up"
          >
            <Heading fontSize={"lg"} color={"white"}>
              Topic title goes here
            </Heading>
            <Text color={"white"} fontSize={"sm"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ... See
              more
            </Text>
          </Stack>
        </Stack>
        <Stack width={{ lg: "30%", base: "100%" }}>
          <Stack
            height={{ lg: "26vh", base: "40vh" }}
            borderRadius={"30px"}
            justifyContent={"end"}
            bgImage={doctor}
            p={"5"}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <Heading fontSize={"lg"} color={"white"}>
              Topic title goes here
            </Heading>
            <Text color={"white"} fontSize={"sm"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ... See
              more
            </Text>
          </Stack>
          <Stack
            height={{ lg: "26vh", md: "40vh", base: "40vh" }}
            borderRadius={"30px"}
            justifyContent={"end"}
            bgImage={hands}
            p={"5"}
            data-aos="flip-down"
          >
            <Heading fontSize={"lg"} color={"white"}>
              Topic title goes here
            </Heading>
            <Text color={"white"} fontSize={"sm"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ... See
              more
            </Text>
          </Stack>
          <Stack
            height={{ lg: "26vh", md: "40vh", base: "40vh" }}
            borderRadius={"30px"}
            bgImage={oil}
            justifyContent={"end"}
            p={"5"}
            data-aos="zoom-out-up"
          >
            <Heading fontSize={"lg"} color={"white"}>
              Topic title goes here
            </Heading>
            <Text color={"white"} fontSize={"sm"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ... See
              more
            </Text>
          </Stack>
        </Stack>
        <Stack width={{ lg: "30%", base: "100%" }}>
          <Stack
            height={{ lg: "40vh", md: "40vh", base: "60vh" }}
            borderRadius={"30px"}
            bgImage={food}
            justifyContent={"end"}
            p={"5"}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <Heading fontSize={"lg"} color={"white"}>
              Topic title goes here
            </Heading>
            <Text color={"white"} fontSize={"sm"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ... See
              more
            </Text>
          </Stack>
          <Stack
            height={{ lg: "40vh", md: "40vh", base: "60vh" }}
            borderRadius={"30px"}
            bgImage={dct}
            justifyContent={"end"}
            p={"5"}
            data-aos="zoom-in-down"
          >
            <Heading fontSize={"lg"} color={"white"}>
              Topic title goes here
            </Heading>
            <Text color={"white"} fontSize={"sm"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ... See
              more
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Cards;
