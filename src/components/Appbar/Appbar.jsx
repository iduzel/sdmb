import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
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
 
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };




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

        <Box className="d-flex align-items-center" sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: "white" }}>
              {item}
            </Button>
          ))}
          <Box>EN</Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}


export default DrawerAppBar;
