import React, { useContext } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { ThemeContext } from "../context/ThemeProvider";
const themes = {
  dark: {
    background: "#272823",
    title: "#6495ed",
    text: "#fff",
  },
  light: {
    background: "#fff",
    title: "#ff6347",
    text: "#000",
  },
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    transition: all 0.5s;
  }
`;

type Props = {
    children?: React.ReactNode
  };

const Theme: React.FC<Props> = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
     // @ts-ignore
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;