"use client";
import CTA from "@/components/cta";
import Feature from "@/components/features/feature";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Highlight from "@/components/highlight";
import Last from "@/components/last";
import TopContainer from "@/components/topContainer";
import {
  Box,Image,
  List,
  ListItem,
  HStack,
  Button,
  Flex,
} from "@chakra-ui/react";
export default function Home() {
  return (
    <>
      <Header />
      <Box as="main">
      <TopContainer />
      <Feature/>
      </Box>
      <CTA/>
      <Highlight/>
      <Last/>
      <Footer/>
    </>
  );
}
