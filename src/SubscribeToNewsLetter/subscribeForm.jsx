import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import "./subscribe.css"
export default function SubscribeForm() {
  return (
    <>
      <Box h={"290px"} w="492px" className="form">
        <Heading fontSize={"16px"} >SUBSCRIBE TO OUR NEWSLETTER</Heading>
        <Text mt={"20px"}>
          Sign up to join 1,00,000+ audiophiles & stay in the know with hacks,
          new launches, curated playlists & once-in-a-lifetime deals.
        </Text>
        <Flex mt={"20px"} gap="6">

        <Input size={"lg"} placeholder="Your e-mail"  borderRadius="20px"></Input>
        <Button size={"lg"} borderRadius="20px" fontSize={"15px"} bg="#3807ED" color={"white"}>SUBSCRIBE</Button>
        </Flex>
      </Box>
    </>
  );
}
