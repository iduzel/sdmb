import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./Appbar.scss";
import logo from "../../images/sdmblogo.jpg";
const drawerWidth = 240;
const navItems = [
  "KURUMSAL",
  "HIZMETLERIMIZ",
  "GALERI",
  "HABERLER",
  "STAND TASARIMLARIMIZ",
  "ILETISIM",
];

function DrawerAppBar(props) {
  return (
    <AppBar className="appbar " component="nav">
      <Toolbar className="appbar-toolbar ">
        <Box className="logo-text d-flex">
          <Box className="sdmb-logo-box">
            <img className="sdmb-logo" src={logo} />
          </Box>
          <Typography
            className="firmen-name"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            SMART DESIGN MESSE BAU
          </Typography>
        </Box>

        <Box
          className="d-flex align-items-center gap-4"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          {navItems.map((item) => (
            <Typography className="nav-menu-item " key={item}>
              {item}
            </Typography>
          ))}
          <Box className="nav-menu-item">EN</Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default DrawerAppBar;
