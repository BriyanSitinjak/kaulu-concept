import { Box, Button, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function CTABox() {
  return (
    <Box
      mt={{ base: 10, md: 14 }}
      borderRadius="2xl"
      bg="gray.50"
      p={4}
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems={{ base: "flex-start", md: "center" }}
      justifyContent="space-between"
      gap={4}
    >
      <Text fontSize="lg" fontWeight="medium">
        Ready to bring your vision to life?
      </Text>
      <Button
        as={Link}
        href={'https://wa.me/628119911985'}
        variant="solid"
        colorScheme="whiteAlpha"
        bg="black"
        color="whiteAlpha.900"
        px={8}
        size="lg"
        _hover={{ bg: "blackAlpha.800" }}
      >
        Let's connect
      </Button>
    </Box>
  );
}