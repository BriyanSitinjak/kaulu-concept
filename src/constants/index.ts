import bannerOne from "@/assets/banner_one_kaulu_concept.jpeg";
import bannerTwo from "@/assets/banner_two_kaulu_concept.jpeg";
import bannerThree from "@/assets/banner_three_kaulu_concept.jpeg";
import bannerFour from "@/assets/banner_four_kaulu_concept.jpeg";
import portfolioOne from "@/assets/portfolio_one_kaulu_concept.jpeg";
import portfolioTwo from "@/assets/portfolio_two_kaulu_concept.jpeg";
import portfolioThree from "@/assets/portfolio_three_kaulu_concept.jpeg";
import portfolioFour from "@/assets/portfolio_four_kaulu_concept.jpeg";
import portfolioFive from "@/assets/portfolio_five_kaulu_concept.jpeg";
import portfolioSix from "@/assets/portfolio_six_kaulu_concept.jpeg";
import assetOne from "@/assets/asset_one_kaulu_concept.jpg";
import assetTwo from "@/assets/asset_two_kaulu_concept.jpg";
import assetThree from "@/assets/asset_three_kaulu_concept.jpg";
import assetFour from "@/assets/asset_four_kaulu_concept.jpg";
import assetFive from "@/assets/asset_five_kaulu_concept.jpg";
import assetSix from "@/assets/asset_six_kaulu_concept.jpg";
import assetSeven from "@/assets/asset_seven_kaulu_concept.jpg";
import assetEight from "@/assets/asset_eight_kaulu_concept.jpg";
import assetNine from "@/assets/asset_nine_kaulu_concept.jpg";
import assetTen from "@/assets/asset_ten_kaulu_concept.jpg";
import assetEleven from "@/assets/asset_eleven_kaulu_concept.jpg";
import assetTwelve from "@/assets/asset_twelve_kaulu_concept.jpg";
import assetThirteen from "@/assets/asset_thirteen_kaulu_concept.jpg";
import assetFourteen from "@/assets/asset_fourteen_kaulu_concept.jpg";
import homeHeroLayoutReference from "@/assets/home_hero_layout_reference.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  ExpertiseType,
  HomeFeatureCardType,
  MenuType,
  SlidesType,
  SocialLinkType,
  TitleDescType,
} from "@/types";

/** Page shell / hero panel (warm cream family from layout reference). */
export const KAULU_PAGE_CREAM = "#F5F0E1";
export const KAULU_PAGE_CREAM_SOFT = "#FDF5E6";
/** Primary body and UI on light surfaces. */
export const KAULU_CHOCOLATE = "#3E2723";
export const KAULU_CHOCOLATE_DEEP = "#4B3621";

/** Shared content width: hero block and card row align to the same max width. */
export const HOME_CONTENT_MAX_W = "1320px";

/**
 * Left visual for the split home hero (reference screenshot).
 * Swap to a photo import if you replace this asset.
 */
export const HOME_HERO_SPLIT_IMAGE = homeHeroLayoutReference;

/** Full-viewport top hero (living room / staircase reference still). */
export const HOME_HERO_FULLBLEED_IMAGE = assetNine;

/**
 * All fourteen numbered stills for the home experience and future sections.
 * Reorder or reassign below when you add new bands (e.g. testimonials, process steps).
 */
export const KAULU_NUMBERED_ASSETS = [
  assetOne,
  assetTwo,
  assetThree,
  assetFour,
  assetFive,
  assetSix,
  assetSeven,
  assetEight,
  assetNine,
  assetTen,
  assetEleven,
  assetTwelve,
  assetThirteen,
  assetFourteen,
] as const;

export const DECORATION_ITEMS = [assetFourteen, assetOne, assetSix, assetTen, assetThirteen, assetTwelve];

export const FURNITURE_ITEMS = [assetTwo, assetThree, assetFour, assetFive, assetSeven, assetEight, assetNine, assetEleven];

/** Fallback interior still if the split hero image is swapped programmatically later. */
export const HOME_HERO_ASSET = assetOne;

