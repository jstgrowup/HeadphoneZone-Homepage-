import { Box, Center, Flex, Grid } from "@chakra-ui/react";
import SeeAll from "./SeeallBtn";
import Tormain from "./Tormain";
import TORtext from "./TORtext";

export default function TheOnly() {
  return (
    <>
      <Box h="auto"  backgroundColor="#E6E6E6" >
        <Center mt="60px">
          <TORtext />
        </Center>
        <Grid
          templateColumns="repeat(8,1fr)"
          templateRows="repeat(4,1fr)"
          gap="6"
          margin="2rem"
        >
          <Tormain img="https://cdn.shopify.com/s/files/1/0153/8863/files/64-audio-brand-logo-01.svg?v=1651151571" />
          <Tormain img="https://cdn.shopify.com/s/files/1/0153/8863/files/Astell_Kern_8f5669e1-010c-4b6b-b22c-89fb0cb352e0.svg?v=1646044152" />
          <Tormain img="https://cdn.shopify.com/s/files/1/0153/8863/files/Audeze_128dcfcb-ed9c-4500-b9f8-086dbb2b7e30.svg?v=1646044152" />
          <Tormain img="https://cdn.shopify.com/s/files/1/0153/8863/files/Audio_Technica-01.svg?v=1654154889" />
          <Tormain img="https://cdn.shopify.com/s/files/1/0153/8863/files/Beyerdynamic_29bbe9c6-55c8-4c94-b50f-e9a5fb9018aa.svg?v=1646044152" />
          <Tormain img="https://cdn.shopify.com/s/files/1/0153/8863/files/Burson_Audio-01.svg?v=1654155216" />
          <Tormain img="https://cdn.shopify.com/s/files/1/0153/8863/files/Campfire_Audio_f4d6118f-df2a-4a11-b5e0-2aaabb346dfb.svg?v=1646044154" />
          <Tormain img="https://cdn.shopify.com/s/files/1/0153/8863/files/Chord_f212ab4e-b550-4239-b1c0-909fd3b5eb52.svg?v=1646044152" />
          <Tormain img="https://cdn.shopify.com/s/files/1/0153/8863/files/Comply-Logo-2020.svg?v=1585651039" />
          <Tormain img="https://cdn.shopify.com/s/files/1/0153/8863/files/Dan_Clark_Audio.svg?v=1646044152" />
          <Tormain img="https://cdn.shopify.com/s/files/1/0153/8863/files/Fiio.svg?v=1646044152" />
          <Tormain img="https://cdn.shopify.com/s/files/1/0153/8863/files/Final.svg?v=1646044152" />
          <Tormain img="https://cdn.shopify.com/s/files/1/0153/8863/files/Focal_003ae22c-96f4-43b3-b7c0-4895fb6da6fe.svg?v=1646044152" />
          <Tormain img="https://cdn.shopify.com/s/files/1/0153/8863/files/Grado-Brand-Logo-1.svg?v=1654154366" />
          <Tormain img="https://cdn.shopify.com/s/files/1/0153/8863/files/HifiMan_bacabd18-7e7a-421b-beb3-08ca32a868c1.svg?v=1646044152" />
          <Tormain img="https://cdn.shopify.com/s/files/1/0153/8863/files/ifi.svg?v=1646044152" />
          <Tormain img="https://cdn.shopify.com/s/files/1/0153/8863/files/Jabra-Logo-2020-1.svg?v=1589521217" />
          <Tormain img="https://cdn.shopify.com/s/files/1/0153/8863/files/Brand_Logos-36-KZ.svg?v=1614287892" />
          <Tormain img="https://cdn.shopify.com/s/files/1/0153/8863/files/Lypertek.svg?v=1646044152" />
          <Tormain img="https://cdn.shopify.com/s/files/1/0153/8863/files/Moondrop-Brand-Logos.svg?v=1615958122" />
          <Tormain img="https://cdn.shopify.com/s/files/1/0153/8863/files/Noble-Audio-Logo-2020.svg?v=1587027275" />
          <Tormain img="https://cdn.shopify.com/s/files/1/0153/8863/files/Schiit-Logo-2020.svg?v=1587027275" />
          <Tormain img="https://cdn.shopify.com/s/files/1/0153/8863/files/Brand_Logos-52-Shanling.svg?v=1587118539" />
          <Tormain img="https://cdn.shopify.com/s/files/1/0153/8863/files/Shure-brand-logo-1.svg?v=1615988699" />
          <Tormain img="https://cdn.shopify.com/s/files/1/0153/8863/files/Sony_21fd1626-ace5-4fee-8fbf-de942c90fa45.svg?v=1646044152" />
          <Tormain img="https://cdn.shopify.com/s/files/1/0153/8863/files/Stax_b2459c25-6e6d-4221-bdf7-6c8f8ee320b6.svg?v=1646044152" />
          <Tormain img="https://cdn.shopify.com/s/files/1/0153/8863/files/Thie-Audio-brand-logo-1.svg?v=1615988699" />
          <Tormain img="https://cdn.shopify.com/s/files/1/0153/8863/files/Topping.svg?v=1646044152" />
          <Tormain img="https://cdn.shopify.com/s/files/1/0153/8863/files/Vision_Ears.svg?v=1646044152" />
          <Tormain img="https://cdn.shopify.com/s/files/1/0153/8863/files/V-moda-Logo-2022.svg?v=1651666403" />
        </Grid>
        <Center>

        <SeeAll/>
        </Center>
      </Box>
    </>
  );
}
