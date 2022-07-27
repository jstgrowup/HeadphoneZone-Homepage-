import { Box, Image } from "@chakra-ui/react";

export default function IndicompoWHP({ img }) {
  return (
    <>
      <Box>
        <Image src={img} w="110px" opacity={"0.6"}></Image>
      </Box>
    </>
  );
}
