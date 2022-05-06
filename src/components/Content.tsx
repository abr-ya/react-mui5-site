import { Box } from "@mui/material";
import CardDemo from "./CardDemo";

function Content() {
  return (
    <Box flex={4} p={2}>
      <CardDemo />     
      <CardDemo />     
    </Box>
  )
}

export default Content;
