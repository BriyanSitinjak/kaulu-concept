
import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      justifySelf="center"
      margin="auto"
      maxW="80vw"
      w="100%"
      mb={{base: "100px", md: "80px"}}
      pt="86px"
    >
      {children}
    </Box>
  );
}
