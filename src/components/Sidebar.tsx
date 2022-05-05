import {
  Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch,
} from "@mui/material";
import { Inbox, Drafts, Home, Article, ModeNight } from '@mui/icons-material';
// import { useTheme } from '@mui/material/styles';

interface ISidebar {
  toggleMode: () => void;
}

const Sidebar = ({ toggleMode }: ISidebar) => {
  // const theme = useTheme();
  // console.log(theme);

  return (
    <Box
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <Article />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Drafts />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={toggleMode}/>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  )
}

export default Sidebar;
