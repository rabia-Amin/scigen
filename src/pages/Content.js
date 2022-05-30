import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Slide from "react-reveal/Slide";

const Content = () => {
  return (
    <>
      <Stack
        textAlign={{ lg: "center", md: "center", base: "justify" }}
        py={{ lg: "20", base: "7" }}
        px={{ lg: "unset", base: "5" }}
      >
        <Slide top cascade>
          <Heading fontSize={{ lg: "lg", base: "sm" }} color={"#0AA1DD"}>
            Lorem ipsum dolor sit amet consteur
          </Heading>

          <Text
            display={{ lg: "block", md: "block", base: "none" }}
            fontSize={{ lg: "sm", md: "sm", base: "xx-small" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
            pretium integer leo nibh nulla. Aenean lacus, non <br /> cursus
            ultrices rhoncus mauris justo. Tempus sit lobortis nibh curabitur
            urna, cursus non vivamus at. Malesuada <br /> felis, neque risus,
            sed sapien, ac, ultricies commodo.
          </Text>
          <Text
            display={{ lg: "none", md: "none", base: "block" }}
            fontSize={"x-small"}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
            pretium integer leo nibh nulla. Aenean lacus, non cursus ultrices
            rhoncus mauris justo. Tempus sit lobortis nibh curabitur urna,
            cursus non vivamus at. Malesuada felis, neque risus, sed sapien, ac,
            ultricies commodo.
          </Text>
        </Slide>
      </Stack>
    </>
  );
};

export default Content;
