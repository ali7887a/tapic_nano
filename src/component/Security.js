import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Outlet, useNavigate } from "react-router-dom";
import {TbLetterM}from 'react-icons/tb'
import styles from "../style/Security.module.css";
function Security() {
  const [value, setValue] = React.useState(0);
  const [value2, setValue2] = React.useState(0);
  const navigation = useNavigate();
  return (
    <>
      <h1 className={styles.title}>گروه امنیتی</h1>
      <p className={styles.p1}>M-Tag: راه حل احراز هویت واقعی </p>
      <div className={styles.tabs}>
        <Box className={styles.box}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            style={{
              color: "white",
              backgroundColor: "#212529",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              borderRadius: "0px",
            }}
          >
            <BottomNavigationAction
              label="Tag"
              style={{ color: "white", minWidth: "47px" }}
              icon={<TbLetterM />}
              onClick={() => {
                navigation("/product/security");
              }}
            />
            <BottomNavigationAction
              label="Pac"
              style={{ color: "white", minWidth: "47px" }}
              onClick={() => {
                navigation("/product/security/mpac");
              }}
              icon={<TbLetterM />}
            />
            <BottomNavigationAction
              label="Card"
              style={{ color: "white", minWidth: "47px" }}
              onClick={() => {
                navigation("/product/security/mcard");
              }}
              icon={<TbLetterM />}
            />
          </BottomNavigation>
          <BottomNavigation
            showLabels
            value={value2}
            onChange={(event, newValue) => {
              setValue2(newValue);
            }}
            style={{
              color: "white",
              backgroundColor: "#212529",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              borderRadius: "0px",
            }}
          >
            <BottomNavigationAction
              label="SecuPaper"
              style={{ color: "white", minWidth: "47px" }}
              onClick={() => {
                navigation("/product/security/msecupaper");
              }}
              icon={<TbLetterM />}
            />
            <BottomNavigationAction
              label="SecuPrint"
              style={{ color: "white", minWidth: "47px" }}
              onClick={() => {
                navigation("/product/security/msecuprint");
              }}
              icon={<TbLetterM />}
            />
            <BottomNavigationAction
              label="currency"
              style={{ color: "white", minWidth: "47px" }}
              onClick={() => {
                navigation("/product/security/mcurrency");
              }}
              icon={<TbLetterM />}
            />
          </BottomNavigation>
        </Box>
      </div>
      <Outlet />
    </>
  );
}

export default Security;
