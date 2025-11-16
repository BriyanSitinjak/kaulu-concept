import BasicCard from "@/components/common/BasicCard";
import CTABox from "@/components/common/CTABox";
import { WHY_CHOOSE_US } from "@/constants";
import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";

export default function WhyChooseUs() {
  return (
    <Box
      minH="60vh"
      h="100%"
      as="section"
      py={{ base: 14, md: 20 }}
      px={{ base: 4, md: 10 }}
      color="blackAlpha.900"
    >
      <Stack
        spacing={4}
        textAlign="center"
        maxW="720px"
        mx="auto"
        mb={{ base: 10, md: 14 }}
      >
        <Text
          textTransform="uppercase"
          letterSpacing="widest"
          fontSize="xs"
          color="blackAlpha.600"
        >
          Why Choose Kaulu
        </Text>
        <Heading fontSize={{ base: "2xl", md: "3xl" }} fontWeight="semibold">
          Design partners tuned to vision, craft, and clarity
        </Heading>
        <Text color="blackAlpha.800">
          We orchestrate the entire journey so you can focus on the bigger picture—every decision is informed, every detail cared for.
        </Text>
      </Stack>
      <SimpleGrid
        columns={{ base: 1, sm: 2, lg: 3, xl: 5 }}
        spacing={{ base: 5, md: 6 }}
      >
        {WHY_CHOOSE_US.map(({ title, description }) => (
          <BasicCard key={title} title={title} description={description} />
        ))}
      </SimpleGrid>
      <CTABox />
    </Box>
  );
}