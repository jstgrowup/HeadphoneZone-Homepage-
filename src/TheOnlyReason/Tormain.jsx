import { Box, Center, Image } from "@chakra-ui/react";

export default function Tormain({ img }) {
  return (
    <>
      <Box >
        <Center>
          <Image src={img}></Image>
        </Center>
      </Box>
    </>
  );
}
