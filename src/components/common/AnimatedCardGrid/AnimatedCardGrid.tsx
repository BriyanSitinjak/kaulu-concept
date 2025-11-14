'use client';

import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatedCardGridProps } from "@/types";
import { fadeInUp } from "@/utils";

export default function AnimatedCardGrid({
  items,
  initialDelay = 0.6,
  animationDuration = 0.6,
  columns = { base: 1, md: 2 },
  spacing = 6,
}: AnimatedCardGridProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SimpleGrid columns={columns} spacing={spacing}>
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          {...fadeInUp({
            shouldReduceMotion,
            delay: initialDelay + index * 0.1,
            duration: animationDuration,
          })}
        >
          <Box
            p={8}
            borderRadius="2xl"
            bg="white"
            border="1px solid"
            borderColor="gray.200"
            boxShadow="0 4px 20px rgba(0,0,0,0.08)"
            transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
            position="relative"
            overflow="hidden"
            _before={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              bgGradient: "linear(to-r, blackAlpha.800, blackAlpha.600)",
              transform: "scaleX(0)",
              transformOrigin: "left",
              transition: "transform 0.4s ease",
            }}
            _hover={{
              transform: "translateY(-8px)",
              borderColor: "gray.300",
              boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
              _before: { transform: "scaleX(1)" },
            }}
          >
            <Stack spacing={4}>
              <Heading
                as="h3"
                fontSize="xl"
                fontWeight="semibold"
                color="blackAlpha.900"
              >
                {item.title}
              </Heading>
              <Text
                fontSize="md"
                color="blackAlpha.700"
                lineHeight="tall"
              >
                {item.description}
              </Text>
            </Stack>
          </Box>
        </motion.div>
      ))}
    </SimpleGrid>
  );
}

