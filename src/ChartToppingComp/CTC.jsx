import { Heading, Center, Box, Flex } from "@chakra-ui/react";

export default function ChartTopping() {
  return (
    <>
      <Center
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt="60px"
      >
        <Heading
          fontFamily="'Anton', sans-serif"
          fontSize="28px"
          fontWeight="800"
          color="#595959"
        >
          CHART TOPPING HEADPHONES
        </Heading>
        <Flex>
            <Box></Box>
            <Box></Box>
            <Box></Box>
        </Flex>
      </Center>
    </>
  );
}
