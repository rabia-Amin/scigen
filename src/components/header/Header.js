import React from "react";
import { Button, Image, Stack, Text } from "@chakra-ui/react";
import logo from "../../asserts/images/logo.svg";
import DrawerHeader from "./DrawerHeader";
const Header = () => {
  return (
    <>
      <Stack
        direction={"row"}
        px={{ lg: "20", md: "14", base: "7" }}
        alignItems={{ lg: "end", md: "end", base: "center" }}
        py={"3"}
      >
        <Stack width={{ lg: "50%", md: "30%", base: "80%" }}>
          <Image
            height={{ lg: "8vh", md: "8vh", base: "12vh" }}
            width={{ lg: "7vw", md: "15vw", base: "15vw" }}
            src={logo}
          />
        </Stack>
        <Stack
          display={{ lg: "none", md: "none", base: "block" }}
          width={{ lg: "50%", md: "30%", base: "20%" }}
        >
          <DrawerHeader />
        </Stack>
        <Stack
          width={{ lg: "50%", md: "70%" }}
          direction={"row"}
          justifyContent={"space-around"}
          display={{ lg: "flex", md: "flex", base: "none" }}
        >
          <Text color={"#0AA1DD"} fontWeight={"700"} fontSize={"sm"}>
            Lab procedures
          </Text>
          <Text color={"#0AA1DD"} fontWeight={"700"} fontSize={"sm"}>
            Health topics
          </Text>
          <Button
            color={"white"}
            bgColor={"#0AA1DD"}
            size="sm"
            width={"max-content"}
          >
            Book consultation
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default Header;
