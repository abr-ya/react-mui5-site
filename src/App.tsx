import { Box, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { theme } from "./theme";

function App() {
  const toggleMode = () => {
    console.log('toggleMode');
  };

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar toggleMode={toggleMode} />
          <Content />
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
