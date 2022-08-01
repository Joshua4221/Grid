import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../lib/GlobalStyle/globalstyle";
import { theme } from "../lib/theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState(false);

  const current = state ? theme.ColorDarkMode : theme.ColorLightMode;

  const HandleThemeProvider = () => {
    setState(!state);
  };

  return (
    <ThemeProvider theme={current}>
      <GlobalStyles />
      <Component {...pageProps} onclick={HandleThemeProvider} />
    </ThemeProvider>
  );
}

export default MyApp;
