'use client';

import { Box, Divider, Text } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeInUp } from "@/utils";

export default function QuoteSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      {...fadeInUp({ shouldReduceMotion, delay: 1.2 })}
    >
      <Box
        mt={12}
        maxW="3xl"
        mx="auto"
        textAlign="center"
      >
        <Divider
          borderColor="gray.300"
          mb={8}
        />
        <Text
          fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
          fontStyle="italic"
          color="blackAlpha.800"
          lineHeight="tall"
          fontWeight="medium"
        >
          "Great architecture is the perfect balance between vision, function,
          and emotion."
        </Text>
        <Divider
          borderColor="gray.300"
          mt={8}
        />
      </Box>
    </motion.div>
  );
}