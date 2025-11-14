'use client';

import {
  Box,
  Heading,
  Text,
  Stack,
  Button,
} from "@chakra-ui/react";
import Wrapper from "@/components/common/Wrapper";
import AnimatedCardGrid from "@/components/common/AnimatedCardGrid";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { LIST_SERVICES } from "@/constants";
import { fadeInUp } from "@/utils";

export default function Services() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Wrapper>
      <Stack spacing={8} mb={16}>
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
              Comprehensive Design & Build Solutions
            </Heading>
          </motion.div>
          <motion.div
            {...fadeInUp({ shouldReduceMotion, delay: 0.2 })}
          >
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="blackAlpha.700"
              lineHeight="tall"
              maxW="2xl"
              mx="auto"
            >
              From initial concept to final handover, our services ensure a
              seamless journey throughout your project.
            </Text>
          </motion.div>
        </Stack>

        {/* Services Grid */}
        <Box mt={12}>
          <motion.div
            {...fadeInUp({ shouldReduceMotion, delay: 0.4 })}
          >
            <Box mt={8}>
              <AnimatedCardGrid
                items={LIST_SERVICES}
                initialDelay={0.6}
                animationDuration={0.6}
              />
            </Box>
          </motion.div>
        </Box>

        {/* CTA Section */}
        <motion.div
          {...fadeInUp({ shouldReduceMotion, delay: 1 })}
        >
          <Box
            mt={16}
            borderRadius="2xl"
            bgGradient="linear(to-r, gray.50, gray.100)"
            p={8}
            textAlign="center"
            border="1px solid"
            borderColor="gray.200"
          >
            <Stack spacing={6} alignItems="center">
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="medium"
                color="blackAlpha.800"
              >
                Ready to discuss your project?
              </Text>
              <Button
                as={Link}
                href="https://wa.me/628119911985"
                size="lg"
                bg="black"
                color="white"
                px={10}
                py={6}
                fontSize="md"
                fontWeight="semibold"
                borderRadius="xl"
                transition="all 0.3s ease"
                _hover={{
                  bg: "blackAlpha.800",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                }}
                _active={{
                  transform: "translateY(0)",
                }}
              >
                Discuss Your Project
              </Button>
            </Stack>
          </Box>
        </motion.div>
      </Stack>
    </Wrapper>
  );
}