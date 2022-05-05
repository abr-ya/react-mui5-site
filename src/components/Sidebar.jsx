import { Box } from "@mui/material";

function Sidebar() {
  return (
    <Box
      bgcolor="gainsboro"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Sidebar
    </Box>
  )
}

export default Sidebar;