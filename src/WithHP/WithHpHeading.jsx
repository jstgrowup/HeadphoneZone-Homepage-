import { Center, Flex, Heading } from "@chakra-ui/react";

export default function HeadingWithHp() {
  return (
    <>
      <Center>
        <Flex flexDirection={"column"} alignItems="center" color={"#444444"}>
          <Heading> Headphone Zone takes care of all customer queries</Heading>
          <Heading>between the buyer and the product.</Heading>
        </Flex>
      </Center>
    </>
  );
}
