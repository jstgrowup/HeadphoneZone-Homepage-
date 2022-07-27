import { Box, Image } from "@chakra-ui/react";
import CABoxcompo from "./CaBoxcompo";

export default function ClubAudiophile() {
  return (
    <>
      <Box h="387px" bg={"rgb(68,68,68)"} display="flex" alignItems={"center"} justifyContent="space-evenly">
        <Image  src="https://cdn.shopify.com/s/files/1/0153/8863/files/Club_Audiophile_Logos-400-200_400x.png?v=1640072704"></Image>
        <CABoxcompo/>
      </Box>
    </>
  );
}
