/**
 * DashboardSection — introductory copy and secondary CTA after the feature grid.
 * Future: split into stats + manifesto columns, or replace with a single rich-text block from CMS.
 */

import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { KAULU_CHOCOLATE, TEXT_DASHBOARD_CONTENT } from "@/constants";
import { motion, useReducedMotion } from "framer-motion";
import { fadeInUp } from "@/utils";

export default function DashboardSection() {

  const shouldReduceMotion = useReducedMotion();

  return (
    <Box minH="48vh" h="100%" alignContent="center">
      <motion.div
        {...fadeInUp({ shouldReduceMotion, delay: 0.2 })}
        style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
      >
        <Flex
          direction="column"
          gap={4}
          align="center"
        >
          <Text
            textTransform="uppercase"
            letterSpacing="widest"
            fontSize="xs"
            color={KAULU_CHOCOLATE}
            opacity={0.85}
          >
            Kaulu Concept Vision
          </Text>
          <Heading
            as="h2"
            color={KAULU_CHOCOLATE}
            size="lg"
            fontWeight="semibold"
            textAlign="center"
            mb={{ base: 0, md: 3 }}
          >
            Crafting Exceptional Architecture & Interior Experiences
          </Heading>
          {TEXT_DASHBOARD_CONTENT.map((text, idx) => (
            <Text key={idx} textAlign="center" color={KAULU_CHOCOLATE} opacity={0.88} maxW="2xl">
              {text}
            </Text>
          ))}
          <Button
            as={Link}
            href="/services/"
            variant="outline"
            borderColor={KAULU_CHOCOLATE}
            color={KAULU_CHOCOLATE}
            rightIcon={<FaArrowRight />}
            mt={{ base: 8, md: 8 }}
            _hover={{ bg: "rgba(62, 39, 35, 0.08)" }}
          >
            Discover Our Design Packages
          </Button>        
        </Flex>
      </motion.div>
    </Box>
  );
}