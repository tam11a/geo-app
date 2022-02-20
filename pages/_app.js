import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../styles/theme/theme";
import "mapbox-gl/dist/mapbox-gl.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Track GEO</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
