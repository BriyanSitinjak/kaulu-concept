"use client";

/**
 * Home (dashboard) screen — full-bleed hero, split promo, feature row, then story blocks.
 * Future: insert bands here (e.g. testimonials, press logos, project ticker) between sections as needed.
 */

import DashboardSection from "@/components/hero/DashboardSection";
import WhatWeDo from "@/components/hero/WhatWeDo";
import WhyChooseUs from "@/components/hero/WhyChooseUs";
import Wrapper from "@/components/common/Wrapper";
import Maps from "@/components/common/Maps";
import { Box } from "@chakra-ui/react";
import HomeHeroFullBleed from "@/components/hero/HomeHeroFullBleed";
import HomeHeroBanner from "@/components/hero/HomeHeroBanner";
import HomeFeatureGrid from "@/components/hero/HomeFeatureGrid";
import { KAULU_PAGE_CREAM } from "@/constants";

export default function Dashboard() {
  return (
    <Box bg={KAULU_PAGE_CREAM} minH="100vh" w="100%" data-header-theme="light">
      {/* Edge-to-edge first screen; header reads this band as dark for light nav treatment */}
      <HomeHeroFullBleed />

      <Wrapper omitHeaderOffset>
        <HomeHeroBanner />

        <HomeFeatureGrid />

        {/* Future: <ClientLogos /> or <FeaturedProjectStrip /> */}
        <DashboardSection />
        <WhatWeDo />
        <WhyChooseUs />
        <Maps />
      </Wrapper>
    </Box>
  );
}
