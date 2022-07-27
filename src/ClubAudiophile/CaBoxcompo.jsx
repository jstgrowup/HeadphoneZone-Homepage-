import { Box, Button, Heading, Text } from "@chakra-ui/react";

export default function CABoxcompo() {
  return (
    <>
      <Box color={"white"} w={"500px"} >
        <Heading fontWeight={"700"}>IT PAYS TO BE AN</Heading>
        <Heading fontWeight={"700"}>AUDIOPHILE</Heading>
        <Text mt={"20px"}>
          Enjoy Incredible Members-only rewards on the worlds finest headphones
          and earn loyality points on every purchase{" "}
        </Text>

        <Button
        mt={"20px"}
          size="lg"
          bg={"#FFCE00"}
          color={"rgb(68,68,68)"}
          borderRadius="2rem"
          fontWeight={"800"}
          fontSize={"13px"}
          
        >
          JOIN THE CLUB
        </Button>
      </Box>
    </>
  );
}
