import React from "react";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styles from "../style/Security.module.css";
function NanoPlatform() {
  const location = useLocation();
  const path = location.pathname;
  const store = window.localStorage;
  let url = '';
  let prevUrl = '';

  url = store.getItem('url');
  store.setItem('prevUrl', url);
  store.setItem('url', path);

  url = store.getItem('url');
  prevUrl = store.getItem('prevUrl');
  const pre = localStorage.getItem('prevUrl')
  if(pre.includes("/technology")){
    console.log('current page')
  }else{
    window.scrollTo(0,0)
  }
  const [value, setValue] = React.useState(0);
  const [value2, setValue2] = React.useState(0);
  const navigation = useNavigate();

  return (
    <> 
      <div className={styles.tabs}>
      <Box className={styles.box}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            className={styles.firstButton}
            style={{
              color: "white",
              backgroundColor: "#212529",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <BottomNavigationAction
              label="MTX"
              style={{ color: "white", minWidth: "60px" }}
              onClick={() => {
                navigation("/technology/nanoplatform");
              }}
            />
            <BottomNavigationAction
              label="MPD"
              style={{ color: "white", minWidth: "60px" }}
              onClick={() => {
                navigation("/technology/nanoplatform/mpd");
              }}
            />
            <BottomNavigationAction
              label="SPM"
              style={{ color: "white", minWidth: "60px" }}
              onClick={() => {
                navigation("/technology/nanoplatform/spm");
              }}
            />
          </BottomNavigation>
          <BottomNavigation
            showLabels
            value={value2}
            onChange={(event, newValue) => {
              setValue2(newValue);
            }}
            className={styles.secondButton}
            style={{
              color: "white",
              backgroundColor: "#212529",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <BottomNavigationAction
              label="ETX"
              style={{ color: "white", minWidth: "60px" }}
              onClick={() => {
                navigation("/technology/nanoplatform/etx");
              }}
            />
            <BottomNavigationAction
              label="EPD"
              style={{ color: "white", minWidth: "60px" }}
              onClick={() => {
                navigation("/technology/nanoplatform/epd");
              }}
            />
            <BottomNavigationAction
              label="ETD"
              style={{ color: "white", minWidth: "60px" }}
              onClick={() => {
                navigation("/technology/nanoplatform/etd");
              }}
            />
          </BottomNavigation>
        </Box>
      </div>
      <Outlet />
    </>
  );
}

export default NanoPlatform;
