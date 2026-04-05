
import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import { HOME_CONTENT_MAX_W } from "@/constants";

type WrapperProps = {
  children: ReactNode;
  /** Use when a full-viewport hero already sits above — avoids a double gap under the fixed header. */
  omitHeaderOffset?: boolean;
};

export default function Wrapper({ children, omitHeaderOffset = false }: WrapperProps) {
  return (
    <Box
      data-header-theme="light"
      justifySelf="center"
      margin="auto"
      maxW={HOME_CONTENT_MAX_W}
      w="100%"
      px={{ base: 4, md: 6 }}
      sx={{ width: "min(100%, 90vw)" }}
      mb={{ base: "100px", md: "80px" }}
      pt={omitHeaderOffset ? { base: 6, md: 8 } : "86px"}
    >
      {children}
    </Box>
  );
}
