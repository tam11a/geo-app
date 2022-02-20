import { Box, IconButton, InputBase, Stack, Tooltip } from "@mui/material";
import { MdMyLocation } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { GiCargoCrane } from "react-icons/gi";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/Map"), {
  loading: () => "Loading...",
  ssr: false,
});

export default function Dashboard() {
  return (
    <>
      <Stack direction="column" sx={{ minHeight: "100vh" }}>
        <Box flexGrow={1}>
          <Map />
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
          <Tooltip title="User Name">
            <InputBase
              startAdornment={
                <AiOutlineUser color={"#999"} style={{ marginRight: 10 }} />
              }
              placeholder="Rudolf Tam"
              sx={{ flex: 1 }}
            />
          </Tooltip>
          <Tooltip title="Share My Location">
            <IconButton color="primary">
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
