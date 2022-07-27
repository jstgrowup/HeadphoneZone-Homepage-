import { Flex,Text } from "@chakra-ui/react";

export default function Navthird() {
  return (
    <Flex
      gap="10"
      align="center"
      fontFamily="Roboto,sans-serif"
      fontWeight="600"
    >
      <Text>Search</Text>
      <Text>Login</Text>
      <Text>Cart</Text>
    </Flex>
  );
}
