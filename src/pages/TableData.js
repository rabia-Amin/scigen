import {
  Heading,
  HStack,
  Image,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import arrow from "../asserts/images/arrow.svg";
const TableData = () => {
  return (
    <>
      <Stack px={{ lg: "20", md: "14", base: "7" }} pt={{ lg: "2", base: "0" }}>
        <Heading
          fontSize={{ lg: "lg", md: "lg", base: "sm" }}
          color={"#0AA1DD"}
        >
          Lorem ipsum dolor sit amet consteur
        </Heading>

        <Text fontSize={{ lg: "sm", base: "sm" }} color={"#828282"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
          pretium integer leo nibh nulla.
        </Text>

        <TableContainer
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <Table variant="striped">
            <Thead>
              <Tr colorScheme={"#0AA1DD"}>
                <Th color={"#333333"}>Procedure name</Th>
                <Th>Growth Factor (pg/ml)</Th>
                <Th>XoGlo® (5 ml)</Th>
                <Th>XoGlo® Pro</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>AR</Td>
                <Td>Lorem ipsum dolor</Td>
                <Td>5</Td>
                <Td>5</Td>
                <Td color={"#0AA1DD"} fontWeight={"semibold"}>
                  <HStack>
                    <Stack>
                      <Text>Book procedure</Text>
                    </Stack>
                    <Stack>
                      <Image width={"1vw"} height={"2vh"} src={arrow} />
                    </Stack>
                  </HStack>
                </Td>
              </Tr>
              <Tr>
                <Td>AR</Td>
                <Td>Lorem ipsum dolor</Td>
                <Td>5</Td>
                <Td>5</Td>
                <Td color={"#0AA1DD"} fontWeight={"semibold"}>
                  <HStack>
                    <Stack>
                      <Text>Book procedure</Text>
                    </Stack>
                    <Stack>
                      <Image width={"1vw"} height={"2vh"} src={arrow} />
                    </Stack>
                  </HStack>
                </Td>
              </Tr>
              <Tr>
                <Td>AR</Td>
                <Td>Lorem ipsum dolor</Td>
                <Td>5</Td>
                <Td>5</Td>
                <Td color={"#0AA1DD"} fontWeight={"semibold"}>
                  <HStack>
                    <Stack>
                      <Text>Book procedure</Text>
                    </Stack>
                    <Stack>
                      <Image width={"1vw"} height={"2vh"} src={arrow} />
                    </Stack>
                  </HStack>
                </Td>
              </Tr>
              <Tr>
                <Td>AR</Td>
                <Td>Lorem ipsum dolor</Td>
                <Td>5</Td>
                <Td>5</Td>
                <Td color={"#0AA1DD"} fontWeight={"semibold"}>
                  <HStack>
                    <Stack>
                      <Text>Book procedure</Text>
                    </Stack>
                    <Stack>
                      <Image width={"1vw"} height={"2vh"} src={arrow} />
                    </Stack>
                  </HStack>
                </Td>
              </Tr>
              <Tr>
                <Td>AR</Td>
                <Td>Lorem ipsum dolor</Td>
                <Td>5</Td>
                <Td>5</Td>
                <Td color={"#0AA1DD"} fontWeight={"semibold"}>
                  <HStack>
                    <Stack>
                      <Text>Book procedure</Text>
                    </Stack>
                    <Stack>
                      <Image width={"1vw"} height={"2vh"} src={arrow} />
                    </Stack>
                  </HStack>
                </Td>
              </Tr>
              <Tr>
                <Td>AR</Td>
                <Td>Lorem ipsum dolor</Td>
                <Td>5</Td>
                <Td>5</Td>
                <Td color={"#0AA1DD"} fontWeight={"semibold"}>
                  <HStack>
                    <Stack>
                      <Text>Book procedure</Text>
                    </Stack>
                    <Stack>
                      <Image width={"1vw"} height={"2vh"} src={arrow} />
                    </Stack>
                  </HStack>
                </Td>
              </Tr>
              <Tr>
                <Td>AR</Td>
                <Td>Lorem ipsum dolor</Td>
                <Td>5</Td>
                <Td>5</Td>
                <Td color={"#0AA1DD"} fontWeight={"semibold"}>
                  <HStack>
                    <Stack>
                      <Text>Book procedure</Text>
                    </Stack>
                    <Stack>
                      <Image width={"1vw"} height={"2vh"} src={arrow} />
                    </Stack>
                  </HStack>
                </Td>
              </Tr>
              <Tr>
                <Td>AR</Td>
                <Td>Lorem ipsum dolor</Td>
                <Td>5</Td>
                <Td>5</Td>
                <Td color={"#0AA1DD"} fontWeight={"semibold"}>
                  <HStack>
                    <Stack>
                      <Text>Book procedure</Text>
                    </Stack>
                    <Stack>
                      <Image width={"1vw"} height={"2vh"} src={arrow} />
                    </Stack>
                  </HStack>
                </Td>
              </Tr>
              <Tr>
                <Td>AR</Td>
                <Td>Lorem ipsum dolor</Td>
                <Td>5</Td>
                <Td>5</Td>
                <Td color={"#0AA1DD"} fontWeight={"semibold"}>
                  <HStack>
                    <Stack>
                      <Text>Book procedure</Text>
                    </Stack>
                    <Stack>
                      <Image width={"1vw"} height={"2vh"} src={arrow} />
                    </Stack>
                  </HStack>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
    </>
  );
};

export default TableData;
