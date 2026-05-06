"use client";

/**
 * HomeFeatureGrid — responsive three-column band under the hero.
 * Future: pull items from a CMS, add section heading, or stagger scroll-reveal timings per card.
 */

import { useMemo, useState } from "react";
import { Box, Flex, IconButton, SimpleGrid, Text, Wrap, WrapItem } from "@chakra-ui/react";
import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { fadeInUp } from "@/utils";
import designTableOne from "@/asset/Design Interior/Table/DesignInterior-Table-04.jpg";
import designTableTwo from "@/asset/Design Interior/Table/DesignInterior-Table-05.jpg";
import designTableThree from "@/asset/Design Interior/Table/DesignInterior-Table-06.jpg";
import designChairOne from "@/asset/Design Interior/Chair/DesignInterior-Chair-02.jpg";
import designChairTwo from "@/asset/Design Interior/Chair/DesignInterior-Chair-03.jpg";
import designChairThree from "@/asset/Design Interior/Chair/DesignInterior-Chair-05.jpg";
import designLampOne from "@/asset/Design Interior/Decor & Accessories/DesignInterior-DecorAccessories-08.jpg";
import designLampTwo from "@/asset/Design Interior/Decor & Accessories/DesignInterior-DecorAccessories-09.jpg";
import designLampThree from "@/asset/Design Interior/Decor & Accessories/DesignInterior-DecorAccessories-10.jpg";
import designDecorOne from "@/asset/Design Interior/Decor & Accessories/DesignInterior-DecorAccessories-07.jpg";
import designDecorTwo from "@/asset/Design Interior/Decor & Accessories/DesignInterior-DecorAccessories-08.jpg";
import designDecorThree from "@/asset/Design Interior/Decor & Accessories/DesignInterior-DecorAccessories-09.jpg";
import designDecorFour from "@/asset/Design Interior/Decor & Accessories/DesignInterior-DecorAccessories-10.jpg";
import designDecorFive from "@/asset/Design Interior/Decor & Accessories/DesignInterior-DecorAccessories-11.jpg";
import designDecorSix from "@/asset/Design Interior/Decor & Accessories/DesignInterior-DecorAccessories-07.jpg";
import buildingBaliOne from "@/asset/Building/Bali/Building-Bali-01.jpeg";
import architectureBaliOne from "@/asset/Architecture/Bali/Architecture-Bali-01.jpg";

type DesignOption = {
  key: "table" | "chair" | "lamp" | "potry" | "mirror";
  label: string;
  images: StaticImageData[];
};

const DESIGN_OPTIONS: DesignOption[] = [
  { key: "table", label: "Table", images: [designTableOne, designTableTwo, designTableThree] },
  { key: "chair", label: "Chair", images: [designChairOne, designChairTwo, designChairThree] },
  { key: "lamp", label: "Lamp", images: [designLampOne, designLampTwo, designLampThree] },
  { key: "potry", label: "Potry", images: [designDecorOne, designDecorTwo, designDecorThree] },
  { key: "mirror", label: "Mirror", images: [designDecorFour, designDecorFive, designDecorSix] },
] as const;

const STATIC_FEATURE_CARDS = [
  {
    index: 2,
    title: "Building",
    description: "Strong construction quality with reliable delivery.",
    asset: buildingBaliOne,
    imageAlt: "Building and construction detail",
  },
  {
    index: 3,
    title: "Architec.",
    description: "Functional and elegant architecture for every space.",
    asset: architectureBaliOne,
    imageAlt: "Architecture-focused interior composition",
  },
] as const;

const HANDLED_CITIES = ["Bogor", "Bali"] as const;

