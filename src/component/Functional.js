import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Button, ButtonGroup } from "react-bootstrap";
import {Link} from 'react-router-dom'
import styles from '../style/functional.module.css'
function Functional() {
  const location = useLocation();
  return (
    <>
      <h1 className={styles.title}>گروه عملکردی</h1>
      <p className={styles.p1}>
      {location.pathname === "/product/functional" ? (
          <span>M-Skin: پوست با عملکرد مغناطیسی 
          </span>
        ) : <span>M-Paper یک فیلم انعطاف پذیر</span>}
      </p>
      <div className={styles.tabs}>
        <ButtonGroup size="md">
          <Button variant="dark" as={Link} to="/product/functional">
            M-Skin
          </Button>
          <Button variant="dark" as={Link} to="mpaper">
            M-Paper
          </Button>
        </ButtonGroup>
      </div>
      <Outlet />
    </>
  );
}

export default Functional;
