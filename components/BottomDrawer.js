import {
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  OutlinedInput,
  Stack,
  Drawer,
  Typography,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import React from "react";

import { MdClose, MdMyLocation, MdOutlineHeight } from "react-icons/md";
import theme from "../styles/theme/theme";
import { SiOpenstreetmap } from "react-icons/si";

const BottomDrawer = ({ drawer, setDrawer, data }) => {
  return (
    <Drawer
      anchor="bottom"
      open={drawer}
      onClose={() => setDrawer(false)}
      PaperProps={{
        sx: {
          width: "100vw",
          maxWidth: theme.breakpoints.values.md,
          mx: "auto",
          background: theme.palette.background.main,
        },
      }}
    >
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent={"flex-start"}
        p={1}
        spacing={2}
      >
        <IconButton color="primary" component="span">
          <SiOpenstreetmap />
        </IconButton>
        <Typography variant="button" flexGrow={1}>
          {new Date(data.ts).getDate()}{" "}
          {
            [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ][new Date(data.ts).getMonth()]
          }{" "}
          {new Date(data.ts).getFullYear()} || {new Date(data.ts).getHours()}:
          {new Date(data.ts).getMinutes()}
        </Typography>
        <IconButton
          color="primary"
          component="span"
          onClick={() => setDrawer(false)}
        >
          <MdClose />
        </IconButton>
      </Stack>
      <Divider
        sx={{
          borderColor: theme.palette.background.light,
          borderWidth: "1px",
        }}
      />
      <List disablePadding>
        <ListItemButton>
          <ListItemText primary={"Vehicle Id"} secondary={"#AB102312389"} />
        </ListItemButton>

        <Divider
          sx={{
            borderColor: theme.palette.background.light,
            borderWidth: "1px",
          }}
        />
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"flex-start"}
          p={1}
          spacing={2}
        >
          <IconButton
            color="primary"
            component="span"
            //onClick={() => setDrawer(false)}
          >
            <MdMyLocation />
          </IconButton>
          <Typography variant="button" flexGrow={1}>
            Location Information
          </Typography>
        </Stack>
        <Divider
          sx={{
            borderColor: theme.palette.background.light,
            borderWidth: "1px",
          }}
        />
        <ListItemButton>
          <ListItemText
            primary={"Latitude"}
            secondary={data.coordinates[1].toFixed(4)}
          />
          <ListItemText
            primary={"Longitude"}
            secondary={data.coordinates[0].toFixed(4)}
          />
        </ListItemButton>
        <ListItemButton>
          <IconButton color={"primary"} sx={{ mr: 1 }}>
            <MdOutlineHeight />
          </IconButton>
          <ListItemText
            primary={"Evalution"}
            secondary={`${data.evalution.toFixed(2)} m`}
          />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default BottomDrawer;
