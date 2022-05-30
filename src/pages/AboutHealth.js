import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const AboutHealth = () => {
  return (
    <>
      <Stack
        textAlign={"center"}
        px={{ lg: "20", md: "14", base: "7" }}
        py={"10"}
        data-aos="flip-up"
      >
        <Heading fontSize={"lg"} color={"#0AA1DD"}>
          Something about health articles goes here
        </Heading>
        <Text fontSize={{ lg: "sm", md: "xs", base: "xx-small" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
          pretium integer leo nibh nulla. Aenean lacus, non <br /> cursus
          ultrices rhoncus mauris justo. Tempus sit lobortis nibh curabitur
          urna, cursus non vivamus at. Malesuada
          <br /> felis, neque risus, sed sapien, ac, ultricies commodo.
        </Text>
      </Stack>
    </>
  );
};

export default AboutHealth;
