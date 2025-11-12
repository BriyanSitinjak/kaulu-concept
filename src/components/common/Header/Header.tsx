'use client';

import { Box, Flex, Text, Button, IconButton, useDisclosure } from "@chakra-ui/react";
import { useState, useEffect, useCallback } from "react";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";

const SCROLL_THRESHOLD = 50;
const MENU_ITEMS = [
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
] as const;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    handleScroll(); // Check initial position
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const showHeader = !isScrolled;
  const showBurgerMenu = isScrolled;

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
        bg="rgba(0, 0, 0, 0.8)"
        backdropFilter="blur(10px)"
        borderBottom="1px solid"
        borderColor="gray.700"
        transform={showHeader ? 'translateY(0)' : 'translateY(-100%)'}
        transition="transform 0.3s ease-in-out"
        suppressHydrationWarning
      >
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          px={{ base: 4, md: 8 }}
          py={4}
          maxW="7xl"
          mx="auto"
        >
          <Text
            as={Link}
            href="/"
            fontSize={{ base: 'xl', md: '2xl' }}
            fontWeight="bold"
            color="white"
            _hover={{ opacity: 0.8 }}
            transition="opacity 0.2s"
          >
            Kaulu Concept
          </Text>

          <Flex
            gap={{ base: 2, md: 6 }}
            align="center"
            display={showHeader ? { base: 'none', md: 'flex' } : 'none'}
          >
            {MENU_ITEMS.map((item) => (
              <Button
                key={item.href}
                as={Link}
                href={item.href}
                variant="ghost"
                color="white"
                fontSize="md"
                _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
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
          _hover={{ bg: 'rgba(0, 0, 0, 0.9)' }}
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
        bg="rgba(0, 0, 0, 0.95)"
        backdropFilter="blur(10px)"
        zIndex={1002}
        transform={isOpen ? 'translateX(0)' : 'translateX(100%)'}
        transition="transform 0.3s ease-in-out"
        pt={20}
        px={6}
      >
        <Flex direction="column" gap={4}>
          {MENU_ITEMS.map((item) => (
            <Button
              key={item.href}
              as={Link}
              href={item.href}
              variant="ghost"
              color="white"
              fontSize="lg"
              justifyContent="flex-start"
              _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
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