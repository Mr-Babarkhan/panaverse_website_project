import { Box, Button, Center, Container, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { IoIosSpeedometer } from 'react-icons/Io';
import { FaCommentDollar } from 'react-icons/Fa';
import { AiOutlineSetting } from 'react-icons/Ai';

export default function Highlight() {
  return (
    <>
    <Container maxW={650}>
      <Box textAlign={"center"} mt="70px" as="section">
        <Text color={"blue.500"} fontWeight="bold">
          Highlights
        </Text>
        <Heading fontWeight={"semibold"}>Why Chakra UI Pro?</Heading>
        <Text fontSize={"20"} py="3px" alignItems={"center"}>
          Because these beautiful and responsive React components will help you
          realize your next idea in no time.
        </Text>
      </Box>
      </Container>

      {/* second container */}
      <Container maxW={1200} mt='35'>
        <SimpleGrid columns={{base:1,md:2,lg:4}} gap={5}>
        <Card align='center' >
  <CardHeader>
    <Center color='blue.500'>
<IoIosSpeedometer size={70} />
</Center>
    <Heading size='md' textAlign={'center'} mt='5'>Speed up your workflow</Heading>
  </CardHeader>
  <CardBody>
    <Text align={'center'}>Quickly put together different components to create an nearly infinite combination of user experiences.</Text>
  </CardBody>
  <CardFooter>
    <Button colorScheme='blue'>View here</Button>
  </CardFooter>
</Card>


<Card align='center' >
  <CardHeader>
    <Center color='blue.500'>
<FaCommentDollar size={70} />
</Center>
    <Heading size='md' textAlign={'center'} mt='5'>Save good money</Heading>
  </CardHeader>
  <CardBody>
    <Text align={'center'}>Quickly put together different components to create an nearly infinite combination of user experiences.</Text>
  </CardBody>
  <CardFooter>
    <Button colorScheme='blue'>View here</Button>
  </CardFooter>
</Card>

<Card align='center' >
  <CardHeader>
    <Center color='blue.500'>
<AiOutlineSetting size={70} />
</Center>
    <Heading size='md' textAlign={'center'} mt='5'>Easily customizable</Heading>
  </CardHeader>
  <CardBody>
    <Text align={'center'}>Quickly put together different components to create an nearly infinite combination of user experiences.</Text>
  </CardBody>
  <CardFooter>
    <Button colorScheme='blue'>View here</Button>
  </CardFooter>
</Card>

 <Card align='center' >
  <CardHeader>
    <Center color='blue.500'>
<IoIosSpeedometer size={70} />
</Center>
    <Heading size='md' textAlign={'center'} mt='5'>Support us</Heading>
  </CardHeader>
  <CardBody>
    <Text align={'center'}>Quickly put together different components to create an nearly infinite combination of user experiences.</Text>
  </CardBody>
  <CardFooter>
    <Button colorScheme='blue'>View here</Button>
  </CardFooter>
</Card>

        </SimpleGrid>
      </Container>
    </>
  );
}
