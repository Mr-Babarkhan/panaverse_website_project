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
        <Container maxW={1100} bg={"blue.50"} p={"30px"} mt={"65px"}>
          <HStack>
            <Box w={"50%"}>
              <Heading>Join our Newletter</Heading>
              <Text fontSize={"18px"} lineHeight="7" pt={"5"}>
                Dont miss any more news and subscribe to our newsletter today.
              </Text>
            </Box>

            <Flex flex={1} alignSelf={"flex-start"}>
              <Input placeholder="Email" width={"50%"} />
              <Button ml={2}>Subscribe</Button>
            </Flex>
          </HStack>
        </Container>
      </Box>

      <Container maxW={1100} mt="50">
        {/* right */}

        <Box width={"40%"}>
          <Text color={"blue.500"} fontWeight="bold">
            Support
          </Text>
          <Heading fontWeight={"semibold"} mt="5">
            FAQS
          </Heading>
          <Text fontSize={"20"} py="3px" alignItems={"center"} mt="2">
            Everything you need to know about the product and billing. For
            questions about licensing, please see our licensing page.
          </Text>
        </Box>

        {/* left */}

        <Flex flexDirection={"column"} float="right" mt="-180px" mr={"120px"}>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  isActive={isOpen}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  {isOpen ? "Close" : "Why I choose PIAIC ?"}
                </MenuButton>
                <MenuList>
                  <Text>hhrfbh</Text>
                </MenuList>
              </>
            )}
          </Menu>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  isActive={isOpen}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  mt="10px"
                >
                  {isOpen ? "Close" : "Why I choose PIAIC ?"}
                </MenuButton>
                <MenuList>
                  <Text>hhrfbh</Text>
                </MenuList>
              </>
            )}
          </Menu>

          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  isActive={isOpen}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  mt="10px"
                >
                  {isOpen ? "Close" : "Why I choose PIAIC ?"}
                </MenuButton>
                <MenuList>
                  <Text>hhrfbh</Text>
                </MenuList>
              </>
            )}
          </Menu>
          <Center>
          <Button  size='sm' width={'40%'} mt='15'>
    Show more
  </Button></Center>
        </Flex>
      </Container>
    </>
  );
}
