import React from 'react';

import {
  Box,
  useRadio,
} from '@chakra-ui/react';

// 1. Create a component that consumes the `useRadio` hook
export function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        _checked={{
          bg: "primary.300",
          color: "white",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        p="1"
        fontSize="sm"
      >
        {props.children}
      </Box>
    </Box>
  );
}
