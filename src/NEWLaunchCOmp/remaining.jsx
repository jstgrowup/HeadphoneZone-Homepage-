import { Image, Box, Text, Heading, Center, Flex } from "@chakra-ui/react";
import "./new.css";
export default function Remaining({ img, title, heading }) {
  return (
    <>
      <Center h="576px" w="450px" border="2px" borderRadius="10px">
        <Image src={img} className="image" h="100%" borderRadius="10px" />
        <Center
          className="text"
        //   border="2px"
          borderColor="white"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Text color="white">{title}</Text>
          {/* fontFamily="'Anton', sans-serif"
          fontWeight="800"
          fontSize="28px" */}
          <Heading
            color="white"
            fontWeight="800"
            fontFamily="'Anton', sans-serif"
            fontSize="30"
          >
            {heading}
          </Heading>
        </Center>
      </Center>
    </>
  );
}
