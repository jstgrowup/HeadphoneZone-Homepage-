import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import OVCompo from "./OVCompo";

export default function OurValues() {
  return (
    <>
      <Box m={"20px"} fontFamily="Roboto,sans-serif">
        <Center>
          <Heading color={"#444444"}>OUR VALUES</Heading>
        </Center>
        <Flex
          gap={"15"}
          alignItems="center"
          justifyContent={"center"}
         
          p="1.2rem"
          fontSize={"14px"}
          color={"#444444"}
        >
          <OVCompo
            num={"01"}
            text1="WE'RE LADIES & GENTLEMEN SERVING "
            text2={"LADIES & GENTLEMEN"}
          />
          <OVCompo
            num={"02"}
            text1="WE CHOOSE TO BE THE BEST, RATHER"
            text2={"THAN THE BIGGEST"}
          />
          <OVCompo
            num={"03"}
            text1="WE'RE NOT A MUSIC COMPANY, BUT"
            text2={"MUSIC IS AT THE CORE OF WHAT WE DO"}
          />
          <OVCompo
            num={"04"}
            text1="WE'RE 100% OWNED, OPERATED AND"
            text2={"FUNDED BY PROUD INDIANS"}
          />
          <OVCompo
            num={"05"}
            text1="WE SUPPORT SMALL, INDEPENDENT"
            text2={"AND LOCAL BUSINESSES AND COMMUNITIES"}
          />
        </Flex>
      </Box>
    </>
  );
}
