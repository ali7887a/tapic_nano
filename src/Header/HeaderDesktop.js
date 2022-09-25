import * as React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import SupportAgentTwoToneIcon from "@mui/icons-material/SupportAgentTwoTone";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import RadioButtonCheckedTwoToneIcon from "@mui/icons-material/RadioButtonCheckedTwoTone";
import { useState } from "react";
import "../style.scss";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  ListItem,
  List,
  SwipeableDrawer,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
const Header = () => {
  //the menu at the corner of top and right
  const [state, setState] = useState({
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
        <ListItem
          key={"IR"}
          disablePadding
          as={Link}
          to="ir"
          style={{ color: "black" }}
        >
          <ListItemButton>
            <ListItemIcon>
              {true ? (
                <RadioButtonCheckedTwoToneIcon style={{ color: "black" }} />
              ) : (
                <RadioButtonCheckedTwoToneIcon style={{ color: "black" }} />
              )}
            </ListItemIcon>
            <ListItemText primary={"IR"} />
          </ListItemButton>
        </ListItem>
        <ListItem
          key={"PR"}
          disablePadding
          as={Link}
          to="ir"
          style={{ color: "black" }}
        >
          <ListItemButton>
            <ListItemIcon>
              {true ? (
                <RadioButtonCheckedTwoToneIcon style={{ color: "black" }} />
              ) : (
                <RadioButtonCheckedTwoToneIcon style={{ color: "black" }} />
              )}
            </ListItemIcon>
            <ListItemText primary={"PR"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  // styled the light and dark theme
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigation = useNavigate();
  return (
    <>
      <Navbar
        sticky="top"
        style={{ backgroundColor: "transparent", padding: "0px" }}
      >
        <AppBar
          position="static"
          style={{
            backgroundColor: "rgba(0,0,0,0.9)",
            display: "flex",
            direction: "rtl",
            borderRadius: "0px",
          }}
        >
          <Container maxWidth="xLg">
            <Toolbar disableGutters>
              <React.Fragment>
                <Box>
                  <Button onClick={toggleDrawer("right", true)}>
                    <Tooltip title="منو">
                      <MenuIcon style={{ color: "white" }} />
                    </Tooltip>
                  </Button>
                  <SwipeableDrawer
                    anchor="right"
                    open={state["right"]}
                    onClose={toggleDrawer("right", false)}
                    onOpen={toggleDrawer("right", true)}
                  >
                    {list("right")}
                  </SwipeableDrawer>
                </Box>
              </React.Fragment>
              <Tooltip title="خانه">
                <Typography
                  noWrap
                  component="a"
                  as={Link}
                  to="/"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "Sahel",
                    fontWeight: 800,
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  <img
                    src={require('../component/images/logo.png')}
                    style={{ width: "65px" }}
                  />
                </Typography>
              </Tooltip>
              <Box
                sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                className="MenuHeader"
                style={{justifyContent:"center" , marginRight:"0px"}}
              >
                <PopupState variant="popover" popupId="demo-popup-menu">
                  {(popupState) => (
                    <React.Fragment>
                      <Button
                        sx={{ my: 2, color: "white", display: "block" }}
                        {...bindTrigger(popupState)}
                      >
                        <Tooltip title="کلیک کنید">
                          <Typography noWrap>تکنولوژی</Typography>
                        </Tooltip>
                      </Button>
                      <Menu {...bindMenu(popupState)}>
                        <MenuItem
                          onClick={() => {
                            navigation("/technology/nanoplatform");
                            popupState.close();
                          }}
                          style={{ direction: "rtl" }}
                        >
                          پلتفرم نانو فعال
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            navigation("/technology/ip");
                            popupState.close();
                          }}
                          style={{ direction: "rtl" }}
                        >
                          وضعیت IP
                        </MenuItem>
                      </Menu>
                    </React.Fragment>
                  )}
                </PopupState>
                <PopupState variant="popover" popupId="demo-popup-menu">
                  {(popupState) => (
                    <React.Fragment>
                      <Button
                        sx={{ my: 2, color: "white", display: "block" }}
                        {...bindTrigger(popupState)}
                      >
                        <Tooltip title="کلیک کنید">
                          <Typography noWrap style={{ padding: "5px" }}>
                            محصولات
                          </Typography>
                        </Tooltip>
                      </Button>
                      <Menu {...bindMenu(popupState)}>
                        <MenuItem
                          onClick={() => {
                            navigation("/product/security");
                            popupState.close();
                          }}
                          style={{ direction: "rtl" }}
                        >
                          گروه امنیتی
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            navigation("/product/display");
                            popupState.close();
                          }}
                          style={{ direction: "rtl" }}
                        >
                          گروه نمایش
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            navigation("/product/bio");
                            popupState.close();
                          }}
                          style={{ direction: "rtl" }}
                        >
                          گروه بیوزیستی
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            navigation("/product/functional");
                            popupState.close();
                          }}
                          style={{ direction: "rtl" }}
                        >
                          گروه عملکردی
                        </MenuItem>
                      </Menu>
                    </React.Fragment>
                  )}
                </PopupState>
                <PopupState variant="popover" popupId="demo-popup-menu">
                  {(popupState) => (
                    <React.Fragment>
                      <Menu {...bindMenu(popupState)}>
                        <MenuItem
                          onClick={popupState.close}
                          style={{ direction: "rtl" }}
                        >
                          بررسی کلی
                        </MenuItem>
                        <MenuItem
                          onClick={popupState.close}
                          style={{ direction: "rtl" }}
                        >
                          پیام CEO
                        </MenuItem>
                        <MenuItem
                          onClick={popupState.close}
                          style={{ direction: "rtl" }}
                        >
                          تاریخچه
                        </MenuItem>
                        <MenuItem
                          onClick={popupState.close}
                          style={{ direction: "rtl" }}
                        >
                          گواهینامه ها
                        </MenuItem>
                        <MenuItem
                          onClick={popupState.close}
                          style={{ direction: "rtl" }}
                        >
                          موقعیت
                        </MenuItem>
                        <MenuItem
                          onClick={popupState.close}
                          style={{ direction: "rtl" }}
                        >
                          ارزش ها
                        </MenuItem>
                      </Menu>
                    </React.Fragment>
                  )}
                </PopupState>
                <PopupState variant="popover" popupId="demo-popup-menu">
                  {(popupState) => (
                    <React.Fragment>
                      <Button
                        sx={{ my: 2, color: "white", display: "block" }}
                        {...bindTrigger(popupState)}
                      >
                        <Tooltip title="کلیک کنید">
                          <Typography noWrap style={{ padding: "5px" }}>
                            مرکز CS
                          </Typography>
                        </Tooltip>
                      </Button>
                      <Menu {...bindMenu(popupState)}>
                        <MenuItem
                          style={{ direction: "rtl" }}
                          onClick={() => {
                            navigation("/CS/productInquiry");
                            popupState.close();
                          }}
                        >
                          درخواست کالا
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            navigation("/CS/IRInquiry");
                            popupState.close();
                          }}
                          style={{ direction: "rtl" }}
                        >
                          استعلام سرمایه گذاری
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            navigation("/CS/UnfairTrading");
                            popupState.close();
                          }}
                          style={{ direction: "rtl" }}
                        >
                          گزارش تجارت ناعادلانه{" "}
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            navigation("/CS/OtherInquiry");
                            popupState.close();
                          }}
                          style={{ direction: "rtl" }}
                        >
                          سوالات دیگر
                        </MenuItem>
                      </Menu>
                    </React.Fragment>
                  )}
                </PopupState>
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="پشتیبانی">
                  <IconButton sx={{ p: 0 }}>
                    <SupportAgentTwoToneIcon
                      onClick={() => {
                        navigation("/CS/productInquiry");
                      }}
                      style={{ color: "white", marginLeft: "8px" }}
                    />
                  </IconButton>
                </Tooltip>
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="تغییر زبان">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <LanguageIcon style={{ color: "white" }} />
                  </IconButton>
                </Tooltip>
                <Menu
                  style={{ maxWidth: "140px" }}
                  sx={{ mt: "45px" }}
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
                    فارسی
                  </MenuItem>
                  <MenuItem
                    onClick={handleCloseUserMenu}
                    style={{ display: "flex", flexDirection: "row-reverse" }}
                  >
                    English
                  </MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Navbar>
    </>
  );
};
export default Header;
