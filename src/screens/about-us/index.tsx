'use client';

import {
  Box,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";
import Wrapper from "@/components/common/Wrapper";
import AnimatedCardGrid from "@/components/common/AnimatedCardGrid";
import { motion, useReducedMotion } from "framer-motion";
import { CORE_VALUES } from "@/constants";
import { fadeInUp } from "@/utils";
import QuoteSection from "@/components/hero/QuoteSection";

export default function AboutUs() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Wrapper>
      <Stack spacing={12} mb={16}>
        {/* Title Section */}
        <Stack spacing={4} textAlign="center" maxW="3xl" mx="auto">
          <motion.div {...fadeInUp({ shouldReduceMotion })}>
            <Heading
              as="h1"
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              color="blackAlpha.900"
              lineHeight="shorter"
            >
              About Kaulu Concept
            </Heading>
          </motion.div>
        </Stack>

        {/* Intro Paragraph */}
        <motion.div
          {...fadeInUp({ shouldReduceMotion, delay: 0.2 })}
        >
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="blackAlpha.700"
            lineHeight="tall"
            maxW="4xl"
            mx="auto"
            textAlign="center"
          >
            Kaulu Concept is a multidisciplinary design and build studio offering
            architectural design, interior design, and construction services. We
            create holistic, functional, and aesthetically refined spaces for
            residential, commercial, and hospitality environments.
          </Text>
        </motion.div>

        {/* Company Story */}
        <motion.div
          {...fadeInUp({ shouldReduceMotion, delay: 0.4 })}
        >
          <Box
            maxW="4xl"
            mx="auto"
            textAlign="center"
          >
            <Heading
              as="h2"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="semibold"
              color="blackAlpha.900"
              mb={4}
            >
              Company Story
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="blackAlpha.700"
              lineHeight="tall"
            >
              Founded with a passion for design excellence, our approach
              integrates creativity, technical expertise, and an understanding of
              how people interact with space. Each project is tailored to reflect
              individual needs, brand identity, or lifestyle.
            </Text>
          </Box>
        </motion.div>

        {/* Core Values */}
        <Box mt={8}>
          <motion.div
            {...fadeInUp({ shouldReduceMotion, delay: 0.6 })}
          >
            <Heading
              as="h2"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="semibold"
              color="blackAlpha.900"
              textAlign="center"
              mb={8}
            >
              Core Values
            </Heading>
            <Box mt={8}>
              <AnimatedCardGrid
                items={CORE_VALUES}
                initialDelay={0.8}
                animationDuration={0.6}
              />
            </Box>
          </motion.div>
        </Box>

        {/* Quote Section */}
        <QuoteSection />
      </Stack>
    </Wrapper>
  );
}