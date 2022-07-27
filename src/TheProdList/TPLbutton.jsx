import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { useState } from "react";
import { AppContext } from "./AppContext";
import "./TPL.css";
 const styles = {
  dark: {
    color: "white",
    background: "gray",
  },
  light: {
    background: "#3c07ff",
    color: "black",
  },
};
export default function TPLbutton({ icon, title,onClick,data }) {
  const [theme] = useContext(AppContext);
 
  return (
    <>
      <Button
        style={data?styles.dark:styles.light}
        rightIcon={icon}
        fontWeight="700"
        borderRadius="3xl"
       
        onClick={onClick}>
        {title}
      </Button>
    </>
  );
}

// ("#3c07ff");
