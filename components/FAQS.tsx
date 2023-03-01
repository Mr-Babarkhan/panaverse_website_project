import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Flex,
  Button,
} from "@chakra-ui/react";
import React from "react";

export default function FAQS() {
  return (
    <>
      <Box>
        <Container maxW={1200} my="16">
          <Flex flexDirection={{base:"column",lg:"row"}}>
            {/* left  */}
            <Box flex={2}>
              <Box textAlign={"left"}>
                <Text color={"blue.500"} fontWeight="bold">
                  Support
                </Text>
                <Heading fontWeight={"semibold"}>FAQS</Heading>
                <Text fontSize={"20"} py="3">
                  Everything you need to know about the product and billing. For
                  questions about licensing, please see our licensing page
                </Text>
              </Box>
            </Box>

            {/* right */}
            <Box flex={3} ml='5'>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Why I choose PIAIC
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        How can i apply 
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Box textAlign={"center"} mt="5">
                <Button>Show more</Button>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
