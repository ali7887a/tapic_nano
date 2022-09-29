import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { TbLetterM } from "react-icons/tb";
import styles from "../style/Security.module.css";
function Security() {
  const [value, setValue] = React.useState(0);
  const [value2, setValue2] = React.useState(0);
  const navigation = useNavigate();
  const location = useLocation();
  return (
    <>
      <h1 className={styles.title}>گروه امنیتی</h1>
      <p className={styles.p1}>
        {location.pathname === "/product/security" ? (
          <span>M-Tag راه حل احراز هویت واقعی</span>
        ) : location.pathname === "/product/security/mpac" ? (
          <span>M-pac راه حل احراز هویت واقعی</span>
        ) : location.pathname === "/product/security/mcard" ? (
          <span>M-card راه حل احراز هویت واقعی</span>
        ) : location.pathname === "/product/security/msecupaper" ? (
          <span>M-SecuPaper راه حل امنیتی اسناد کاربر</span>
        ) : location.pathname === "/product/security/msecuprint" ? (
          <span>M-SecuPrint اولین مواد نانو قابل تنظیم رنگی</span>
        ) : (
          location.pathname === "/product/security/mcurrency" && (
            <span>M-Currency یک محصول مواد نانو</span>
          )
        )}
      </p>
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
              label="Tag"
              style={{ color: "white", minWidth: "60px" }}
              icon={<TbLetterM />}
              onClick={() => {
                navigation("/product/security");
              }}
            />
            <BottomNavigationAction
              label="Pac"
              style={{ color: "white", minWidth: "60px" }}
              onClick={() => {
                navigation("/product/security/mpac");
              }}
              icon={<TbLetterM />}
            />
            <BottomNavigationAction
              label="Card"
              style={{ color: "white", minWidth: "60px" }}
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
            className={styles.secondButton}
            style={{
              color: "white",
              backgroundColor: "#212529",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <BottomNavigationAction
              label="SecuPaper"
              style={{ color: "white", minWidth: "60px" }}
              onClick={() => {
                navigation("/product/security/msecupaper");
              }}
              icon={<TbLetterM />}
            />
            <BottomNavigationAction
              label="SecuPrint"
              style={{ color: "white", minWidth: "60px" }}
              onClick={() => {
                navigation("/product/security/msecuprint");
              }}
              icon={<TbLetterM />}
            />
            <BottomNavigationAction
              label="currency"
              style={{ color: "white", minWidth: "60px" }}
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
