import React from "react";
import { Flex } from "@chakra-ui/react";

export default function IconBox(props) {
  const { children, noBorderRadius, ...rest } = props;

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      borderRadius={noBorderRadius ? "0" : "12px"}
      {...rest}
    >
      {children}
    </Flex>
  );
}
