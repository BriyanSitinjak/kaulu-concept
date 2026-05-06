"use client";

/**
 * HomeFeatureGrid — responsive three-column band under the hero.
 * Future: pull items from a CMS, add section heading, or stagger scroll-reveal timings per card.
 */

import { useMemo, useState } from "react";
import { Box, Button, Flex, IconButton, Text } from "@chakra-ui/react";
import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { fadeInUp } from "@/utils";
import designChairTwo from "@/asset/Design Interior/Chair/DesignInterior-Chair-02.jpg";
import designChairThree from "@/asset/Design Interior/Chair/DesignInterior-Chair-03.jpg";
import designChairFive from "@/asset/Design Interior/Chair/DesignInterior-Chair-05.jpg";
import designDecorSeven from "@/asset/Design Interior/Decor & Accessories/DesignInterior-DecorAccessories-07.jpg";
import designDecorEight from "@/asset/Design Interior/Decor & Accessories/DesignInterior-DecorAccessories-08.jpg";
import designDecorNine from "@/asset/Design Interior/Decor & Accessories/DesignInterior-DecorAccessories-09.jpg";
import designDecorTen from "@/asset/Design Interior/Decor & Accessories/DesignInterior-DecorAccessories-10.jpg";
import designDecorEleven from "@/asset/Design Interior/Decor & Accessories/DesignInterior-DecorAccessories-11.jpg";
import designTableFour from "@/asset/Design Interior/Table/DesignInterior-Table-04.jpg";
import designTableFive from "@/asset/Design Interior/Table/DesignInterior-Table-05.jpg";
import designTableSix from "@/asset/Design Interior/Table/DesignInterior-Table-06.jpg";
import buildingBaliOne from "@/asset/Building/Bali/Building-Bali-01.jpeg";
import buildingBaliTwo from "@/asset/Building/Bali/Building-Bali-02.jpeg";
import architectureBaliOne from "@/asset/Architecture/Bali/Architecture-Bali-01.jpg";

type City = "bogor" | "bali";
type SectionKey = "design-interior" | "building" | "architecture";

type SectionMeta = {
  key: SectionKey;
  title: string;
  description: string;
  imageAlt: string;
};

const CITY_OPTIONS: { key: City; label: string }[] = [
  { key: "bogor", label: "Bogor" },
  { key: "bali", label: "Bali" },
];

const SECTION_OPTIONS: SectionMeta[] = [
  {
    key: "design-interior",
    title: "Design Interior",
    description: "Curated spaces with materials, styling, and details that feel timeless.",
    imageAlt: "Design interior gallery",
  },
  {
    key: "building",
    title: "Building",
    description: "Strong construction quality with reliable delivery.",
    imageAlt: "Building gallery",
  },
  {
    key: "architecture",
    title: "Architecture",
    description: "Functional and elegant architecture for every space.",
    imageAlt: "Architecture gallery",
  },
];

const DESIGN_INTERIOR_ALL = [
  designTableFour,
  designTableFive,
  designTableSix,
  designChairTwo,
  designChairThree,
  designChairFive,
  designDecorSeven,
  designDecorEight,
  designDecorNine,
  designDecorTen,
  designDecorEleven,
] as const;

const BUILDING_BALI_ALL = [buildingBaliOne, buildingBaliTwo] as const;

const ARCHITECTURE_BALI_ALL = [
  architectureBaliOne,
] as const;

const SECTION_CITY_GALLERIES: Record<SectionKey, Record<City, StaticImageData[]>> = {
  "design-interior": {
    bali: [...DESIGN_INTERIOR_ALL],
    bogor: [],
  },
  building: {
    bali: [...BUILDING_BALI_ALL],
    bogor: [],
  },
  architecture: {
    bali: [...ARCHITECTURE_BALI_ALL],
    bogor: [],
  },
};

