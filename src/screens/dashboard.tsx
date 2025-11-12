'use client';

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Box } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <Box bg="blue.500" minH="200vh" w="100%">
      <Header />
      <Box 
        minH="80vh" 
        w="100%" 
        bg="blue.500" 
        pt={{ base: "80px", md: "100px" }}
      >
        Dashboard Content
      </Box>
      {/* <Navbar />
      <Footer /> */}
    </Box>
  )
};