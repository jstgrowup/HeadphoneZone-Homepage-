import { Box, Flex, Image, Stack } from "@chakra-ui/react";
import IndiProd from "./IndiProd";
import Battery from "./Logos/Battery";
import Bluetooth from "./Logos/Bluetooth";
import Built from "./Logos/Built";
import ClosedBack from "./Logos/ClosedBack";
import Drop from "./Logos/Drop";
import DynamicDriver from "./Logos/DynamicDrivers";
import Flatgraph from "./Logos/FlatGraph";
import Graph from "./Logos/graph";
import MMCX from "./Logos/MMCX";
import NeedsAppl from "./Logos/NeedsAppl";
import OpenBack from "./Logos/OpenBack";
import Qualcom from "./Logos/Qualcom";
import Roads from "./Logos/Roads";

export default function ProdList() {
  return (
    <>
      <Stack direction={["column", "row"]} spacing="20px" fontFamily="'Anton', sans-serif">
        <Box
          
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <IndiProd
            strikedprice="₹19,999"
            price="9900"
            title="LYPERTEK - PUREPLAY Z7"
            des="True Wireless Earbuds with 1 DD + 2 BA Drivers"
            img="https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Lypertek-Pureplay-Z7-012_300x.jpg?v=1626431708"
          />
          <Flex gap="4">
            <Graph />
            <Bluetooth />
            <Drop />
            <Qualcom />
            <Roads />
            <Battery />
          </Flex>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <IndiProd
            strikedprice="₹29,999"
            price="19900"
            title="SENNHEISER - IE 300"
            des="In-Ears With 1 Dynamic Driver"
            img="https://cdn.shopify.com/s/files/1/0153/8863/products/Sennheiser-IE300-01_300x.jpg?v=1616396163"
          />
          <Flex gap="4">
            <Graph />
            <MMCX />
          </Flex>
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center">
          <IndiProd
            strikedprice="₹39,999"
            price="29900"
            title="SENNHEISER - HD 660 S"
            des="Open-Back Headphone"
            img="https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Sennheiser-HD-660-S-1160-1160-2_300x.jpg?v=1593681951"
          />
          <Flex gap="4">
            <Graph />
            <DynamicDriver />
            <OpenBack />
            <NeedsAppl />
          </Flex>
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center">
          <IndiProd
            strikedprice="₹29,999"
            price="24990"
            title="HIFIMAN - SUNDARA (2021)"
            des="Planar Magnetic Open-Backs"
            img="https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-HiFiMAN-Sundara-1160-1160-2_300x.jpg?v=1592332661"
          />

          <Flex gap="4">
            <Graph />
            <DynamicDriver />
            <OpenBack />
            <Built />
          </Flex>
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center">
          <IndiProd
            strikedprice="₹17,800"
            price="10990"
            title="BEYERDYNAMIC - DT 770 PRO"
            des="Closed-Back Studio Headphone"
            img="https://cdn.shopify.com/s/files/1/0153/8863/products/beyerdynamic-dt-770-pro-headphone-zone-13980464185407_300x.jpg?v=1579662488"
          />

          <Flex gap="4">
            <Flatgraph />
            <DynamicDriver />
            <ClosedBack />
            <NeedsAppl />
          </Flex>
        </Box>
      </Stack>
    </>
  );
}
