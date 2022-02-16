import { Box, Button, Stack, Typography } from "@mui/material";
import { AiOutlineLink } from "react-icons/ai";
import { FaMapMarkedAlt } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Stack
        direction={"column"}
        alignItems="center"
        minHeight={"100vh"}
        justifyContent={"space-evenly"}
        spacing={2}
      >
        <Box sx={{ "& img": { width: "80vw", maxWidth: "400px" } }}>
          <img src={"/CAT.svg"} alt={"TruckTrack"} />
        </Box>
        <Stack
          direction={"column"}
          alignItems="center"
          justifyContent={"center"}
          spacing={2}
        >
          <Typography variant="h4" sx={{ textTransform: "uppercase" }}>
            Track GEO
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ textTransform: "uppercase", letterSpacing: 5 }}
            color={"primary"}
          >
            get.connect.track!
          </Typography>
          <Box sx={{ mb: 2 }}></Box>
        </Stack>
        <Stack
          direction={"column"}
          alignItems="center"
          justifyContent={"center"}
          spacing={2}
        >
          <Link href="/dashboard" passHref>
            <Button
              variant="contained"
              startIcon={<FaMapMarkedAlt />}
              sx={{ borderRadius: "100px", px: 3 }}
              fullWidth
              // Create Link
            >
              Get Location
            </Button>
          </Link>
          <Button
            startIcon={<AiOutlineLink style={{ fontSize: "1rem" }} />}
            // endIcon={<AiOutlineLink style={{ fontSize: "1rem" }} />}
            color="secondary"
            component={"a"}
            target="_blank"
            href="https://www.facebook.com/ibrahimsadik.tamim/"
            sx={{ fontSize: "0.7rem" }}
          >
            Powered By TAM
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
