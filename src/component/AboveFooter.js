import React from "react";
import styles from "../style/AboveFooter.module.css";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

function AboveFooter() {
  const navigation = useNavigate();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={styles.main}>
      <div class="card" style={{ width: "18rem" }} className={styles.firstPara}>
        <div class="card-body">
          <h5 class="card-title">موقعیت</h5>
          <p class="card-text">موقعیت های ستاد، مرکز تحقیق و توسعه، بخش فروش</p>
          <button href="#" class="btn btn-dark" onClick={handleClickOpen}>
            موقعیت{" "}
          </button>
        </div>
        <img
          className={styles.img}
          src={require("./images/map-pin-dynamic-premium.png")}
        />
      </div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        style={{direction:"rtl"}}
      >
        <DialogTitle id="responsive-dialog-title" >کاربر گرامی: </DialogTitle>
        <DialogContent>
          <DialogContentText>
            این قسمت به زودی کامل خواهد شد.{" "}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            بستن
          </Button>
        </DialogActions>
      </Dialog>
      <div
        class="card"
        style={{ width: "18rem" }}
        className={styles.secondPara}
      >
        <div class="card-body">
          <h5 class="card-title">مرکز CS</h5>
          <p class="card-text">
            ارزش ها و احترام TOPICNANO VOC به عنوان بالاترین اولویت
          </p>
          <button
            href="#"
            class="btn btn-dark"
            onClick={() => {
              navigation("/CS/productInquiry");
            }}
          >
            جزئیات
          </button>
        </div>
        <img
          className={styles.img}
          src={require("./images/phone-ringing-dynamic-premium.png")}
        />
      </div>
    </div>
  );
}

export default AboveFooter;
