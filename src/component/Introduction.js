import React from "react";
import styles from "../style/Introduction.module.css";
import TextCarousel from "./TextCarousel";
function Introduction() {
  return (
    <div className={styles.main}>
      <h1 style={{ textAlign: "center", color: "white"}}>محصولات</h1>
      <p style={{ direction: "rtl", color: "white", textAlign: "center" }}>
        تاپیک نانو با استفاده از فناوری های جدید، مواد و کاربردهای جدید نانو را
        ارائه می دهد.
      </p>
      <TextCarousel/>
    </div>
  );
}

export default Introduction;
