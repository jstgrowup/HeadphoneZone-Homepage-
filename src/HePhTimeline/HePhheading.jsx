import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";

export default function HePhHeading() {
  return (
    <>
      <Box>
        <Center color={"#444444"}>
          <Flex flexDirection={"column"} alignItems='center' >
            <Text>OUR STORY OVER THE YEARS</Text>
            <Heading fontWeight={'800'}>HEADPHONE ZONE'S TIMELINE</Heading>
          </Flex>
        </Center>
      </Box>
    </>
  );
}
