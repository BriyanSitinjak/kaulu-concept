'use client'

import { slides } from "@/constants"
import { Box } from "@chakra-ui/react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"


export default function Banner() {
    // Track which image is visible
    const [activeIndex, setActiveIndex] = useState(0)
    // Respect OS-level “reduce motion” preference
    const shouldReduceMotion = useReducedMotion()
    const hasMultipleSlides = slides.length > 1

    useEffect(() => {
        if (shouldReduceMotion || !hasMultipleSlides) {
            return
        }

        const timer = window.setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % slides.length)
        }, 5000)

        return () => window.clearInterval(timer)
    }, [shouldReduceMotion, hasMultipleSlides])

    // Pick the current slide once per render
    const currentSlide = slides[activeIndex]

    return (
        <Box
            position="relative"
            w="100%"
            h="100vh"
            overflow="hidden"
            role="region"
            aria-label="Kaulu Concept feature highlights"
        >
            {/* AnimatePresence fades slides in/out smoothly */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide.asset.src}
                    style={{
                        position: "absolute",
                        inset: 0,
                    }}
                    initial={
                        shouldReduceMotion
                            ? { opacity: 1 }
                            : { opacity: 0, scale: 1.05 }
                    }
                    animate={{ opacity: 1, scale: 1 }}
                    exit={
                        shouldReduceMotion
                            ? { opacity: 1 }
                            : { opacity: 0, scale: 0.97 }
                    }
                    // Motion props must use plain JS objects
                    transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: "easeInOut" }}
                >
                    {/* next/image handles responsive, optimized loading */}
                    <Image
                        priority={activeIndex === 0}
                        src={currentSlide.asset}
                        alt={currentSlide.alt}
                        fill
                        sizes="100vw"
                        style={{
                            objectFit: "cover",
                        }}
                    />
                </motion.div>
            </AnimatePresence>

            {hasMultipleSlides && (
                <Box
                    position="absolute"
                    bottom={{ base: 6, md: 10 }}
                    left={{ base: 6, md: 10 }}
                    display="flex"
                    gap={3}
                    zIndex={1}
                    aria-hidden="true"
                >
                    {slides.map((_, index) => {
                        const isActive = index === activeIndex

                        return (
                            <motion.div
                                key={slides[index].asset.src}
                                style={{
                                    borderRadius: "9999px",
                                    height: "10px",
                                    backgroundColor: "rgba(14, 18, 24, 0.898)",
                                }}
                                initial={false}
                                animate={{
                                    width: isActive ? 18 : 10,
                                    opacity: isActive ? 1 : 0.5,
                                }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                            />
                        )
                    })}
                </Box>
            )}
        </Box>
    )
}