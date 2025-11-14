'use client';

import { SOCIAL_LINKS } from "@/constants";
import { Box, Flex, Text, Link, Icon } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      as="footer"
      bg="gray.50"
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      maxH="60px"
      h="100%"
      alignContent="center"
      px={{ base: 4, md: 8 }}
      suppressHydrationWarning
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        maxW="80vw"
        mx="auto"
        gap={6}
      >
        <Flex gap={4} align="center">
          {SOCIAL_LINKS.map(({ icon, href, label }) => (
            <Link
              key={label}
              href={href}
              isExternal
              aria-label={label}
              _hover={{ opacity: 0.7 }}
              transition="opacity 0.2s"
            >
              <Icon
                as={icon}
                boxSize={5}
                color="blackAlpha.700"
                _hover={{ color: "blackAlpha.900" }}
                transition="color 0.2s"
              />
            </Link>
          ))}
        </Flex>
        <Text
          fontSize="sm"
          color="gray.600"
          textAlign={{ base: "center", md: "right" }}
        >
          © 2025 Kaulu Concept. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
}