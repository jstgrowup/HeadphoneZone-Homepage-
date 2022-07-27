import { Box } from "@chakra-ui/react";
import HePhHeading from "./HePhheading";
import HePhSliderCompo from "./HePhSliderCompo";

export default function HephTimeline() {
  return (
    <>
      <Box h={"800px"} border="2px">
        <HePhHeading />
        <HePhSliderCompo/>
      </Box>
    </>
  );
}
