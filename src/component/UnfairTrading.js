import React, { useEffect, useState } from "react";
import styles from "../style/Inquiry.module.css";
import { Divider } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { useLoadingContext } from "react-router-loading";
import loadData from "./fetchers";
import Formdesktop2 from "./FormDesktop2";
function UnfairTrading() {
     // ***** Loading
     const [state, setState] = useState();
     const loadingContext = useLoadingContext();
     const loading = async () => {
       const data = await loadData();
       setState(data);
       loadingContext.done();
     };
   
     useEffect(() => {
       loading();
     }, []);
   
     // ***************
  return (
    <div>
      <div className={styles.title}> گزارش تجارت ناعادلانه</div>
      <p className={styles.paragraph}>
        اگر سؤالی در رابطه با تجارت ناعادلانه دارید، ما با مهربانی و به سرعت
        پاسخ خواهیم داد.
      </p>
      <Divider
        style={{
          marginBottom: "15px",
          fontSize: "25px",
          marginTop: "70px",
        }}
        className={styles.divider}
      >
        گزارش تجارت غیرقانونی
      </Divider>
     <Formdesktop2/>
    </div>
  );
}

export default UnfairTrading;
