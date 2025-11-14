
import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      justifySelf="center"
      maxW="80vw"
      w="100%"
      mb="60px"
      pt="66px"
    >
      {children}
    </Box>
  );
}
