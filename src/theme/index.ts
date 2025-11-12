import { createSystem, defaultConfig } from "@chakra-ui/react";

const theme = createSystem(
  defaultConfig,
  {
    theme: {
      tokens: {
        colors: {
          brand: {
            50: { value: "#e3f2ff" },
            100: { value: "#b3d4ff" },
            500: { value: "#3182ce" },
            700: { value: "#2b6cb0" },
          },
        },
        fonts: {
          heading: { value: "'Poppins', sans-serif" },
          body: { value: "'Inter', sans-serif" },
        },
      },
    },
  }
);

export default theme;
