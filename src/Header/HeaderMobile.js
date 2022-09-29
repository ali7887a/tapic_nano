import * as React from "react";
import IconButton from "@mui/material/IconButton";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import RadioButtonCheckedTwoToneIcon from "@mui/icons-material/RadioButtonCheckedTwoTone";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";
import LanguageIcon from "@mui/icons-material/Language";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import "../style.scss";
import { Navbar, Stack } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  BottomNavigation,
  BottomNavigationAction,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
const Header = () => {
  //the menu at the corner of top and right
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["IR", "PR"].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            as={Link}
            to="ir"
            style={{ color: "black" }}
          >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <RadioButtonCheckedTwoToneIcon style={{ color: "black" }} />
                ) : (
                  <RadioButtonCheckedTwoToneIcon style={{ color: "black" }} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  // styled the light and dark theme
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  //for footer
  const [value, setValue] = useState("home");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigation = useNavigate();
  return (
    <>
      <Navbar sticky="top" style={{ padding: "0px" }}>
        <AppBar
          position="static"
          style={{
            backgroundColor: "rgba(0,0,0,1)",
            display: "flex",
            direction: "rtl",
            borderRadius: "0px",
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Box
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                style={{ padding: "0px" }}
              >
                <div>
                  <React.Fragment key="right">
                    <Button onClick={toggleDrawer("right", true)}>
                      <Tooltip title="منو">
                        <MenuIcon style={{ color: "white" }} />
                      </Tooltip>
                    </Button>
                    <SwipeableDrawer
                      anchor={"right"}
                      open={state["right"]}
                      onClose={toggleDrawer("right", false)}
                      onOpen={toggleDrawer("right", true)}
                    >
                      {list("right")}
                    </SwipeableDrawer>
                  </React.Fragment>
                </div>
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="تغییر زبان">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <LanguageIcon
                        style={{ color: "white", marginTop: "7px" }}
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    style={{ maxWidth: "80px" }}
                    sx={{ mt: "0px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem
                      onClick={handleCloseUserMenu}
                      style={{ display: "flex", flexDirection: "row-reverse" }}
                    >
                      Fa
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseUserMenu}
                      style={{ display: "flex", flexDirection: "row-reverse" }}
                    >
                      En
                    </MenuItem>
                  </Menu>
                </Box>
              </Box>
              <Tooltip title="خانه">
                <Typography
                  as={Link}
                  to="/" 
                  sx={{
                    mr: 0.5,
                  }}
                  className="Icon"
                ></Typography>
              </Tooltip>
              <Tooltip title="خانه">
                <Typography
                  className="Title"
                  variant="h5"
                  noWrap
                  component="a"
                  as={Link}
                  to="/" 
                  sx={{
                    mr: 2,
                    display: { xs: "flex", md: "none" },
                    flexGrow: 1,
                    fontWeight: 700,
                    color: "white",
                    textDecoration: "none",
                  }}
                  style={{ justifyContent: "flex-end" }}
                >
                  <img
                    src={require("../component/images/logo.png")}
                    style={{ width: "50px" }}
                  />
                </Typography>
              </Tooltip>
            </Toolbar>
          </Container>
        </AppBar>
      </Navbar>
      <Navbar
        style={{
          position: "fixed",
          bottom: 0,
          zIndex: 2,
          padding: "0px",
        }}
      >
        <BottomNavigation
          sx={{ width: "100vw" }}
          value={value}
          onChange= {handleChange}
          style={{
            color: "white",
            backgroundColor: "rgba(0,0,0,1)",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            borderRadius: "0px",
          }}
        >
          <BottomNavigationAction
            label="پشتیبانی"
            value="پشتیبانی"
            onClick={() => {
              navigation("/CS/productInquiry");
            }}
            icon={<SupportAgentIcon />}
            style={{ color: "white", minWidth: "47px" }}
          />
          <BottomNavigationAction
            label="محصولات"
            value="محصولات"
            onClick={() => {
              navigation("/product/security");
            }}
            icon={<LocalMallIcon />}
            style={{ color: "white", minWidth: "47px" }}
          />
          <BottomNavigationAction
            label="خانه"
            value="خانه"
            onClick={() => {
              navigation("/");
            }}
            icon={
              <Avatar sx={{ bgcolor: "white" }} style={{ fontSize: "large" }}>
                <StorefrontIcon style={{ color: "black" }} />
              </Avatar>
            }
            style={{ color: "white", minWidth: "30px" }}
          />
          <BottomNavigationAction
            label="تکنولوژی"
            value="تکنولوژی"
            icon={<OfflineBoltIcon />}
            style={{ color: "white", minWidth: "47px" }}
            onClick={() => {
              navigation("/technology/nanoplatform");
            }}
          />
          <BottomNavigationAction
            label="CS"
            value="CS"
            onClick={() => {
              navigation("/CS/productInquiry");
            }}
            icon={<BubbleChartIcon />}
            style={{ color: "white", minWidth: "30px" }}
          />
        </BottomNavigation>
      </Navbar>
    </>
  );
};
export default Header;
