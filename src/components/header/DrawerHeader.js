import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
const DrawerHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        ref={btnRef}
        color={"white"}
        backgroundColor={"#0AA1DD"}
        onClick={onOpen}
        display={{ lg: "none", md: "none", base: "block" }}
        size={"sm"}
      >
        <AiOutlineMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody py={"14"}>
            <Text color={"#0AA1DD"} fontWeight={"bold"} fontSize={"md"}>
              Lab procedures
            </Text>
            <Text
              color={"#0AA1DD"}
              pt={"7"}
              fontWeight={"bold"}
              fontSize={"md"}
            >
              Health topics
            </Text>
            <Button
              marginTop={"7"}
              color={"white"}
              bgColor={"#0AA1DD"}
              size="sm"
              width={"max-content"}
            >
              Book consultation
            </Button>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="link" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerHeader;
