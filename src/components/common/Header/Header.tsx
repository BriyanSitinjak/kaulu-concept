'use client';

import { Box, Flex, Button, IconButton, useDisclosure } from "@chakra-ui/react";
import { useState, useEffect, useCallback } from "react";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";
import { MENU_ITEMS, SCROLL_THRESHOLD, KAULU_CHOCOLATE } from "@/constants";
import Image from "next/image";
import kauluLogo from "@/asset/kaulu_concept_logo.png";
import { useHeaderSurfaceTheme } from "@/hooks/useHeaderSurfaceTheme";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const surfaceTheme = useHeaderSurfaceTheme();
  const onDarkSurface = surfaceTheme === "dark";

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const showHeader = !isScrolled;
  const showBurgerMenu = isScrolled;

  const navColor = onDarkSurface ? "white" : KAULU_CHOCOLATE;
  const headerBg = onDarkSurface ? "rgba(0,0,0,0.42)" : "rgba(253, 245, 230, 0.88)";
  const navHoverBg = onDarkSurface ? "rgba(255,255,255,0.12)" : "rgba(62, 39, 35, 0.08)";

  return (
    <>
      <Box
        as="header"
        position="fixed"
        top={0}
        left={0}
        right={0}
        w="100%"
        zIndex={1000}
        backdropFilter={{ base: "none", md: "blur(16px)" }}
        bg={headerBg}
        borderBottomWidth="1px"
        borderColor={onDarkSurface ? "whiteAlpha.200" : "blackAlpha.06"}
        transform={showHeader ? "translateY(0)" : "translateY(-100%)"}
        transition="transform 0.3s ease-in-out, background-color 0.25s ease, border-color 0.25s ease"
        suppressHydrationWarning
      >
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          px={{ base: 4, md: 8 }}
          maxH="86px"
          h="100%"
          maxW="7xl"
          mx="auto"
        >
          <Box
            as={Link}
            href="/"
            transition="opacity 0.2s"
            w={{ base: "100%", md: "max-content" }}
            alignContent="center"
          >
            <Image
              src={kauluLogo}
              style={{
                margin: "auto",
                filter: onDarkSurface ? "brightness(0) invert(1)" : undefined,
                transition: "filter 0.25s ease",
              }}
              alt="Kaulu Concept Logo"
              width={175}
              height={175}
            />
          </Box>

          <Flex
            gap={{ base: 2, md: 6 }}
            align="center"
            display={showHeader ? { base: "none", md: "flex" } : "none"}
          >
            {MENU_ITEMS.map((item) => (
              <Button
                key={item.href}
                as={Link}
                href={item.href}
                variant="ghost"
                color={navColor}
                fontSize="md"
                fontWeight="medium"
                transition="color 0.2s ease, background 0.2s ease"
                _hover={{ bg: navHoverBg }}
              >
                {item.label}
              </Button>
            ))}
          </Flex>
        </Flex>
      </Box>

      {showBurgerMenu && (
        <IconButton
          aria-label="Open menu"
          icon={<HiMenu />}
          position="fixed"
          top={4}
          right={4}
          zIndex={1001}
          size="lg"
          bg="rgba(0, 0, 0, 0.8)"
          color="white"
          borderRadius="full"
          backdropFilter="blur(10px)"
          _hover={{ bg: "rgba(0, 0, 0, 0.9)" }}
          transition="opacity 0.3s ease-in-out"
          onClick={onOpen}
        />
      )}

      <Box
        position="fixed"
        top={0}
        right={0}
        bottom={0}
        w="250px"
        bg="gray.50"
        backdropFilter="blur(10px)"
        zIndex={1002}
        transform={isOpen ? "translateX(0)" : "translateX(100%)"}
        transition="transform 0.3s ease-in-out"
        pt={20}
        px={6}
        pointerEvents={isOpen ? "auto" : "none"}
      >
        <Flex direction="column" gap={4}>
          {MENU_ITEMS.map((item) => (
            <Button
              key={item.href}
              as={Link}
              href={item.href}
              variant="ghost"
              color={KAULU_CHOCOLATE}
              fontSize="lg"
              justifyContent="flex-start"
              _hover={{ bg: "rgba(62, 39, 35, 0.06)" }}
              onClick={onClose}
            >
              {item.label}
            </Button>
          ))}
        </Flex>
      </Box>

      {isOpen && (
        <Box
          position="fixed"
          inset={0}
          bg="rgba(0, 0, 0, 0.5)"
          zIndex={1001}
          onClick={onClose}
        />
      )}
    </>
  );
}
