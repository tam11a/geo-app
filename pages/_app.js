import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../styles/theme/theme";
import "mapbox-gl/dist/mapbox-gl.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
