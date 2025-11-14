'use client';

import { Box, Heading } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";
import Wrapper from "@/components/common/Wrapper";
import PortfolioGrid from "@/components/hero/PortfolioGrid";
import { PORTFOLIO_ITEMS } from "@/constants";
import { fadeInUp } from "@/utils";

export default function Portfolio() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Wrapper>
      <Box mb={16}>
        {/* Title Section */}
        <motion.div
          {...fadeInUp({ shouldReduceMotion })}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            color="blackAlpha.900"
            lineHeight="shorter"
            mb={4}
          >
            Our Portfolio
          </Heading>
        </motion.div>

        {/* Portfolio Grid */}
        <PortfolioGrid items={PORTFOLIO_ITEMS} />
      </Box>
    </Wrapper>
  );
}