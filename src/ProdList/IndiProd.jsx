import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";


export default function IndiProd({ img, title, des,price,strikedprice }) {
  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Image src={img} />
          
        <Heading
          size="md"
          fontFamily="'Anton', sans-serif"
          fontSize="1xl"
          fontWeight="700"
          color="#595959"
        >
          {title}
        </Heading>
        <Text fontSize="sm" fontFamily="'Anton', sans-serif" textAlign="center" >
          {des}
        </Text>
        <Flex gap="3">

        <Text fontSize="lg" fontFamily="'Anton', sans-serif" color="blue.600" fontWeight="700" >{price}</Text>
        <Text as="s">{strikedprice}</Text>
        </Flex>
   
      </Box>
      {/* fontFamily="'Anton', sans-serif"
          fontSize="28px"
          fontWeight="800"
          color="#595959" */}

      <Box></Box>
    </>
  );
}
