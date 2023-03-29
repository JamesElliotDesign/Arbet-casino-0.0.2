// import
import Dashboard from "views/Dashboard/Dashboard";
import Tables from "views/Dashboard/Tables";
import Billing from "views/Dashboard/Billing";
import RTLPage from "views/Dashboard/RTL";
import Profile from "views/Dashboard/Profile";
import SignIn from "views/Auth/SignIn.js";
import SignUp from "views/Auth/SignUp.js";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
  Blackjack,
  Roulette,
  Slots,
  Poker,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Blackjack",
    icon: <Blackjack color="inherit" />,
    component: Tables,
    layout: "/admin",
  },
  {
    
    name: "Roulette (Coming Soon)",
    icon: <Roulette color="inherit" />,
    layout: "/admin",
  },
  {
  
    name: "Slot Machine (Coming Soon)",
    icon: <Slots color="inherit" />,
    layout: "/admin",
  },
  {
    name: "Poker (Coming Soon)",
    icon: <Poker color="inherit" />,
    layout: "/admin",
  },
  {
        path: "/signup",
        name: "ABC Lottery",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/admin",
  },
];
export default dashRoutes;
