import { Button, Box, Center, Text, Heading } from "@chakra-ui/react";
export default function ViewMore() {
  return (
    <div>
      <Center mt="60px">
        <Button
          size="lg"
          bgColor="#3c07ff"
          color="white"
          fontWeight="700"
          borderRadius="3xl"
          fontSize="15px"
          fontFamily="'Anton', sans-serif"
        >
          {" "}
          VIEW MORE
        </Button>
      </Center>
      <Center mt="50px">
        <Text
          fontFamily="'Anton', sans-serif"
          fontWeight="600"
          color="#595959"
          fontSize="sm"
        >
          FRESH OFF THE BOAT, EXPLORE THE BEST IN AUDIOPHILIA RIGHT NOW
        </Text>
      </Center>
      <Center mt="30px">
        <Heading
          fontFamily="'Anton', sans-serif"
          fontWeight="800"
          fontSize="28px"
          color="#595959"
        >
          NEW LAUNCHES
        </Heading>
      </Center>
    </div>
  );
}
