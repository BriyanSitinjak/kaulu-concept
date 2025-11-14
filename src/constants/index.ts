import bannerOne from "@/assets/banner_one_kaulu_concept.jpeg";
import bannerTwo from "@/assets/banner_two_kaulu_concept.jpeg";
import bannerThree from "@/assets/banner_three_kaulu_concept.jpeg";
import bannerFour from "@/assets/banner_four_kaulu_concept.jpeg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { expertiseType, menuTypes, slidesType, socialLinksTypes, titleDescType } from "@/types";

// Treshold for scroll animation slider
export const SCROLL_THRESHOLD = 50;

// List of menu that exist in the header
export const MENU_ITEMS: menuTypes[] = [
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About Us', href: '/about-us' },
];

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

// List of Footer content
export const SOCIAL_LINKS: socialLinksTypes[] = [
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

export const EXPERTISE_ITEMS: expertiseType[] = [
  { asset: bannerOne,label: "Architectural Design", alt: "Functional & aesthetic building concepts tailored to lifestyle and business needs." },
  { asset: bannerTwo,label: "Interior Design", alt: "Modern, elegant interior solutions blending comfort and style." },
  { asset: bannerThree,label: "Construction Services", alt: "High-quality, efficient, and transparent project execution." },
  { asset: bannerFour,label: "Project Management", alt: "Ensuring every stage meets standards, timelines, and expectations." },
];

export const WHY_CHOOSE_US: titleDescType[] = [
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