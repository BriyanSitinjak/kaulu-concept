import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export type SlidesType = {
  alt: string;
  asset: StaticImageData;
};

export type MenuType = {
  label: string;
  href: string;
};

export type SocialLinkType = {
  icon: IconType;
  href: string;
  label: string;
};

export type ExpertiseType = SlidesType & {
  label: string;
};

export type TitleDescType = {
  title: string;
  description: string;
};

export type FadeInUpOptions = {
  shouldReduceMotion?: boolean | null;
  delay?: number;
  duration?: number;
  y?: number;
};

export type AnimatedCardGridProps = {
  items: TitleDescType[];
  initialDelay?: number;
  animationDuration?: number;
  columns?: {
    base?: number;
    md?: number;
    lg?: number;
  };
  spacing?: number;
};

export type PortfolioGridProps = {
  items: SlidesType[];
  columns?: {
    base?: number;
    sm?: number;
    lg?: number;
  };
  spacing?: number;
  initialDelay?: number;
  animationDuration?: number;
  priorityCount?: number;
};