import { Box } from "@mui/material";
import Document, { Html, Head, Main, NextScript } from "next/document";
import theme from "../styles/theme/theme";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap"
            rel="stylesheet"
          />
          <title>Track GEO</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="shortcut icon" href="CAT.svg" type="image/x-icon" />
        </Head>
        <body>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              bgcolor: theme.palette.black.dark,
              height: "100vh",
              width: "100vw",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "relative",
                mx: "auto",
                bgcolor: theme.palette.black.main,
                height: "100vh",
                width: "100vw",
                maxWidth: theme.breakpoints.values.md,
                overflow: "hidden",
                boxShadow: "0 0 20px #00000088",
                overflowY: "auto",

                "::-webkit-scrollbar ": {
                  width: "8px",
                },
                "::-webkit-scrollbar-track": {
                  background: theme.palette.black.dark,
                },
                "::-webkit-scrollbar-thumb": {
                  background: `${theme.palette.black.main}88`,
                },
                "::-webkit-scrollbar-thumb:hover": {
                  background: `${theme.palette.black.main}bb`,
                },
              }}
            >
              <Main />
              <NextScript />
            </Box>
          </Box>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
