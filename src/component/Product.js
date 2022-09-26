import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Outlet, useNavigate} from "react-router-dom";
import styles from "../style/product.module.css";

function Product() {
  const [value, setValue] = React.useState(0);
  const navigation = useNavigate();
  return (
    <>
      <div className={styles.showcase}>
        <h1>محصولات</h1>
      </div>
      <div >
        <Box className={styles.box} >
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
              label="گروه امنیتی"
              style={{ color: "#dc3545", minWidth: "47px" }}
              onClick={() => {
                navigation("/product/security");
              }}
            />
            <BottomNavigationAction
            label="گروه نمایش"
              style={{ color: "#dc3545", minWidth: "47px" }}
              onClick={() => {
                navigation("/product/display");
              }}
            />
            <BottomNavigationAction
              label="گروه بیوزیستی"
              style={{ color: "#dc3545", minWidth: "47px" }}
              onClick={() => {
                navigation("/product/bio");
              }}
            />
            <BottomNavigationAction
              label="گروه عملکردی"
              style={{ color: "#dc3545", minWidth: "47px" , fontSize:"50px"}}
              onClick={() => {
                navigation("/product/functional");
              }}
            />
          </BottomNavigation>
        </Box>
      </div>
      <Outlet />
    </>
  );
}

export default Product;
