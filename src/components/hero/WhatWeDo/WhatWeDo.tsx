import { EXPERTISE_ITEMS } from "@/constants";
import { Box, Grid, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";

export default function WhatWeDo() {
  return (
    <Box
      as="section"
      py={{ base: 12, md: 20 }}
      px={{ base: 4, md: 10 }}
      bg="gray.50"
      h="60vh"
      color="whiteAlpha.900"
      borderRadius={{ base: "2xl", md: "3xl" }}
    >
      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 1.5fr" }}
        gap={{ base: 10, lg: 16 }}
        alignItems="center"
      >
        <Stack maxW="480px" spacing={4}>
          <Text
            textTransform="uppercase"
            letterSpacing="widest"
            fontSize="xs"
            color="blackAlpha.600"
          >
            Kaulu Core Value
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="semibold"
            mb={2}
            color="blackAlpha.900"
          >
            Our Core Expertise
          </Heading>
          <Text color="blackAlpha.800" lineHeight="tall">
            We craft spatial identities that merge technical rigor with artistic detail. Each discipline works in tandem so every project feels intentional, elevated, and unmistakably Kaulu.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={6}>
          {EXPERTISE_ITEMS.map(({ label, alt, asset }) => (
            <Box
              key={label}
              borderRadius="2xl"
              overflow="hidden"
              minH="180px"
              position="relative"
              bgImage={`url(${asset.src})`}
              bgSize="100%"
              bgPos="center"
              bgRepeat="no-repeat"
              transition="background-size 0.6s ease, transform 0.6s ease"
              _hover={{ bgSize: "110%" }}
              cursor="default"
            >
              <Box
                h="100%"
                w="100%"
                bgGradient="linear(to-r, rgba(7,7,7,0.75), rgba(7,7,7,0.4))"
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                alignItems="flex-start"
                p={6}
                gap={2}
              >
                <Text fontSize="lg" fontWeight="bold" color="whiteAlpha.800">
                  {label}
                </Text>
                <Text fontSize="sm" fontWeight="medium" color="whiteAlpha.700">
                  {alt}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Grid>
    </Box>
  );
}