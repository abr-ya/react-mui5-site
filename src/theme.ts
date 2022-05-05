import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480, // def: 600
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette:{
    primary:{
      main: "#1760a5s",
      light: "skyblue"
    },
    secondary:{
      main: '#15c630',
    },
  }
});
