import React from 'react';

import { Flex } from '@chakra-ui/react';

interface WrapperProps {
  variant?: "small" | "regular";
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = "small",
}) => {
  return (
    <Flex
      // mt={8}
      mx="auto"
      // alignItems="center"
      // maxW={variant === "regular" ? "800px" : "400px"}
      // width={["100%", "100%", "100%","100%"]}
      // minW={["100vw","75vw","50vw","25vw"]}
      // h="100%"
    >
      {children}
    </Flex>
  );
};
