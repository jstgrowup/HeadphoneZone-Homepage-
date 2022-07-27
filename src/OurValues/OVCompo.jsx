import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";

export default function OVCompo({ num, text1, text2 }) {
  return (
    <>
      <Box display={"flex"} flexDirection="column" justifyContent={"center"}>
        <Center>
          <Heading>{num}</Heading>
        </Center>
        <Flex flexDirection={"column"} alignItems="center" >
          <Text>{text1}</Text>
          <Text>{text2}</Text>
        </Flex>
      </Box>
    </>
  );
}
