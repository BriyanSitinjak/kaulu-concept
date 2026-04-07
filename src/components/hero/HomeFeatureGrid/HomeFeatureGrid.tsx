"use client";

/**
 * HomeFeatureGrid — responsive three-column band under the hero.
 * Future: pull items from a CMS, add section heading, or stagger scroll-reveal timings per card.
 */

import { SimpleGrid, Box } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";
import { HOME_FEATURE_CARDS } from "@/constants";
import { fadeInUp } from "@/utils";
import HomeFeatureCard from "@/components/hero/HomeFeatureCard";

export default function HomeFeatureGrid() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Box as="section" aria-label="Kaulu Concept focus areas" py={{ base: 8, md: 10 }}>
      {/* Dark surface: header samples this band while scrolling so nav flips to light text */}
      <Box data-header-theme="dark">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, md: 4 }} w="100%">
          {HOME_FEATURE_CARDS.map((item, index) => (
            <motion.div
              key={item.index}
              style={{ width: "100%" }}
              {...fadeInUp({
                shouldReduceMotion,
                delay: 0.08 + index * 0.1,
                duration: 0.55,
              })}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -6,
                      transition: { duration: 0.22, ease: "easeOut" },
                    }
              }
            >
              <HomeFeatureCard item={item} priority={index === 0} />
            </motion.div>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
