import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import React from "react";
import { Outlet ,Link, useNavigate} from "react-router-dom";
import styles from "../style/product.module.css";

function Technology() {
  const [value, setValue] = React.useState(0);
  const navigation = useNavigate();

  return (
    <>
      <div className={styles.showcase}> 
        <h1>تکنولوژی</h1>
      </div>
      <div className={styles.tabs}>
      <Box style={{zIndex:"2"}}>
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
              label="پلتفرم نانو"
              style={{ color: "#dc3545", minWidth: "47px" }}
              onClick={() => {
                navigation("/technology/nanoplatform");
              }}
            />
            <BottomNavigationAction
            label="وضعیت IP"
              style={{ color: "#dc3545", minWidth: "47px" }}
              onClick={() => {
                navigation("/technology/ip");
              }}
            />
          </BottomNavigation>
        </Box>
      </div>
      <Outlet/>
    </>
  );
}

export default Technology;
