import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { Box, Button, Heading, Image, Spacer } from "@chakra-ui/react";
import "./third.css";
export default function ThirdSliderOnClick() {
  let settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2500,
    slideToShow: 1,
    cssEase: "linear",
    
  };

  return (
    <>
      <Box bg="black" h="680px" className="mainBox">
        <Slider {...settings}>
          <Box>
            <Image src="https://cdn.shopify.com/s/files/1/0153/8863/files/HeadphoneZone-HifimanHE400SE-HipDAC2-HeadphoneZoneCable_Desktop_2000x.jpg?v=1643108117"></Image>
          </Box>
          <Box>
            <Image src="https://cdn.shopify.com/s/files/1/0153/8863/files/DSC03503_2000x.jpg?v=1645189799"></Image>
          </Box>
          <Box>
            <Image src="https://cdn.shopify.com/s/files/1/0153/8863/files/HeadphoneZone-Beyer-DT990-Topping-L30_Desktop_2000x.jpg?v=1643105524"></Image>
          </Box>
        </Slider>
      </Box>
    </>
  );
}
