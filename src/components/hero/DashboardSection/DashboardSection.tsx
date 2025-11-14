import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { TEXT_DASHBOARD_CONTENT } from "@/constants";
import { motion, useReducedMotion } from "framer-motion";
import { fadeInUp } from "@/utils";

export default function DashboardSection() {

  const shouldReduceMotion = useReducedMotion();

  return (
    <Box h="48vh" alignContent="center">
      <motion.div
        {...fadeInUp({ shouldReduceMotion, delay: 0.2 })}
        style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
      >
        <Flex
          direction="column"
          gap={4}
          align="center"
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
      </motion.div>
    </Box>
  );
}