export default function HomeFeatureGrid() {
  const shouldReduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState<SectionKey>("design-interior");
  const [activeCity, setActiveCity] = useState<City>("bali");
  const [slideIndex, setSlideIndex] = useState(0);

  const activeSectionMeta = useMemo(
    () => SECTION_OPTIONS.find((item) => item.key === activeSection) ?? SECTION_OPTIONS[0],
    [activeSection],
  );

  const images = SECTION_CITY_GALLERIES[activeSection][activeCity];
  const hasImages = images.length > 0;
  const safeSlideIndex = hasImages ? slideIndex % images.length : 0;
  const currentImage = hasImages ? images[safeSlideIndex] : null;

  const handleSectionChange = (section: SectionKey) => {
    setActiveSection(section);
    setSlideIndex(0);
  };

  const handleCityChange = (city: City) => {
    setActiveCity(city);
    setSlideIndex(0);
  };

  const handlePrev = () => {
    if (!hasImages) return;
    setSlideIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    if (!hasImages) return;
    setSlideIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <Box as="section" aria-label="Kaulu Concept section showcase" py={{ base: 8, md: 10 }}>
      <Box data-header-theme="dark">
        <motion.div
          {...fadeInUp({
            shouldReduceMotion,
            delay: 0.08,
            duration: 0.55,
          })}
        >
          <Box
            position="relative"
            borderRadius={{ base: "24px", md: "32px" }}
            overflow="hidden"
            minH={{ base: "76vh", md: "86vh" }}
            bg="black"
          >
            {currentImage ? (
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`${activeSection}-${activeCity}-${safeSlideIndex}`}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: "easeOut" }}
                  style={{ position: "absolute", inset: 0 }}
                >
                  <Image
                    src={currentImage}
                    alt={`${activeSectionMeta.imageAlt} ${activeCity}`}
                    fill
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            ) : null}

            <Box
              position="absolute"
              inset={0}
              bg="linear-gradient(180deg, rgba(10,10,10,0.28) 0%, rgba(10,10,10,0.50) 45%, rgba(10,10,10,0.82) 100%)"
              pointerEvents="none"
              aria-hidden
            />

            <Flex
              position="absolute"
              top={{ base: 4, md: 6 }}
              left={{ base: 4, md: 7 }}
              right={{ base: 4, md: 7 }}
              gap={3}
              wrap="wrap"
              zIndex={2}
            >
              {SECTION_OPTIONS.map((item) => (
                <Button
                  key={item.key}
                  size="sm"
                  borderRadius="full"
                  variant={activeSection === item.key ? "solid" : "outline"}
                  bg={activeSection === item.key ? "whiteAlpha.300" : "blackAlpha.450"}
                  borderColor="whiteAlpha.700"
                  color="white"
                  _hover={{ bg: "whiteAlpha.350" }}
                  onClick={() => handleSectionChange(item.key)}
                >
                  {item.title}
                </Button>
              ))}
            </Flex>

            <Flex
              position="absolute"
              top={{ base: 16, md: 20 }}
              left={{ base: 4, md: 7 }}
              gap={2}
              wrap="wrap"
              zIndex={2}
            >
              {CITY_OPTIONS.map((city) => (
                <Button
                  key={city.key}
                  size="xs"
                  borderRadius="full"
                  variant={activeCity === city.key ? "solid" : "outline"}
                  bg={activeCity === city.key ? "whiteAlpha.300" : "blackAlpha.400"}
                  borderColor="whiteAlpha.700"
                  color="white"
                  _hover={{ bg: "whiteAlpha.350" }}
                  onClick={() => handleCityChange(city.key)}
                >
                  {city.label}
                </Button>
              ))}
            </Flex>

            <Flex
              position="absolute"
              right={{ base: 4, md: 7 }}
              bottom={{ base: 4, md: 7 }}
              gap={2}
              zIndex={2}
            >
              <IconButton
                aria-label="Previous image"
                icon={<FaChevronLeft size={12} />}
                size="sm"
                variant="outline"
                borderColor="whiteAlpha.800"
                color="white"
                bg="blackAlpha.300"
                _hover={{ bg: "blackAlpha.500" }}
                isDisabled={!hasImages || images.length <= 1}
                onClick={handlePrev}
              />
              <IconButton
                aria-label="Next image"
                icon={<FaChevronRight size={12} />}
                size="sm"
                variant="outline"
                borderColor="whiteAlpha.800"
                color="white"
                bg="blackAlpha.300"
                _hover={{ bg: "blackAlpha.500" }}
                isDisabled={!hasImages || images.length <= 1}
                onClick={handleNext}
              />
            </Flex>

            <Box
              position="absolute"
              left={{ base: 4, md: 7 }}
              right={{ base: 4, md: 7 }}
              bottom={{ base: 16, md: 20 }}
              zIndex={2}
            >
              <Text color="white" fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mb={2}>
                {activeSectionMeta.title}
              </Text>
              <Text color="whiteAlpha.900" fontSize={{ base: "sm", md: "md" }} maxW="72ch">
                {activeSectionMeta.description}
              </Text>
              {!hasImages && (
                <Box mt={4} px={4} py={3} borderRadius="md" bg="blackAlpha.550" borderWidth="1px" borderColor="whiteAlpha.400">
                  <Text color="white" fontSize={{ base: "sm", md: "md" }} fontWeight="semibold">
                    Still in progress for this specific {activeSectionMeta.title} {activeCity === "bali" ? "Bali" : "Bogor"}
                  </Text>
                </Box>
              )}
            </Box>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}
