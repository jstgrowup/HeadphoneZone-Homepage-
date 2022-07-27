import { useState } from "react";
import { createContext } from "react";
export const AppContext = createContext();
export default function AppContextProviderComponent({ children }) {
  const [state, setState] = useState("dark");

  const toggleState = () => {
    setState(state === "dark" ? "light" : "dark");
  };

  return (
    <AppContext.Provider value={[state, toggleState]}>
      {children}
    </AppContext.Provider>
  );
}
