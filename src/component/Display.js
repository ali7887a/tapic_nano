import { Button, ButtonGroup } from "react-bootstrap";
import React from "react";
import { Outlet } from "react-router-dom";
import styles from "../style/Display.module.css";
import {Link} from 'react-router-dom'
function Display() {
  return (
    <>
      <h1 className={styles.title}>گروه نمایش</h1>
      <p className={styles.p1}>
        EX-Ink: محلول مواد با قابلیت تغییر رنگ الکتریکی
      </p>
      <div className={styles.tabs}>
        <ButtonGroup size="md">
          <Button variant="dark" as={Link} to="/product/display">
            EX-Ink
          </Button>
          <Button variant="dark" as={Link} to="epink">
            EP-Ink
          </Button>
          <Button variant="dark" as={Link} to="etink">
            ET-Ink
          </Button>
        </ButtonGroup>
      </div>
      <Outlet />
    </>
  );
}

export default Display;
