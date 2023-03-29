/*eslint-disable*/
import React from "react";
import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Wallet, SettingsIcon } from "components/Icons/Icons";

export default function Footer(props) {
  // const linkTeal = useColorModeValue("teal.400", "red.200");=
  return (
    <Flex
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent="space-between"
      px="30px"
      pb="20px"
    >
      <Text
        color="gray.400"
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}
      >
        &copy; {1900 + new Date().getYear()},{" "}
        <Text as="span">
          {document.documentElement.dir === "rtl"
            ? ""
            : "Arbet Web3 Casino"}
        </Text>
        
        
        
      </Text>
      <List display="flex">
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          <Link color="gray.400" href="https://medium.com/@arbetcasino">
            {document.documentElement.dir === "rtl"
              ? "Docs"
              : "Medium"}
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          <Link color="gray.400" href="https://t.me/ArBetCasino">
            {document.documentElement.dir === "rtl" ? "سيممبل" : "Telegram"}
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          <Link
            color="gray.400"
            href="https://twitter.com/arbetcasino"
          >
            {document.documentElement.dir === "rtl" ? "مدونة" : "Twitter"}
          </Link>
        </ListItem>
        <ListItem>
          <Link
            color="gray.400"
            href="https://discord.com/invite/wevpVzbm"
          >
            {document.documentElement.dir === "rtl" ? "رخصة" : "Discord"}
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}
