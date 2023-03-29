import { QuestionIcon } from "@chakra-ui/icons";
import SidebarHelpImage from "assets/img/SidebarHelpImage.png";
import { Separator } from "components/Separator/Separator";
import IconBox from "components/Icons/IconBox";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Flex,
  Icon,
  Link,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

export function SidebarHelp(props) {
  // Pass the computed styles into the `__css` prop
  const { children, ...rest } = props;
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
                justifyContent="space-between"
                alignItems="center"
                mb="24px"
              >
                <Button 
                fontSize="10px"
                fontWeight="bold"
                w="40%"
                bg="white"
                _hover="none"
                _active={{
                  bg: "white",
                  transform: "none",
                  borderColor: "transparent",
                }}
                _focus={{
                  boxShadow: "none",
                }}
                color="black"
                onClick={toggleColorMode}>
                  Toggle {colorMode === "light" ? "Dark" : "Light"}
                </Button>
                
      
    </Flex>
  );
}
