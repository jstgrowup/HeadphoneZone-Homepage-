import { Box, Flex, Text } from "@chakra-ui/react";
import "./Navbar.css";
export default function MiddleComp() {
  return (
    <Flex
      gap="8"
      align="center"
      fontFamily="Roboto,sans-serif"
      fontWeight="600"
    >
      <Text>Categories</Text>

      {/* <div class="dropdown">
        <h3>Brands</h3>
      </div>

      <div class="dropdown-content" id="abc">
        <h3>hey1</h3>
        <h3>hey2</h3>
        <h3>hey3</h3>
      </div> */}
      <Box className="dropdown">
        <Text className="dropbtn">Brands</Text>
      </Box>
      <Box className="dropdown-content" mt="100px" ml="-70px">
        <Text>hey1</Text>
        <Text>hey2</Text>
        <Text>hey3</Text>
      </Box>
      <Text>Price</Text>
      <Text>Deals</Text>
      <Text>HeadphoneFinder</Text>
      <Text>Events</Text>
      <Text>Forum</Text>
      <Text>Info</Text>
      <Text>HelpCenter</Text>
    </Flex>
  );
}
