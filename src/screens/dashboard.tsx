'use client';

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Box } from "@chakra-ui/react";
import Banner from "@/components/hero/Banner";
import DashboardContent from "@/components/hero/DashboardContent";

export default function Dashboard() {
  return (
    <Box>
      <Header />
      <Banner />
      <DashboardContent />
      <Footer />
    </Box>
  )
};