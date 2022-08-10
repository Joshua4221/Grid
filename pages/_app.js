import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../lib/GlobalStyle/globalstyle";
import { theme } from "../lib/theme";
import "../styles/globals.css";
import FooterComponent from "../Universal-Components/Footer";
import { FooterArray } from "../Util/Footer";
import Nav from "../Universal-Components/Nav";
import { NavArray } from "../Util/Nav";
import Home from ".";

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState(false);

  const current = state ? theme.ColorDarkMode : theme.ColorLightMode;

  const HandleThemeProvider = () => {
    setState(!state);
  };

  return (
    <ThemeProvider theme={current}>
      <GlobalStyles />
      <Nav navArray={NavArray} component={`${Component === Home && "home"}`} />
      <Component {...pageProps} onclick={HandleThemeProvider} />
      <FooterComponent footerArray={FooterArray} />
    </ThemeProvider>
  );
}

export default MyApp;
