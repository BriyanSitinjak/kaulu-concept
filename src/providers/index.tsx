"use client";

import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider value={theme}>
      {children}
    </ChakraProvider>
  );
}
