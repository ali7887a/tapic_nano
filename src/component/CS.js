import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Outlet ,Link} from "react-router-dom";
import styles from "../style/product.module.css";

function CS() {
  return (
    <>
      <div className={styles.showcase}>
        <h1>مرکز CS</h1>
      </div>
      <div className={styles.tabs}>
      <ButtonGroup size="lg"  >
        <Button variant="outline-danger" className={styles.tab} as={Link} to='/CS/productInquiry'>استعلام محصولات</Button>
        <Button variant="outline-danger" className={styles.tab} as={Link} to='/CS/IRInquiry'>استعلام سرمایه گذاری</Button>
        <Button variant="outline-danger" className={styles.tab} as={Link} to='/CS/UnfairTrading'>گزارش تجارت ناعادلانه</Button>
        <Button variant="outline-danger" className={styles.tab} as={Link} to='/CS/OtherInquiry'>سوالات دگیر</Button>
      </ButtonGroup>
      </div>
      <Outlet/>
    </>
  );
}

export default CS;
