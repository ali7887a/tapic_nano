import React from "react";
import { Outlet , useNavigate} from "react-router-dom";
import styles from "../style/product.module.css";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
function CS() {
  const navigation = useNavigate();
  const [value, setValue] = React.useState(0);
  return (
    <>
      <div className={styles.showcase}>
        <h1>مرکز CS</h1>
      </div> 
      <Box className={styles.box20} >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            style={{
              color: "white",
              backgroundColor: "white",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <BottomNavigationAction
              label="استعلام محصولات"
              style={{ color: "#dc3545", minWidth: "47px" }}
              className={styles.buttonNavigate}
              onClick={() => {
                navigation("/CS/productInquiry");
              }}
            />
            <BottomNavigationAction
            label="استعلام سرمایه گذاری"
              style={{ color: "#dc3545", minWidth: "47px" }}
              className={styles.buttonNavigate}
              onClick={() => {
                navigation("/CS/IRInquiry");
              }}
            />
            <BottomNavigationAction
            className={styles.buttonNavigate}
              label="گزارش تجارت غیرقانونی"
              style={{ color: "#dc3545", minWidth: "47px" }}
              onClick={() => {
                navigation("/CS/UnfairTrading");
              }}
            />
            <BottomNavigationAction
              label="سوالات دیگر"
              className={styles.buttonNavigate}
              style={{ color: "#dc3545", minWidth: "47px" , fontSize:"50px"}}
              onClick={() => {
                navigation("/CS/OtherInquiry");
              }}
            />
          </BottomNavigation>
        </Box>
      <Outlet/>
    </>
  );
}

export default CS;
