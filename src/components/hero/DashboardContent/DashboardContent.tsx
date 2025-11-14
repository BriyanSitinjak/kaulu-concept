import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { TEXT_DASHBOARD_CONTENT } from "@/constants";

const DashboardContent = () => (
  <Flex
    as="div"
    direction="column"
    gap={4}
    align="center"
  >
    <Heading
      as="h1"
      color="blackAlpha.900"
      size="lg"
      fontWeight="semibold"
      textAlign="center"
      mb="3"
    >
      Crafting Timeless Spaces That Reflect Who You Are
    </Heading>
    {TEXT_DASHBOARD_CONTENT.map((text, index) => (
      <Text key={index} textAlign="center">
        {text}
      </Text>
    ))}
    <Button as={Link} key="/services" href="/services" variant="outline" colorScheme="blackAlpha" color="blackAlpha.900" rightIcon={<FaArrowRight />} mt={{ base: "30", md: 8 }}>Discover Our Design Packages</Button>
  </Flex>
);

export default DashboardContent;