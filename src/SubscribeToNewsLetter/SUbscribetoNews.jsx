import { Box, Image } from "@chakra-ui/react";
import SubscribeForm from "./subscribeForm";
import "./subscribe.css"
export default function SubscribeToNewsLetter(){
    return (

        <>
        <Box h={"451px"} border="2px">
     <Image className="image" src="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Newsletter_2000x.jpg?v=1643375292"></Image>
       <SubscribeForm  />

        </Box>
        
        
        </>
    )
}