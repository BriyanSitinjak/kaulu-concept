"use client";

/**
 * HomeHeroBanner — split panel hero (photo + cream panel) matching the warm interior reference.
 * Future: CMS copy, optional carousel on the image side, or motion on the tag row.
 */

import { Box, Button, Flex, Heading, Text, Wrap, WrapItem } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import {
  HOME_HERO_SPLIT_IMAGE,
  KAULU_CHOCOLATE,
  KAULU_CHOCOLATE_DEEP,
  KAULU_PAGE_CREAM,
  KAULU_PAGE_CREAM_SOFT,
} from "@/constants";

const TAGS = ["High quality", "Premium design", "Versatile"] as const;

export default function HomeHeroBanner() {
  return (
    <Box
      as="section"
      w="100%"
      mb={{ base: 6, md: 8 }}
      role="region"
      aria-label="Kaulu Concept introduction"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        minH={{ base: "auto", md: "min(420px, 52vw)" }}
        borderRadius={{ base: "28px", md: "36px" }}
        overflow="hidden"
        boxShadow="0 24px 60px rgba(62, 39, 35, 0.08)"
        bg={KAULU_PAGE_CREAM}
      >
        {/* Image column: reference still + horizontal fade into cream */}
        <Box
          position="relative"
          flex={{ base: "none", md: "0 0 46%" }}
          w={{ base: "100%", md: "auto" }}
          minH={{ base: "240px", sm: "280px", md: "auto" }}
          data-header-theme="dark"
        >
          <Image
            src={HOME_HERO_SPLIT_IMAGE}
            alt="Warm modern interior with natural materials and soft daylight"
            fill
            sizes="(max-width: 768px) 100vw, 46vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <Box
            position="absolute"
            inset={0}
            bg={`linear-gradient(90deg, transparent 0%, transparent 42%, ${KAULU_PAGE_CREAM} 88%, ${KAULU_PAGE_CREAM} 100%)`}
            pointerEvents="none"
            aria-hidden
          />
        </Box>

        {/* Copy column */}
        <Flex
          data-header-theme="light"
          direction="column"
          align={{ base: "flex-start", md: "flex-end" }}
          justify="center"
          flex="1"
          px={{ base: 6, md: 10, lg: 14 }}
          py={{ base: 8, md: 10 }}
          bg={`linear-gradient(180deg, ${KAULU_PAGE_CREAM_SOFT} 0%, ${KAULU_PAGE_CREAM} 100%)`}
          textAlign={{ base: "left", md: "right" }}
        >
          <Heading
            as="h2"
            color={KAULU_CHOCOLATE}
            fontWeight="bold"
            fontSize={{ base: "1.75rem", sm: "2rem", md: "2.35rem", lg: "2.75rem" }}
            lineHeight="1.15"
            mb={4}
            maxW={{ md: "20ch" }}
          >
            Timeless Design, Premium Materials
          </Heading>

          <Text
            color={KAULU_CHOCOLATE}
            opacity={0.92}
            fontSize={{ base: "sm", md: "md" }}
            lineHeight="tall"
            mb={6}
            maxW={{ md: "36ch" }}
          >
            Whether you love modern minimalism, timeless classics, or bold statement pieces.
          </Text>

          <Wrap
            spacing={3}
            justify={{ base: "flex-start", md: "flex-end" }}
            mb={8}
            sx={{ rowGap: "12px" }}
          >
            {TAGS.map((label) => (
              <WrapItem key={label}>
                <Box
                  as="span"
                  display="inline-block"
                  px={4}
                  py={1.5}
                  borderRadius="full"
                  borderWidth="1px"
                  borderColor={KAULU_CHOCOLATE}
                  color={KAULU_CHOCOLATE}
                  fontSize="xs"
                  fontWeight="semibold"
                  letterSpacing="0.12em"
                  textTransform="uppercase"
                >
                  {label}
                </Box>
              </WrapItem>
            ))}
          </Wrap>

          <Button
            as={Link}
            href="/services/"
            alignSelf={{ base: "stretch", md: "flex-end" }}
            w={{ base: "100%", md: "auto" }}
            borderRadius="full"
            px={8}
            py={6}
            h="auto"
            bg={KAULU_CHOCOLATE}
            color="white"
            fontSize="xs"
            fontWeight="semibold"
            letterSpacing="0.18em"
            textTransform="uppercase"
            rightIcon={<FaChevronRight size={12} />}
            _hover={{ bg: KAULU_CHOCOLATE_DEEP }}
            _active={{ bg: KAULU_CHOCOLATE_DEEP }}
          >
            Learn more
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
