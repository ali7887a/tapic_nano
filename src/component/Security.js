import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import styles from "../style/Security.module.css";
import {Link} from "react-router-dom"
function Security() {
  return (
    <>
      <h1 className={styles.title}>گروه امنیتی</h1>
      <p className={styles.p1}>M-Tag: راه حل احراز هویت واقعی </p>
      <div className={styles.tabs}>
      <ButtonGroup size="md"  >
        <Button variant="dark"  as={Link} to="/product/security">M-Tag</Button>
        <Button variant="dark"  as={Link} to="mpac">M-Pac</Button>
        <Button variant="dark"  as={Link} to="mcard">M-Card</Button>
        <Button variant="dark"  as={Link} to="msecupaper">M-SecuPaper</Button>
        <Button variant="dark"  as={Link} to="msecuprint">M-SecuPrint</Button>
        <Button variant="dark"  as={Link} to="mcurrency">M-currency</Button>
      </ButtonGroup>
      </div>
      <Outlet />
    </>
  );
}

export default Security;
