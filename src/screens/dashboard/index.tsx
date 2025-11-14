"use client";

import Banner from "@/components/hero/Banner";
import DashboardContent from "@/components/hero/DashboardContent";
import WhatWeDo from "@/components/hero/WhatWeDo";
import WhyChooseUs from "@/components/hero/WhyChooseUs";
import Wrapper from "@/components/common/Wrapper";

export default function Dashboard() {
  return (
    <>
      <Banner />
      <Wrapper>
        <DashboardContent />
        <WhatWeDo />
        <WhyChooseUs />
      </Wrapper>
    </>
  );
}