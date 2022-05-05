import { AppBar, Typography, InputBase, Badge, Avatar } from "@mui/material";
import { Pets, Mail, Notifications } from "@mui/icons-material";
import { StyledToolbar, Search, Icons } from "./styled/Navbar.styled";

function Navbar() {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          LOGO TEXT
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail color="action" />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={(e) => console.log('Ava click!', e) }
          />
        </Icons>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar;
