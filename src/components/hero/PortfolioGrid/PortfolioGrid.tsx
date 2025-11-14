'use client';

import { SimpleGrid } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeInUp } from "@/utils";
import { PortfolioGridProps } from "@/types";
import ImageWithSkeleton from "@/components/common/ImageWithSkeleton";

export default function PortfolioGrid({
  items,
  columns = { base: 1, sm: 2, lg: 3 },
  spacing = 6,
  initialDelay = 0.2,
  animationDuration = 0.6,
  priorityCount = 3,
}: PortfolioGridProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SimpleGrid columns={columns} spacing={spacing}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          {...fadeInUp({
            shouldReduceMotion,
            delay: initialDelay + index * 0.1,
            duration: animationDuration,
          })}
        >
          <ImageWithSkeleton
            src={item.asset}
            alt={item.alt}
            priority={index < priorityCount}
            onHover={{
              transform: "translateY(-8px)",
              boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
            }}
          />
        </motion.div>
      ))}
    </SimpleGrid>
  );
}

