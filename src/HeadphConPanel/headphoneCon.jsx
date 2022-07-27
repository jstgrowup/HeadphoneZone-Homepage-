import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import IndiHP from "./IndiHP";
import Medium from "./MediumSize";

export default function HeadPhn() {
  return (
    <>
      <Center>
        <Flex
          flexDirection={"column"}
          align="center"
          fontFamily="'Anton', sans-serif"
          color={"#444444"}
        >
          <Box
            p={"2rem"}
            display="flex"
            flexDirection={"column"}
            align="center"
          >
            <Heading>HEADPHONE CONNECT: INDIA'S PREMIER</Heading>
            <Heading>AUDIOPHILE COMMUNITY EVENT</Heading>
          </Box>

          <Text>
            Get ready to put on some headphones, grab your mugs and rediscover
            your favourite music like never before. With
          </Text>
          <Text>
            a lineup of the world's finest headphones, food, beverages, music
            and conversations to share with friends and
          </Text>
          <Text>strangers alike. Buy your Access Pass to a city near you!</Text>
        </Flex>
      </Center>
      <Box  m={"50px"}>
        <Flex gap={20}>
          <IndiHP
            img={
              "https://cdn.shopify.com/s/files/1/0153/8863/files/headphone-connect-homepage-1_600x.jpg?v=1655453190"
            }
          />
          <IndiHP
            img={
              "https://cdn.shopify.com/s/files/1/0153/8863/files/headphone-connect-homepage-2_600x.jpg?v=1655453347"
            }
          />
          <IndiHP
            img={
              "https://cdn.shopify.com/s/files/1/0153/8863/files/headphone-connect-homepage-3_600x.jpg?v=1655454038"
            }
          />
        </Flex>
        <Box  mt="60px">
          <Flex gap={"20"} >
            <Medium
              img={
                "https://cdn.shopify.com/s/files/1/0153/8863/files/headphone-connect-homepage-5_600x.jpg?v=1655459070"
              }
            ></Medium>
            <Medium
              img={
                "https://cdn.shopify.com/s/files/1/0153/8863/files/headphone-connect-homepage-7_600x.jpg?v=1655460480"
              }
            ></Medium>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
