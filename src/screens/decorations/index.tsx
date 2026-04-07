"use client";

import { Box, Heading } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";
import Wrapper from "@/components/common/Wrapper";
import PortfolioGrid from "@/components/hero/PortfolioGrid";
import { DECORATION_ITEMS } from "@/constants";
import { fadeInUp } from "@/utils";

const DECORATION_ITEMS_DISPLAY = DECORATION_ITEMS.map((asset, index) => ({
  alt: `Kaulu Concept decoration piece ${index + 1}`,
  asset,
}));

export default function Decorations() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Wrapper>
      <Box mb={16}>
        <motion.div
          {...fadeInUp({ shouldReduceMotion })}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            color="blackAlpha.900"
            lineHeight="shorter"
            mb={4}
          >
            Decorations
          </Heading>
        </motion.div>

        <PortfolioGrid items={DECORATION_ITEMS_DISPLAY} />
      </Box>
    </Wrapper>
  );
}