/** Three-up feature row directly under the hero (rounded cards + gradient overlay). */
export const HOME_FEATURE_CARDS: HomeFeatureCardType[] = [
  {
    index: 1,
    title: "Decorations",
    description: "Tailor-made pieces to fit your style.",
    asset: assetOne,
    imageAlt: "Interior decorations and curated styling",
  },
  {
    index: 2,
    title: "Furniture",
    description: "High quality furniture designed to last.",
    asset: assetThree,
    imageAlt: "Furniture and living space composition",
  },
];

// Treshold for scroll animation slider
export const SCROLL_THRESHOLD = 50;

// List of menu that exist in the header
export const MENU_ITEMS: MenuType[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About Us', href: '/about-us' },
];

// Local image imports keep the assets optimized by Next.js
export const slides: SlidesType[] = [
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

// List of Footer content
export const SOCIAL_LINKS: SocialLinkType[] = [
    { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

// Dashboard content text paragraphs
export const TEXT_DASHBOARD_CONTENT: string[] = [
  "Kaulu Concept delivers integrated solutions in architecture, interior design, and construction",
  "We approach each design project individually, we listen, explore and hone.",
  "We draw inspiration from our clients, creating environments that are personal and meaningful.",
];

export const EXPERTISE_ITEMS: ExpertiseType[] = [
  { asset: bannerOne,label: "Architectural Design", alt: "Functional & aesthetic building concepts tailored to lifestyle and business needs." },
  { asset: bannerTwo,label: "Interior Design", alt: "Modern, elegant interior solutions blending comfort and style." },
  { asset: bannerThree,label: "Construction Services", alt: "High-quality, efficient, and transparent project execution." },
  { asset: bannerFour,label: "Project Management", alt: "Ensuring every stage meets standards, timelines, and expectations." },
];

export const WHY_CHOOSE_US: TitleDescType[] = [
  {
    title: "End-to-End Services",
    description: "Holistic partnership from concept through handover.",
  },
  {
    title: "Professional & Certified Teams",
    description: "Cross-disciplinary experts aligned around your goals.",
  },
  {
    title: "Detail-Oriented Execution",
    description: "Meticulous coordination so every touchpoint feels intentional.",
  },
  {
    title: "Transparent Process",
    description: "Clear milestones, proactive updates, no surprises.",
  },
  {
    title: "Modern & Timeless Designs",
    description: "Spaces that feel current today and enduring tomorrow.",
  },
];

export const LIST_SERVICES: TitleDescType[] = [
  {
    title: "Architectural Design",
    description: "Concept development, planning, and building design with a strong emphasis on practicality and aesthetics.",
  },
  {
    title: "Interior Design",
    description: "Customized interiors that elevate daily living and create meaningful experiences.",
  },
  {
    title: "Construction",
    description: "Reliable construction services delivering quality, durability, and precision.",
  },
  {
    title: "Project Management",
    description: "Monitoring timelines, budgets, and execution standards to ensure smooth project delivery.",
  },
];

export const CORE_VALUES: TitleDescType[] = [
  {
    title: "Integrity",
    description: "Honest communication and transparent processes.",
  },
  {
    title: "Innovation",
    description: "Modern design thinking rooted in function.",
  },
  {
    title: "Precision",
    description: "Detailed planning and flawless execution.",
  },
  {
    title: "Sustainability",
    description: "Environmentally conscious principles.",
  },
];

export const PORTFOLIO_ITEMS: SlidesType[] = [
  {
    alt: "Kaulu Concept portfolio showcase",
    asset: portfolioOne,
  },
  {
    alt: "Kaulu Concept portfolio showcase",
    asset: portfolioTwo,
  },
  {
    alt: "Kaulu Concept portfolio showcase",
    asset: portfolioThree,
  },
  {
    alt: "Kaulu Concept portfolio showcase",
    asset: portfolioFour,
  },
  {
    alt: "Kaulu Concept portfolio showcase",
    asset: portfolioFive,
  },
  {
    alt: "Kaulu Concept portfolio showcase",
    asset: portfolioSix,
  },
  {
    alt: "Kaulu Concept portfolio showcase",
    asset: bannerOne,
  },
  {
    alt: "Kaulu Concept portfolio showcase",
    asset: bannerTwo,
  },
  {
    alt: "Kaulu Concept portfolio showcase",
    asset: bannerThree,
  },
  {
    alt: "Kaulu Concept portfolio showcase",
    asset: bannerFour,
  },
];
