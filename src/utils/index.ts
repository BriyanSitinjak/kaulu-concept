import { FadeInUpOptions } from "@/types";

/**
 * Creates a reusable fadeInUp animation configuration for framer-motion
 * @param options - Animation options
 * @param options.shouldReduceMotion - Whether to respect reduced motion preference (default: false)
 * @param options.delay - Animation delay in seconds (default: 0)
 * @param options.duration - Animation duration in seconds (default: 0.8)
 * @param options.y - Initial y offset in pixels (default: 30)
 * @returns Framer Motion animation props object that can be spread into motion components
 */
export const fadeInUp = (options: FadeInUpOptions = {}) => {
  const {
    shouldReduceMotion = false,
    delay = 0,
    duration = 0.8,
    y = 30,
  } = options;

  const reduceMotion = shouldReduceMotion ?? false;

  return {
    initial: reduceMotion ? { opacity: 1 } : { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : duration,
      delay,
    },
  };
};