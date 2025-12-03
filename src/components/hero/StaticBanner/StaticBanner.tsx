import { Box } from "@chakra-ui/react";
import Image from "next/image";
import bannerHome from "@/assets/portfolio_six_kaulu_concept.jpeg"

export default function StaticBanner() {
  return (
    <Box
      position="relative"
      w="100%"
      h="100vh"
      overflow="hidden"
      role="region"
      aria-label="Kaulu Concept Banner"
    >
      <Image
        src={bannerHome}
        alt="Kaulu Concept"
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
        priority
      />
    </Box>
  );
}