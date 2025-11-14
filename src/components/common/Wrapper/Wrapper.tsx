
import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      justifySelf="center"
      maxW="80vw"
      w="100%"
      mb="80px"
      pt="86px"
    >
      {children}
    </Box>
  );
}
