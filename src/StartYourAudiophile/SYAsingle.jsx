import { Box, Image, Text } from "@chakra-ui/react";

export default function SYAsingle({ image, title }) {
  return (
    <Box h="100px" w="100px" border="1px" borderColor="black">
      <Box>
        {image}
      </Box>
      <Text>{title}</Text>
    </Box>
  );
}
