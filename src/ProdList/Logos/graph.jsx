import { Box } from "@chakra-ui/react";

export default function Graph() {
  return (
    <>
      <Box>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <path
            fill="#444"
            d="M15 5.2h5V18h-5zM7.5 8.1h5V18h-5zM0 5.2h5V18H0z"
          ></path>
        </svg>
      </Box>
    </>
  );
}
