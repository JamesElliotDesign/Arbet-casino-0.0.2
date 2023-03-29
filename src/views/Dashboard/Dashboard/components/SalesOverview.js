// Chakra imports
import { Button, Icon, Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const SalesOverview = ({ title, percentage, chart, image }) => {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card p='28px 10px 16px 0px' mb={{ sm: "26px", lg: "0px" }}>
      <CardHeader mb='20px' pl='22px'>
        <Flex direction='column' alignSelf='flex-start'>
          <Text fontSize='lg' color={textColor} fontWeight='bold' mb='6px'>
            {title}
          </Text>
        </Flex>
        
          
      </CardHeader>
      <Box w='100%' h={{ sm: "300px" }} ps='20px' pr='10px'>
      {image}
      </Box>
    </Card>
  );
};

export default SalesOverview;
