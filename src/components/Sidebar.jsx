import { Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';

function Sidebar() {
  const theme = useTheme();
  console.log(theme);

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
