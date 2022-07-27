import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import "./HZ.css";
export default function HZexperience() {
  return (
    <>
      <Box h="auto" mt={"40px"}>
        <Box boxSize={"568px"} className="divimage">
          <Image
            h="100%"
            w={"100%"}
            borderRadius="20px"
            src="https://cdn.shopify.com/s/files/1/0153/8863/files/exp-studio-image-Vinette_800x.jpg?v=1645004055"
          />
        </Box>
        <Box
          w="937px"
          h="750px"
          borderRadius="20px"
          borderColor="blackAlpha.700"
          className="boxingdiv"
          bg="#E6E6E6"
        >
          <Center ml="200px">
            <Flex
              flexDirection={"column"}
              justifyContent="center"
              mt="250px"
              color={"#444444"}
            >
              <Text p={"10px"}>INTRODUCING</Text>
              <Box p={"10px"}>
                <Heading>HEADPHONE ZONE</Heading>
                <Heading>EXPERIENCES</Heading>
              </Box>

              <Box p={"10px"}>
                <Text>
                  Headphone Zone Experiences are curated listening sessions that
                  are hosted by
                </Text>
                <Text>
                  audiophiles, that bring together India's most passionate and
                  discerning music
                </Text>
                <Text>
                  listeners with one simple aim - to Rediscover music.
                </Text>
              </Box>
              <Button
                w={"150px"}
                borderRadius="20px"
                bg={"#3C07FF"}
                color="white"
                fontWeight={"700"}
              >
                EXPLORE NOW
              </Button>
            </Flex>
          </Center>
        </Box>
      </Box>
    </>
  );
}
