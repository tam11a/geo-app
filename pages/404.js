import { Box, Button, Stack, Typography } from "@mui/material";
import { AiOutlineLink } from "react-icons/ai";

// no page found
export default function noPage() {
  return (
    <Stack
      direction={"column"}
      alignItems="center"
      minHeight={"100vh"}
      justifyContent={"center"}
      spacing={2}
    >
      <Box sx={{ "& img": { width: "90vw", maxWidth: "500px" }, mb: 3 }}>
        <img src={"/404.svg"} alt={"404"} />
      </Box>
      <Typography variant="h4">No Page Found</Typography>
      <Button startIcon={<AiOutlineLink />}>Go To Home Page</Button>
    </Stack>
  );
}
