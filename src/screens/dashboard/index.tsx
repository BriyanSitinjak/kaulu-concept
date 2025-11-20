"use client";

import DashboardSection from "@/components/hero/DashboardSection";
import WhatWeDo from "@/components/hero/WhatWeDo";
import WhyChooseUs from "@/components/hero/WhyChooseUs";
import Wrapper from "@/components/common/Wrapper";
import StaticBanner from "@/components/hero/StaticBanner";
import Maps from "@/components/common/Maps";

export default function Dashboard() {
  return (
    <>
      {/* will take out for now since the requirement want the static banner only */}
      {/* <Banner /> */}
      <StaticBanner />
      <Wrapper>
        <DashboardSection />
        <WhatWeDo />
        <WhyChooseUs />
        <Maps />
      </Wrapper>
    </>
  );
}