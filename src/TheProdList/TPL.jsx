import { Box, Center, Flex } from "@chakra-ui/react";
import { useState, useContext } from "react";
import TPLbutton from "./TPLbutton";
import { AppContext } from "./AppContext";
export default function TPL() {
  const [theme, toggleTheme] = useContext(AppContext);
  const [state, updateState] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  });

  return (
    <>
      <Center>
        <Flex
          mt="60px"
          h="50px"
          w="70%"
          justifyContent="space-around"
          fontFamily="'Anton', sans-serif"
        >
          <TPLbutton
            data={state.one && true}
            title="DEALS OF THE MONTH"
            icon="💰"
            onClick={() => updateState({ ...state, one: !state.one })}
          />
          <TPLbutton
            data={state.two && true}
            title="TRENDING IN DOWN"
            icon="🔥"
            onClick={() => updateState({ ...state, two: !state.two })}
          />
          <TPLbutton
            data={state.three && true}
            title="NEW LAUNCHES"
            icon="🚀"
            onClick={() => updateState({ ...state, three: !state.three })}
          />
          <TPLbutton
            data={state.four && true}
            title="WFH"
            icon="📞"
            onClick={() => updateState({ ...state, four: !state.four })}
          />
          <TPLbutton
            data={state.five && true}
            title="UNBOXED"
            icon="📦"
            onClick={() => updateState({ ...state, five: !state.five })}
          />
        </Flex>
      </Center>
    </>
  );
}
