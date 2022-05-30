import { Button, Heading, Image, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";
import btn from "../asserts/images/btn.svg";

const Form = () => {
  return (
    <>
      <Stack
        px={{ lg: "20", md: "12", base: "7" }}
        pt={{ lg: "16", base: "3" }}
      >
        <Stack
          data-aos="fade-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="1500"
          data-aos-offset="0"
          textAlign={"center"}
          bgColor={"#0AA1DD"}
          py={"20"}
          px={"5"}
          borderRadius={"10px"}
        >
          <Heading fontSize={{ lg: "2xl", base: "lg" }} color={"white"}>
            Book a consultation
          </Heading>
          <Text color={"white"} fontSize={{ lg: "sm", base: "x-small" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
            pretium integer leo nibh nulla.
          </Text>
          <Stack alignItems={"center"} pt={"3"}>
            <Input
              width={{ lg: "50vw", base: "60vw" }}
              bgColor={"#FDFEFF"}
              opacity={"0.3"}
              variant="filled"
              color={"white"}
              fontSize={{ lg: "sm", base: "xs" }}
              placeholder="Enter Email Address"
            />
          </Stack>
          <Stack alignItems={"center"} pt={"3"}>
            <Button
              color={"#0AA1DD"}
              bgColor={"white"}
              fontSize={{ lg: "unset", base: "sm" }}
              width={"max-content"}
            >
              Book consultation <Image height={"2vh"} width={"2vw"} src={btn} />
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Form;
