import React from "react";
import {
  Box,
  Heading,
  Text,
  HStack,
  Image,
  Button,
  Flex,
  Link,
  Hide,
} from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
export default function TopContainer() {
  return (
    <>
      <Box mt={"10px"}>
        {/* left  */}
        <HStack
          backgroundImage={"images/back.webp"}
          backgroundSize="contain"
          py={"100px"}
          backgroundAttachment="fixed"
        >
          <Box w={{base:"1000%",lg:"50%"}} color="white" pl={{base:"10",lg:"44"}}>
            <Heading fontSize={60}>Build your next idea even Faster</Heading>
            <Text>
              One year panaverse dao Earn as you learn program. Consolidating
              Web 3.0,Metaverse , Artificial intelligence(Ai). Cloud edge and
              Ambient Computing/IoT Technologies
            </Text>
            <Button colorScheme={"blue"} mt="20px">
              Buy Now
            </Button>
            <Button
              colorScheme={"blue"}
              variant="outline"
              ml={"12px"}
              mt="20px"
            >
              View Components
            </Button>

            <Flex alignItems={"center"}>
              <AvatarGroup size="md" max={3} mt="15px">
                <Avatar name="Sir Zia khan" src="/images/sirzia.jpg" />
                <Avatar name="Sir Adil khan" src="/images/siradil.jpg" />
                <Avatar name="Babar" src="/images/my3.jpg" />
                <Avatar
                  name="Prosper Otemuyiwa"
                  src="https://bit.ly/prosper-baba"
                />
                <Avatar
                  name="Christian Nwamba"
                  src="https://bit.ly/code-beast"
                />
              </AvatarGroup>
              <Text mt={5} ml={3}>
                {" "}
                Created by :{" "}
                <Link
                  href="https://github.com/Mr-Babarkhan"
                  target={"_blank"}
                  color="blue.500"
                >
                  Babar khan
                </Link>
              </Text>
            </Flex>
          </Box>
          {/* right */}
        <Hide below="lg">
          <Box w={"50%"}>
            <Image src="/images/banner5.png" />
          </Box>
          </Hide>
        </HStack>
      </Box>
    </>
  );
}
