"use client";

import Banner from "@/components/hero/Banner";
import DashboardSection from "@/components/hero/DashboardSection";
import WhatWeDo from "@/components/hero/WhatWeDo";
import WhyChooseUs from "@/components/hero/WhyChooseUs";
import Wrapper from "@/components/common/Wrapper";

export default function Dashboard() {
  return (
    <>
      <Banner />
      <Wrapper>
        <DashboardSection />
        <WhatWeDo />
        <WhyChooseUs />
      </Wrapper>
    </>
  );
}