import { StarIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineStar } from 'react-icons/Ai';
import { BiRocket } from 'react-icons/Bi';
import { RiMoonFoggyLine } from 'react-icons/Ri';
import { FaPaintBrush } from 'react-icons/Fa';
import { IoIosCode } from 'react-icons/Io';
import { MdOutlineAccessible } from 'react-icons/Md';


export default function Feature() {
  return (
    <Box>
      {/* top header */}
      <Container maxW={800}>
      <Box textAlign={"center"}  mt="70px" as="section">
        <Text color={"blue.500"} fontWeight="bold">
          Features
        </Text>
        <Heading fontWeight={"semibold"}>What you can expect?</Heading>
        <Text fontSize={"20"} py="3px">
          A bundle of 220+ ready-to-use, responsive and accessible components
          with clever structured sourcecode files.
        </Text>
      </Box>
      </Container>
      {/* 6 features */}
      <Container maxW={1050} mt={10}>
      <Box>
      <SimpleGrid columns={2} spacing={10}>
        {/* feature 1 */}
        <HStack>
          {/* <StarIcon w={10} h="10" /> */}
          <Box color={'blue.500'}>
          <AiOutlineStar size={50}  />
          </Box>
          <Box>
            <Heading fontSize={"16"}>220+ Components</Heading>
            <Text>
              All our components come with a light and dark color mode by
              default.
            </Text>
          </Box>
        </HStack>
        {/* feature 2 */}
        <HStack>
        <Box color={'blue.500'}>
          <BiRocket  size={50} />
          </Box>
          <Box>
            <Heading fontSize={"16"}>Themable</Heading>
            <Text>
            Your style. Your brand. Customize the components as you need them. It's that simple.
            </Text>
          </Box>
        </HStack>

         {/* feature 3 */}
         <HStack>
         <Box color={'blue.500'}>
          <RiMoonFoggyLine size={50} /></Box>
          <Box>
            <Heading fontSize={"16"}>Light & Dark</Heading>
            <Text>
            All our components come with a light and dark color mode by default.            </Text>
          </Box>
        </HStack>
        {/* feature 4 */}
        <HStack>
        <Box color={'blue.500'}>
          <FaPaintBrush  size={50} /></Box>
          <Box>
            <Heading fontSize={"16"}>Themable</Heading>
            <Text>
            Your style. Your brand. Customize the components as you need them. It's that simple.
            </Text>
          </Box>
        </HStack>

         {/* feature 5 */}
         <HStack>
         <Box color={'blue.500'}>
            <IoIosCode size={50} />
            </Box>
          
          <Box>
            <Heading fontSize={"16"}>Developer Friendly</Heading>
            <Text>
            Components are semantically divided into several files for better developer experience.         </Text>
          </Box>
        </HStack>
        {/* feature 6 */}
        <HStack>
          <Box color={'blue.500'}>
          <MdOutlineAccessible  size={50} />
          </Box>
          
          <Box>
            <Heading fontSize={"16"}>Accessibile</Heading>
            <Text>
            Accessibility first. That's why we pay attention to accessibility right from the start            </Text>
          </Box>
        </HStack>
        </SimpleGrid>


      </Box>
      </Container>

    </Box>
  );
}
