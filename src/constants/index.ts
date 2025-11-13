import bannerOne from "@/assets/banner_one_kaulu_concept.jpeg";
import bannerTwo from "@/assets/banner_two_kaulu_concept.jpeg";
import bannerThree from "@/assets/banner_three_kaulu_concept.jpeg";
import bannerFour from "@/assets/banner_four_kaulu_concept.jpeg";
import { slidesType } from "@/types";

// Local image imports keep the assets optimized by Next.js
export const slides: slidesType[] = [
    {
        alt: "Kaulu Concept hero banner showcasing modern workspace interior design",
        asset: bannerOne,
    },
    {
        alt: "Kaulu Concept banner featuring architectural elements and ambient lighting",
        asset: bannerTwo,
    },
    {
        alt: "Kaulu Concept creative studio environment with collaborative team",
        asset: bannerThree,
    },
    {
        alt: "Kaulu Concept technology-driven workspace with minimalist aesthetics",
        asset: bannerFour,
    },
];