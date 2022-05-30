import { Divider, HStack, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import React from "react";
import facebookicon from "../../asserts/images/facebookicon.svg";
import twitter from "../../asserts/images/twitter.svg";
import linkid from "../../asserts/images/linkid.svg";
const Footer = () => {
  return (
    <>
      <Stack px={{ lg: "20", md: "14", base: "7" }} pb={"5"}>
        <Stack>
          <Divider />
        </Stack>
        <HStack>
          <Text fontSize={{ lg: "sm", base: "xx-small" }}>
            Copyright © SCI-GEN. All rights are reserved.
          </Text>
          <Spacer />
          <Stack
            direction={"row"}
            width={{ lg: "25%", md: "30%", base: "40%" }}
            justifyContent={"space-evenly"}
          >
            <Image
              height={"15.42px"}
              width={"29px"}
              marginTop={"8px"}
              src={facebookicon}
            />
            <Image height={"29px"} width={"15.42px"} src={twitter} />

            <Image height={"29px"} width={"15.42px"} src={linkid} />
          </Stack>
        </HStack>
      </Stack>
    </>
  );
};

export default Footer;
