import { Box, Image } from "@chakra-ui/react";
import Logo from "./Logo";
import MiddleComp from "./Middlecompo";
import Navthird from "./Navthird";
import "./Navbar.css"
export default function MainNav() {
  return (
    <>
      <Box
        border="1px"
        h="70px"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        color="#444444"
        fontSize="14px"
        bgColor="#e6e6e6"
        className="mainNav"
        cursor={"pointer"}

      >
        <Box height="100%" w="170px" display="flex" alignItems="center">
          <Logo />
        </Box>
        <Box>
          <MiddleComp />
        </Box>
        <Box>
          <Navthird />
        </Box>
      </Box>
    </>
  );
}
