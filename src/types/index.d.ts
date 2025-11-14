import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export type slidesType = {
    alt: string;
    asset: StaticImageData;
}

export type menuTypes = {
    label: string;
    href: string;
}

export type socialLinksTypes = {
    icon: IconType;
    href: string;
    label: string;
}