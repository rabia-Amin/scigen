import {
  Center,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import arrow from "../asserts/images/arrow.svg";
import Slide from "react-reveal/Slide";

const Topics = () => {
  return (
    <>
      <Stack
        direction={{ lg: "row", md: "row", base: "column" }}
        px={{ lg: "20", md: "14", base: "7" }}
        justifyContent={"space-between"}
        py={{ lg: "5", md: "5", base: "7" }}
        gap={{ lg: "none", md: "none", base: "5" }}
        pt={"20"}
      >
        <Stack
          direction={"row"}
          textAlign={{ lg: "none", md: "none", base: "center" }}
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
        >
          <Stack
            height={{ lg: "100px", md: "150px", base: "0" }}
            borderLeft={"5px solid #0AA1DD "}
            borderColor={"#0AA1DD"}
          >
            <Divider orientation="vertical" />
          </Stack>
          <Stack pl={"2"}>
            <HStack justifyContent={"space-between"}>
              <Heading color={"#0AA1DD"} fontSize={"lg"}>
                Health topics
              </Heading>
              <Image height={"2vh"} width={"2vw"} src={arrow} />
            </HStack>
            <Stack>
              <Text fontSize={{ lg: "sm", base: "xs" }}>
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit. Cras maecenas at nec <br /> dolor ac.
                Tortor luctus sit laoreet egestas.
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction={"row"} data-aos="flip-left">
          <Stack
            height={{ lg: "100px", md: "150px", base: "0" }}
            borderLeft={"5px solid #0AA1DD "}
            borderColor={"#0AA1DD"}
          >
            <Divider orientation="vertical" />
          </Stack>
          <Stack pl={"2"}>
            <HStack justifyContent={"space-between"}>
              <Heading fontSize={"lg"} color={"#0AA1DD"}>
                Lab procedures
              </Heading>
              <Image height={"2vh"} width={"2vw"} src={arrow} />
            </HStack>
            <Stack>
              <Text fontSize={{ lg: "sm", base: "xs" }}>
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit. Cras maecenas at nec <br /> dolor ac.
                Tortor luctus sit laoreet egestas.
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction={"row"} data-aos="fade-left">
          <Stack
            height={{ lg: "100px", md: "150px", base: "0" }}
            borderLeft={"5px solid #0AA1DD"}
            borderColor={"#0AA1DD"}
          >
            <Divider orientation="vertical" />
          </Stack>
          <Stack pl={"2"}>
            <HStack justifyContent={"space-between"}>
              <Heading fontSize={{ lg: "lg", md: "md" }} color={"#0AA1DD"}>
                Book consultation
              </Heading>
              <Image height={"2vh"} width={"2vw"} src={arrow} />
            </HStack>
            <Stack>
              <Text fontSize={{ lg: "sm", base: "xs" }}>
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit. Cras maecenas at nec <br /> dolor ac.
                Tortor luctus sit laoreet egestas.
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Topics;
