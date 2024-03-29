import {
  Box,
  Button,
  IconButton,
  InputBase,
  Stack,
  Tooltip,
} from "@mui/material";
import { MdMyLocation } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { SiHashnode } from "react-icons/si";
import { GiCargoCrane } from "react-icons/gi";
import dynamic from "next/dynamic";
import React from "react";

const Map = dynamic(() => import("../components/MapBoxHereRMGL"), {
  loading: () => "Loading...",
  ssr: false,
});

export default function Dashboard() {
  const [refresh, setRefresh] = React.useState(true);
  return (
    <>
      <Stack direction="column" sx={{ minHeight: "100vh" }}>
        <Box
          flexGrow={1}
          sx={{
            position: "relative",
            "& a.mapboxgl-ctrl-logo": {
              display: "none",
            },
          }}
        >
          <Map refresh={refresh} setRefresh={setRefresh} />
        </Box>
        <Stack
          flexDirection={"row"}
          spacing={0.5}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            px: 2,
            py: 1,
          }}
        >
          {/* <Tooltip title="User Name">
            <InputBase
              startAdornment={
                <AiOutlineUser color={"#999"} style={{ marginRight: 10 }} />
              }
              placeholder="Rudolf Tam"
              sx={{ flex: 1 }}
            />
          </Tooltip> */}
          <Tooltip title="Vehicle ID">
            <Button
              startIcon={<SiHashnode />}
              sx={{ justifyContent: "flex-start", pl: 2 }}
              fullWidth
            >
              ab102312389
            </Button>
          </Tooltip>
          <Tooltip title="Share My Location">
            <IconButton color="primary" onClick={() => setRefresh(true)}>
              <MdMyLocation />
            </IconButton>
          </Tooltip>
          <Tooltip title="My Vehicles">
            <IconButton color="primary">
              <GiCargoCrane />
            </IconButton>
          </Tooltip>
          <Tooltip title="More">
            <IconButton color="primary">
              <HiOutlineMenuAlt3 />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>
    </>
  );
}

// Map Box Reference**
// https://dev.to/niharikak101/integrating-mapbox-with-next-js-the-cheaper-alternative-to-google-maps-
