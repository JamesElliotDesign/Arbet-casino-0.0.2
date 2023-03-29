// Chakra imports
import {
  Flex,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
// assets
import Smartcontract from "assets/img/Smartcontract.png";
import logoChakra from "assets/svg/logo-white.svg";
import Lottery from "assets/img/Lotteryneon.png";
import abctoken from "assets/img/abctoken.png";
import Roulette from "assets/img/Roulette.png";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
// Custom Color
import { ChakraProvider } from '@chakra-ui/react';

// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import React from "react";
import { dashboardTableData, timelineData } from "variables/general";
import BuyTheCoin from "./components/BuyTheCoin";
import BuiltByDevelopers from "./components/BuiltByDevelopers";
import MiniStatistics from "./components/MiniStatistics";
import OrdersOverview from "./components/OrdersOverview";
import Projects from "./components/Projects";
import SalesOverview from "./components/SalesOverview";
import WorkWithTheRockets from "./components/WorkWithTheRockets";

export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");

  return (
   
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <Grid
        templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        my='26px'
        gap='24px'>
        <BuiltByDevelopers
          title={"Welcome"}
          name={"The Ultimate Web3 Casino"}
          description={
            "Step into the Future of Online Gambling with ArBet Protocol DApp: Try Your Luck and Play the Lottery or Spin the Roulette, Blackjack, Slots, and Poker to Score Huge Rewards. Join the Revolution Today and Claim Your Chance to Win Big!"
          }
          image={
            <Image
              src={Lottery}
              alt='ABC Lottery'
              minWidth={{ md: "300px", lg: "auto" }}
            />
          }
        />
        <WorkWithTheRockets
          backgroundImage={Smartcontract}
          title={"Our Unique Smart Contract"}
          description={
            "ArBet's smart contract allows users to play lottery and gambling games with the ABC token. Participants must buy at least 0.1 ETH worth of tokens, and the contract automatically pays out the jackpot in ETH. The last buyer within a 10-minute window wins the prize."
          }
        />
      </Grid>
      <Grid
        templateColumns={{ md: "1fr", lg: "1.8fr 0.8fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        my='26px'
        gap='24px'>
        <BuyTheCoin
        image={
          <Image
            src={abctoken}
            alt='ABC Token'
            minWidth={{ md: "300px", lg: "auto" }}
          />
        }
          name={"How to Get the ABC Token"}
          description={
            "To start playing with ABC tokens, you can buy them on Sushi Swap, a popular decentralized exchange that ensures fast and secure transactions. By using ABC tokens, you'll enjoy several benefits such as reduced fees, exclusive promotions, and much more. What's more, buying ABC tokens is an investment in the future of Arbet Web3 Casino. As we continue to grow and develop new games and features, the value of the ABC token is likely to increase, providing you with even more benefits in the long run."
          }
          
        />
        <SalesOverview
          title={"Play Roulette Now"}
          image={
            <Image
              src={Roulette}
              alt='Play Roulette'
              minWidth={{ md: "300px", lg: "auto" }}
            />
          }
        />
      </Grid>
    </Flex>
  );
}
