import React from "react";
import styles from "../style/AboveFooter.module.css";
function AboveFooter() {
  return (
    <div className={styles.main}>
      <div class="card" style={{ width: "18rem" }} className={styles.firstPara}>
        <div class="card-body">
          <h5 class="card-title">موقعیت</h5>
          <p class="card-text">موقعیت های ستاد، مرکز تحقیق و توسعه، بخش فروش</p>
          <a href="#" class="btn btn-dark">
            موقعیت{" "}
          </a>
        </div>
        <img
          className={styles.img}
          src={require("./images/map-pin-dynamic-premium.png")}
        />
      </div>
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
          <a href="#" class="btn btn-dark">
            جزئیات
          </a>
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
