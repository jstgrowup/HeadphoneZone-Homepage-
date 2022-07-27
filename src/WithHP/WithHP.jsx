import { Box, Center, Flex } from "@chakra-ui/react";
import HePhHeading from "../HePhTimeline/HePhheading";
import IndicompoWHP from "./IndicompoWHP";
import HeadingWithHp from "./WithHpHeading";

export default function WithHP() {
  return (
    <>
      <Box
        h={"404px"}
      
        display={"flex"}
        alignItems="center"
        flexDirection={"column"}
        justifyContent="center"
        bg={"#E6E6E6"}


      >
        <HeadingWithHp />
        <Center mt={"100px"} >
          <Flex gap={"20"}>
            <IndicompoWHP img="https://cdn.shopify.com/s/files/1/0153/8863/files/Artboard-2_150x.png?v=1645786582" />
            <IndicompoWHP img="https://cdn.shopify.com/s/files/1/0153/8863/files/Artboard_6_150x.png?v=1645786123" />
            <IndicompoWHP img="https://cdn.shopify.com/s/files/1/0153/8863/files/Artboard_4_150x.png?v=1645786084" />
            <IndicompoWHP img="https://cdn.shopify.com/s/files/1/0153/8863/files/Artboard_1_150x.png?v=1645785899" />
            <IndicompoWHP img="https://cdn.shopify.com/s/files/1/0153/8863/files/Artboard_3_150x.png?v=1645785993" />
            <IndicompoWHP img="https://cdn.shopify.com/s/files/1/0153/8863/files/Artboard_5_62eaa197-8076-44be-aa02-b17c60c22246_150x.png?v=1645786064" />
          </Flex>
        </Center>
      </Box>
    </>
  );
}