export default function HomeFeatureGrid() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedOption, setSelectedOption] = useState<DesignOption["key"]>("table");
  const [slideIndex, setSlideIndex] = useState(0);
  const [activeCityCard, setActiveCityCard] = useState<number | null>(null);

  const activeOption = useMemo(
    () => DESIGN_OPTIONS.find((option) => option.key === selectedOption) ?? DESIGN_OPTIONS[0],
    [selectedOption],
  );

  const currentImage = activeOption.images[slideIndex % activeOption.images.length];

  const handleSelectOption = (key: DesignOption["key"]) => {
    setSelectedOption(key);
    setSlideIndex(0);
  };

  const handlePrev = () => {
    setSlideIndex((prev) => (prev - 1 + activeOption.images.length) % activeOption.images.length);
  };

  const handleNext = () => {
    setSlideIndex((prev) => (prev + 1) % activeOption.images.length);
  };

  const handleCardClick = (cardIndex: number) => {
    setActiveCityCard((prev) => (prev === cardIndex ? null : cardIndex));
  };

  return (
    <Box as="section" aria-label="Kaulu Concept focus areas" py={{ base: 8, md: 10 }}>
      {/* Dark surface: header samples this band while scrolling so nav flips to light text */}
      <Box data-header-theme="dark">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 5, md: 4 }} w="100%">
          <motion.div
            style={{ width: "100%" }}
            {...fadeInUp({
              shouldReduceMotion,
              delay: 0.08,
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
            <Box
              position="relative"
              role="article"
              aria-labelledby="home-feature-design-interior-title"
              borderRadius={{ base: "28px", md: "36px" }}
              overflow="hidden"
              minH={{ base: "320px", sm: "340px", md: "min(400px, 30vw)" }}
              w="100%"
              cursor="pointer"
              onClick={() => handleCardClick(1)}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`${selectedOption}-${slideIndex}`}
                  initial={{ opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -14 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: "easeOut" }}
                  style={{ position: "absolute", inset: 0 }}
                >
                  <Image
                    src={currentImage}
                    alt={`${activeOption.label} design reference`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              <Box
                position="absolute"
                inset={0}
                bg="linear-gradient(180deg, rgba(30,22,18,0.08) 0%, rgba(30,22,18,0.4) 52%, rgba(62,39,35,0.92) 100%)"
                pointerEvents="none"
                aria-hidden
              />

              <Flex
                position="absolute"
                top={{ base: 4, md: 5 }}
                left={{ base: 4, md: 5 }}
                w="44px"
                h="44px"
                borderRadius="full"
                borderWidth="2px"
                borderColor="whiteAlpha.900"
                bg="transparent"
                align="center"
                justify="center"
                color="white"
                fontSize="sm"
                fontWeight="semibold"
                aria-hidden
              >
                01
              </Flex>

              <Flex
                position="absolute"
                top={{ base: 4, md: 5 }}
                right={{ base: 4, md: 5 }}
                gap={2}
                zIndex={2}
              >
                <IconButton
                  aria-label="Previous design image"
                  icon={<FaChevronLeft size={12} />}
                  size="sm"
                  variant="outline"
                  borderColor="whiteAlpha.800"
                  color="white"
                  bg="blackAlpha.300"
                  _hover={{ bg: "blackAlpha.500" }}
                  onClick={handlePrev}
                />
                <IconButton
                  aria-label="Next design image"
                  icon={<FaChevronRight size={12} />}
                  size="sm"
                  variant="outline"
                  borderColor="whiteAlpha.800"
                  color="white"
                  bg="blackAlpha.300"
                  _hover={{ bg: "blackAlpha.500" }}
                  onClick={handleNext}
                />
              </Flex>

              <Box position="absolute" left={{ base: 5, md: 6 }} right={{ base: 5, md: 6 }} bottom={{ base: 5, md: 7 }}>
                <Text
                  as="h2"
                  id="home-feature-design-interior-title"
                  color="white"
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  lineHeight="short"
                  mb={2}
                >
                  Design Interior
                </Text>
                <Wrap spacing={2} mb={3}>
                  {DESIGN_OPTIONS.map((option) => (
                    <WrapItem key={option.key}>
                      <Box
                        as="button"
                        type="button"
                        px={3}
                        py={1}
                        borderRadius="full"
                        borderWidth="1px"
                        borderColor={selectedOption === option.key ? "white" : "whiteAlpha.600"}
                        bg={selectedOption === option.key ? "whiteAlpha.300" : "blackAlpha.300"}
                        color="white"
                        fontSize="xs"
                        fontWeight="semibold"
                        letterSpacing="0.03em"
                        onClick={() => handleSelectOption(option.key)}
                      >
                        {option.label}
                      </Box>
                    </WrapItem>
                  ))}
                </Wrap>
                <Text color="whiteAlpha.900" fontSize={{ base: "sm", md: "md" }} lineHeight="tall">
                  Click a category and use arrows to browse one image at a time.
                </Text>
                {activeCityCard === 1 && (
                  <Box mt={3}>
                    <Text color="whiteAlpha.900" fontSize="xs" textTransform="uppercase" letterSpacing="0.08em" mb={1.5}>
                      Handled Cities
                    </Text>
                    <Wrap spacing={2}>
                      {HANDLED_CITIES.map((city) => (
                        <WrapItem key={city}>
                          <Box
                            px={3}
                            py={1}
                            borderRadius="full"
                            borderWidth="1px"
                            borderColor="whiteAlpha.700"
                            bg="blackAlpha.350"
                            color="white"
                            fontSize="xs"
                            fontWeight="semibold"
                          >
                            {city}
                          </Box>
                        </WrapItem>
                      ))}
                    </Wrap>
                  </Box>
                )}
              </Box>
            </Box>
          </motion.div>

          {STATIC_FEATURE_CARDS.map((item, index) => (
            <motion.div
              key={item.index}
              style={{ width: "100%" }}
              {...fadeInUp({
                shouldReduceMotion,
                delay: 0.18 + index * 0.1,
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
              <Box
                position="relative"
                role="article"
                aria-labelledby={`home-feature-${item.index}-title`}
                borderRadius={{ base: "28px", md: "36px" }}
                overflow="hidden"
                minH={{ base: "280px", sm: "300px", md: "min(380px, 28vw)" }}
                w="100%"
                cursor="pointer"
                onClick={() => handleCardClick(item.index)}
              >
                <Image
                  src={item.asset}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <Box
                  position="absolute"
                  inset={0}
                  bg="linear-gradient(180deg, rgba(30,22,18,0.06) 0%, rgba(30,22,18,0.35) 45%, rgba(62,39,35,0.9) 100%)"
                  pointerEvents="none"
                  aria-hidden
                />
                <Flex
                  position="absolute"
                  top={{ base: 4, md: 5 }}
                  left={{ base: 4, md: 5 }}
                  w="44px"
                  h="44px"
                  borderRadius="full"
                  borderWidth="2px"
                  borderColor="whiteAlpha.900"
                  bg="transparent"
                  align="center"
                  justify="center"
                  color="white"
                  fontSize="sm"
                  fontWeight="semibold"
                  aria-hidden
                >
                  {String(item.index).padStart(2, "0")}
                </Flex>
                <Box
                  position="absolute"
                  left={{ base: 5, md: 6 }}
                  right={{ base: 5, md: 6 }}
                  bottom={{ base: 5, md: 7 }}
                >
                  <Text
                    as="h2"
                    id={`home-feature-${item.index}-title`}
                    color="white"
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="bold"
                    lineHeight="short"
                    mb={2}
                  >
                    {item.title}
                  </Text>
                  <Text color="whiteAlpha.900" fontSize={{ base: "sm", md: "md" }} lineHeight="tall">
                    {item.description}
                  </Text>
                  {activeCityCard === item.index && (
                    <Box mt={3}>
                      <Text color="whiteAlpha.900" fontSize="xs" textTransform="uppercase" letterSpacing="0.08em" mb={1.5}>
                        Handled Cities
                      </Text>
                      <Wrap spacing={2}>
                        {HANDLED_CITIES.map((city) => (
                          <WrapItem key={city}>
                            <Box
                              px={3}
                              py={1}
                              borderRadius="full"
                              borderWidth="1px"
                              borderColor="whiteAlpha.700"
                              bg="blackAlpha.350"
                              color="white"
                              fontSize="xs"
                              fontWeight="semibold"
                            >
                              {city}
                            </Box>
                          </WrapItem>
                        ))}
                      </Wrap>
                    </Box>
                  )}
                </Box>
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
