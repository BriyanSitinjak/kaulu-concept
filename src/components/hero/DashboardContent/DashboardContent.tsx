import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { TEXT_DASHBOARD_CONTENT } from "@/constants";

const DashboardContent = () => (
  <Box h="48vh" alignContent="center">
    <Flex
      direction="column"
      gap={4}
      align="center"
      as="div"
    >
      <Text
        textTransform="uppercase"
        letterSpacing="widest"
        fontSize="xs"
        color="blackAlpha.600"
      >
        Kaulu Concept Vision
      </Text>
      <Heading
        as="h1"
        color="blackAlpha.900"
        size="lg"
        fontWeight="semibold"
        textAlign="center"
        mb={3}
      >
        Crafting Exceptional Architecture & Interior Experiences
      </Heading>
      {TEXT_DASHBOARD_CONTENT.map((text, idx) => (
        <Text key={idx} textAlign="center">
          {text}
        </Text>
      ))}
      <Button
        as={Link}
        href="/services"
        variant="outline"
        colorScheme="blackAlpha"
        color="blackAlpha.900"
        rightIcon={<FaArrowRight />}
        mt={{ base: 8, md: 8 }}
      >
        Discover Our Design Packages
      </Button>
    </Flex>
  </Box>
);

export default DashboardContent;