"use client";

/**
 * HomeFeatureCard — image tile with bottom gradient, index badge, and left-aligned copy.
 * Future: link wrapper, hover video swap, or CMS-driven fields passed from a parent grid.
 */

import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import type { HomeFeatureCardType } from "@/types";

type Props = {
  item: HomeFeatureCardType;
  priority?: boolean;
};

export default function HomeFeatureCard({ item, priority = false }: Props) {
  const n = String(item.index).padStart(2, "0");

  return (
    <Box
      position="relative"
      role="article"
      aria-labelledby={`home-feature-${item.index}-title`}
      borderRadius={{ base: "28px", md: "36px" }}
      overflow="hidden"
      minH={{ base: "280px", sm: "300px", md: "min(380px, 28vw)" }}
      w="100%"
    >
      <Image
        src={item.asset}
        alt={item.imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        style={{ objectFit: "cover" }}
        priority={priority}
      />

      <Box
        position="absolute"
        inset={0}
        bg="linear-gradient(180deg, rgba(30,22,18,0.06) 0%, rgba(30,22,18,0.35) 45%, rgba(62,39,35,0.9) 100%)"
        pointerEvents="none"
        aria-hidden
      />

      {/* Outlined index disc (reference layout) */}
      <Flex
        position="absolute"
        top={{ base: 4, md: 5 }}
        left={{ base: 4, md: 5 }}
        w="44px"
        h="44px"
        borderRadius="full"
        borderWidth="2px"
        borderColor="whiteAlpha.900"
        bg="transparent"
        align="center"
        justify="center"
        color="white"
        fontSize="sm"
        fontWeight="semibold"
        aria-hidden
      >
        {n}
      </Flex>

      <Box
        position="absolute"
        left={{ base: 5, md: 6 }}
        right={{ base: 5, md: 6 }}
        bottom={{ base: 5, md: 7 }}
      >
        <Text
          as="h2"
          id={`home-feature-${item.index}-title`}
          color="white"
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          lineHeight="short"
          mb={2}
        >
          {item.title}
        </Text>
        <Text color="whiteAlpha.900" fontSize={{ base: "sm", md: "md" }} lineHeight="tall">
          {item.description}
        </Text>
      </Box>
    </Box>
  );
}
