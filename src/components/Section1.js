import { Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import table from "../asserts/images/table.svg";

const Section1 = () => {
  return (
    <>
      <Stack
        direction={{ lg: "row", md: "row", base: "column" }}
        width={"100%"}
        px={{ lg: "20", base: "7" }}
        justifyContent={"space-evenly"}
        pt={{ lg: "10", base: "3" }}
      >
        <Stack
          direction={"column"}
          width={{ lg: "50%", md: "50%", base: "100%" }}
          py={{ lg: "20", md: "32" }}
          data-aos="fade-right"
        >
          <Heading
            color={"#0AA1DD"}
            fontSize={{ lg: "lg", md: "lg" }}
            fontWeight={"bold"}
          >
            Something about consultation goes here
          </Heading>
          <Text
            fontSize={{ lg: "sm", md: "xs", base: "x-small" }}
            textAlign={"justify"}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
            pretium integer leo nibh nulla. Aenean lacus, non cursus ultrices
            rhoncus mauris justo. Tempus sit lobortis nibh curabitur urna,
            cursus non vivamus at. Malesuada felis, neque risus, sed sapien, ac,
            ultricies commodo. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Tellus pretium integer leo nibh nulla. Aenean
            lacus, non cursus ultrices rhoncus mauris justo. Tempus sit lobortis
            nibh curabitur urna, cursus non vivamus at. Malesuada felis, neque
            risus, sed sapien, ac, ultricies commodo.
          </Text>
        </Stack>
        <Stack
          data-aos="fade-up-left"
          width={{ lg: "40%", md: "50%", base: "100%" }}
          height={{ lg: "unset", md: "unset", base: "300px" }}
        >
          <Image
            height={{ lg: "352px", base: "400px" }}
            width={{ lg: "691px", base: "800px" }}
            src={table}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default Section1;
