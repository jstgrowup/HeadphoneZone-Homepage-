import { Box, Image } from "@chakra-ui/react";

export default function Medium({ img }) {
  return (
    <>
      <Box w={"700px"} h="320px">
        <Image src={img} h={"100%"} w="1100px" borderRadius={"1.5rem"}></Image>
      </Box>
    </>
  );
}
