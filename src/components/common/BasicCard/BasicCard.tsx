import { titleDescType } from "@/types";
import { Box, Stack, Text } from "@chakra-ui/react";

export default function BasicCard({ title, description }: titleDescType) {
  return (
    <Box
      p={5}
      borderRadius="2xl"
      bgGradient="linear(to-b, rgba(255,255,255,0.08), rgba(255,255,255,0.02))"
      border="1px solid"
      borderColor="whiteAlpha.200"
      boxShadow="0 10px 30px rgba(0,0,0,0.25)"
      backdropFilter="blur(8px)"
      transition="transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease"
      _hover={{
        transform: "translateY(-8px)",
        borderColor: "whiteAlpha.400",
        boxShadow: "0 16px 40px rgba(0,0,0,0.35)",
      }}
    >
      <Stack spacing={3}>
        <Text fontSize="lg" fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="sm" color="blackAlpha.700">
          {description}
        </Text>
      </Stack>
    </Box>
  );
}