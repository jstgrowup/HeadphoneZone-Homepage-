import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import "./Confused.css";
export default function Confused() {
  return (
    <>
      <Center>
        <Image
          src="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Finder-New_1400x.jpg?v=1655447696"
          w="100%"
          className="image"
        />
        <Center
          className="text"
          h="400px"
          w="500px"
          borderRadius="13px"
          backgroundColor="white"
        >
          <Flex
            flexDirection="column"
            mt="-70px"
            alignItems="center"
            color="#595959"
          >
            <Heading>CONFUSED? USE</Heading>
            <Heading>OUR HEADPHONE</Heading>
            <Heading>FINDER</Heading>
            <Text>Find the perfect headphone in less than 5 steps</Text>
            <Button
              size="lg"
              mt="20px"
              borderRadius="5rem"
              backgroundColor="#3c07ff"
              color="white"
              fontSize="18px"
              fontWeight="700"
            >
              TAKE THE QUIZ
            </Button>
          </Flex>
        </Center>
      </Center>
    </>
  );
}
