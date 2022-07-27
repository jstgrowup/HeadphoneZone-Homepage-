import { Box, Image } from "@chakra-ui/react";

export default function IndiHP({ img }) {
  return (
    <>
      <Box w="453px" h="320px">
        <Image
          src={img}
          objectFit="cover"
          h={"100%"}
          w="100%"
          borderRadius={"1.5rem"}
        />
      </Box>
    </>
  );
}
