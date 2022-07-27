import { Box, Flex } from "@chakra-ui/react";
import IndiNL from "./IndiNL";
import Remaining from "./remaining";

export default function NEWLaunch() {
  return (
    <>
      <Flex gap="20" margin="40px">
        <IndiNL />
        <Remaining
          img="https://cdn.shopify.com/s/files/1/0153/8863/files/Fiio_-_M17Pro_NewArrivalsBanner_1_600x.jpg?v=1655193794"
          title="FIIO-M17"
          heading="MEET THE BIG DADDY"
        />
        <Remaining
          img="https://cdn.shopify.com/s/files/1/0153/8863/files/64Audio-Duo_NewArrivalsBanner_fdc2eaeb-aa36-4b6a-9e26-d4982f226286_600x.jpg?v=1654680319"
          heading="PERFECT MATCH MADE"
          title="64 AUDIO-DUO"
        />
      </Flex>
    </>
  );
}
