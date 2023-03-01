import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Input,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function Last() {
  return (
    <>
      <Box>
        <Container maxW={"100%"} bg={"gray.50"} py={"14"} mt={"65px"}>
          <Flex justifyContent={'space-around'} flexDirection={{base:"column",lg:"row"}}>
            <Box w={"50%"}>
              <Heading fontWeight={'semibold'}>Join our Newletter</Heading>
              <Text fontSize={"18px"} lineHeight="7" pt={"5"}>
                Dont miss any more news and subscribe to our newsletter today.
              </Text>
            </Box>

            <HStack>
              <Input placeholder="Email"  />
              <Button width={150}>Subscribe</Button>
            </HStack>
          </Flex>
        </Container>
      </Box>





    </>
  );
}
