'use client';

import { Box } from "@chakra-ui/react";
import Banner from "@/components/hero/Banner";
import DashboardContent from "@/components/hero/DashboardContent";

export default function Dashboard() {
  return (
    <>
      <Banner />
      <Box
        border="1px solid orange"
        maxW="80vw"
        w="100%"
        minH="60vh"
        h="max-content"
        justifySelf="center"
        alignContent="center"
        mb="60px"
      >
        <DashboardContent />
      </Box>
    </>
  );
}