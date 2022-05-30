import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const AllContent = () => {
  return (
    <>
      <Stack
        textAlign={"center"}
        px={{ lg: "20", md: "14", base: "7" }}
        pt={"3"}
        pb={"3"}
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <Heading fontSize={{ lg: "lg", base: "lg" }} color={"#0AA1DD"}>
          Something goes here
        </Heading>
        <Text
          display={{ lg: "block", md: "block", base: "none" }}
          fontSize={{ lg: "sm", base: "xx-small" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
          pretium integer leo nibh nulla. Aenean lacus, non cursus <br />
          ultrices rhoncus mauris justo. Tempus sit lobortis nibh curabitur
          urna, cursus non vivamus at. Malesuada felis, neque <br />
          risus, sed sapien, ac, ultricies commodo.
        </Text>
        <Text
          display={{ lg: "none", md: "none", base: "block" }}
          fontSize={{ lg: "sm", base: "xx-small" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
          pretium integer leo nibh nulla. Aenean lacus, non cursus ultrices
          rhoncus mauris justo. Tempus sit lobortis nibh curabitur urna, cursus
          non vivamus at. Malesuada felis, neque risus, sed sapien, ac,
          ultricies commodo.
        </Text>
      </Stack>
    </>
  );
};

export default AllContent;
