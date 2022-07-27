import { Image, Box, Text, Heading, Center, Flex } from "@chakra-ui/react";
import "./new.css";
export default function IndiNL() {
  return (
    <>
      <Center h="576px" w="450px"  borderRadius="10px">
        <Image
          src="https://cdn.shopify.com/s/files/1/0153/8863/files/Shanling-UA3_NewArrivalsBanner_600x.jpg?v=1658217171"
          className="image"
          h="100%"
          borderRadius="10px"
        />
        <Center
          className="text"
       
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Text color="white">SHANLING UA3</Text>
          {/* fontFamily="'Anton', sans-serif"
          fontWeight="800"
          fontSize="28px" */}
          <Heading
            color="white"
            fontWeight="800"
            fontFamily="'Anton', sans-serif"
            fontSize="30"
          >
            IMPRESSIVE,
          </Heading>
          <Heading
            color="white"
            fontWeight="800"
            fontFamily="'Anton', sans-serif"
            fontSize="30"
          >
            IMMERSIVE,
          </Heading>

          <Heading
            color="white"
            fontWeight="800"
            fontFamily="'Anton', sans-serif"
            fontSize="30"
          >
            IMPECCABLE
          </Heading>
        </Center>
      </Center>
    </>
  );
}
