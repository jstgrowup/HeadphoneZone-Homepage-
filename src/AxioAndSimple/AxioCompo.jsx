import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function AxioComopo({ img, Head1, Head2, text }) {
  // console.log(text);
  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="center"
        color="#595959"

      >
        <Image src={img} h="80px" w="300px"></Image>
        <Heading fontFamily="'Anton', sans-serif" fontSize="25px">{Head1}</Heading>
        <Heading fontFamily="'Anton', sans-serif" fontSize="25px">{Head2}</Heading>
        {text.map((el,i) => (
           
          <Text key={i}>{el}</Text>
        ))}
      </Flex>
    </>
  );
}
