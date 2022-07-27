import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { Box } from "@chakra-ui/react";

export default function HePhSliderCompo() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,


        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        // responsive: [
        //   {
        //     breakpoint: 768,
        //     settings: {
        //       arrows: false,
        //       centerMode: true,
        //       centerPadding: '40px',
        //       slidesToShow: 3
        //     }
        //   },
        //   {
        //     breakpoint: 480,
        //     settings: {
        //       arrows: false,
        //       centerMode: true,
        //       centerPadding: '40px',
        //       slidesToShow: 1
        //     }
        //   }
        // ]
      };
  return (
    <>
      <Box m={"30px"} border="2px">
      <Slider {...settings}>
      < div style={{border:"1px solid red"}}>
        <h1>1</h1>
      </ div >
      < div style={{border:"1px solid red"}}>
        <h1>2</h1>
      </ div >
      < div style={{border:"1px solid red"}}>
        <h1>3</h1>
      </ div >
      < div style={{border:"1px solid red"}}>
        <h1>4</h1>
      </ div >
      
    </Slider>

      </Box>
    </>
  );
}
