// Chakra imports
import {
  Button,
  Flex,
  Icon,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React from "react";
// react icons
import { BsArrowRight } from "react-icons/bs";

const BuyTheCoin = ({ title, name, description, image }) => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card minHeight='290.5px' p='1.2rem'>
      <CardBody w='100%'>
      <Flex
            bg='#213147'
            align='center'
            justify='center'
            borderRadius='15px'
            width={{ lg: "100%" }}
            minHeight={{ sm: "250px" }}>
            {image}
            
          </Flex>
        <Flex flexDirection={{ sm: "column", lg: "row" }} w='100%'>
          <Flex
            flexDirection='column'
            h='100%'
            lineHeight='1.6'
            width={{ lg: "90%" }}>
            
            <Text fontSize='lg' color={textColor} fontWeight='bold' pb='.5rem' pl='1.5rem' pt='0.5rem'>
              {name}
            </Text>
            <Text fontSize='sm' color='gray.400' fontWeight='normal' pl='1.5rem'>
              {description}
            </Text>
            <Spacer />
            <Flex align='center'>
              <Button
                p='0px'pl='1.5rem'
                variant='no-hover'
                bg='transparent'
                my={{ sm: "1.5rem", lg: "0px" }}>
                <a href='https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x4a3F610d6777Cd0da484e136AB30E07F09067511&chainId=42161' target='_blank' rel='noopener noreferrer'>
    <Text
      fontSize='sm'
      color={textColor}
      fontWeight='bold'
      cursor='pointer'
      transition='all .5s ease'
      my={{ sm: "1.5rem", lg: "0px" }}
      _hover={{ me: "4px" }}>
      Buy Now
    </Text>
               </a>
                <Icon
                  as={BsArrowRight}
                  w='20px'
                  h='20px'
                  fontSize='2xl'
                  transition='all .5s ease'
                  mx='.3rem'
                  cursor='pointer'
                  pt='4px'
                  _hover={{ transform: "translateX(20%)" }}
                />
              </Button>
            </Flex>
          </Flex>
          <Spacer />
          
        </Flex>
      </CardBody>
    </Card>
  );
};

export default BuyTheCoin;
