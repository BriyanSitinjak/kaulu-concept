"use client";

/**
 * HomeHeroFullBleed — first-screen, full-viewport hero (interior photo + overlay + centered stack).
 * Future: parallax, Ken Burns on the image, or alternate headline per locale.
 */

import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { HOME_HERO_FULLBLEED_IMAGE } from "@/constants";

export default function HomeHeroFullBleed() {
  return (
    <Box
      as="section"
      position="relative"
      w="100%"
      minH="100dvh"
      overflow="hidden"
      data-header-theme="dark"
      sx={{ "@supports not (min-height: 100dvh)": { minHeight: "100vh" } }}
      role="region"
      aria-label="Kaulu Concept hero"
    >
      <Image
        src={HOME_HERO_FULLBLEED_IMAGE}
        alt="Contemporary living space with staircase, seating, and layered natural materials"
        fill
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority
      />

      <Box
        position="absolute"
        inset={0}
        bg="linear-gradient(180deg, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.48) 45%, rgba(0,0,0,0.52) 100%)"
        aria-hidden
      />

      <Flex
        position="absolute"
        inset={0}
        zIndex={1}
        direction="column"
        align="center"
        justify="center"
        px={{ base: 6, md: 10 }}
        pt={{ base: "88px", md: "92px" }}
        pb={{ base: 12, md: 16 }}
        textAlign="center"
      >
        <Text
          as="p"
          color="white"
          fontSize={{ base: "xs", md: "sm" }}
          fontWeight="bold"
          letterSpacing="0.28em"
          textTransform="uppercase"
          mb={{ base: 6, md: 8 }}
        >
          Kaulu Concept
        </Text>

        <Heading
          as="h1"
          color="white"
          fontWeight="normal"
          lineHeight={{ base: "1.2", md: "1.18" }}
          fontSize={{ base: "1.65rem", sm: "2.1rem", md: "2.65rem", lg: "3.15rem" }}
          maxW="22ch"
          mb={{ base: 10, md: 12 }}
          sx={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Crafting Exceptional
          <br />
          Architecture &amp; Interior
          <br />
          Experiences
        </Heading>

        <Button
          as={Link}
          href="/about-us/"
          variant="outline"
          borderWidth="1px"
          borderColor="whiteAlpha.900"
          color="white"
          bg="transparent"
          borderRadius="none"
          px={{ base: 10, md: 14 }}
          py={{ base: 6, md: 7 }}
          h="auto"
          minW={{ base: "240px", md: "280px" }}
          fontSize="xs"
          fontWeight="bold"
          letterSpacing="0.2em"
          textTransform="uppercase"
          lineHeight="1.65"
          whiteSpace="normal"
          textAlign="center"
          _hover={{ bg: "whiteAlpha.150", borderColor: "white" }}
          _active={{ bg: "whiteAlpha.250" }}
        >
          DISCUSS YOUR PROJECT
        </Button>
      </Flex>
    </Box>
  );
}
