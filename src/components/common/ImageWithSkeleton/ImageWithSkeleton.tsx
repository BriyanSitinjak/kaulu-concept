'use client';

import { Box } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";

interface ImageWithSkeletonProps {
  src: StaticImageData;
  alt: string;
  aspectRatio?: string;
  priority?: boolean;
  sizes?: string;
  borderRadius?: string;
  onHover?: {
    transform?: string;
    boxShadow?: string;
  };
}

export default function ImageWithSkeleton({
  src,
  alt,
  aspectRatio = "4/3",
  priority = false,
  // The 'sizes' attribute helps the browser determine which image size to download
  // based on the current viewport width:
  // - For screens up to 640px wide, use the image at 100% viewport width
  // - For screens up to 1024px wide, use 50% viewport width
  // - Otherwise, use 33% viewport width (for larger screens)
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  borderRadius = "2xl",
  onHover,
}: ImageWithSkeletonProps) {

  return (
    <Box
      position="relative"
      borderRadius={borderRadius}
      overflow="hidden"
      bg="gray.100"
      aspectRatio={aspectRatio}
      transition="transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s ease"
      _hover={onHover}
      cursor="default"
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        style={{
          objectFit: "cover",
          opacity: 1,
          transition: "opacity 0.4s ease",
        }}
        priority={priority}
      />
    </Box>
  );
}

