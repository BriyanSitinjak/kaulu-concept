import { Box, Button, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <Box textAlign="center" py={10} px={4}>
        <Heading>Page not found</Heading>
        <Text>The page you are looking for does not exist.</Text>
        <Button asChild>
            <Link href="/">Go to home</Link>
        </Button>
        <Button asChild>
            <Link href="/contact">Contact us</Link>
        </Button>
    </Box>
  );
};