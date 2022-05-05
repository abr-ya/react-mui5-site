import { ThemeProvider } from "@emotion/react";
import { Box, Button, Typography } from "@mui/material";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Typography variant="h1" component="h1" gutterBottom>
          Hello, React!
        </Typography>
        <Button variant="text">Text</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="contained" sx={{
          backgroundColor: "gainsboro",
          m: 3,
          "&:hover": {
            backgroundColor: "lightblue"
          }
        }}
        >
          Contained
        </Button>
      </Box>
    </ThemeProvider>
  );
}

export default App;
