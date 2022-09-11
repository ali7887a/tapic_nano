import React from "react";
import { Outlet } from "react-router-dom";
import { Button, ButtonGroup } from "react-bootstrap";
import {Link} from 'react-router-dom'
import styles from '../style/functional.module.css'
function Functional() {
  return (
    <>
      <h1 className={styles.title}>گروه عملکردی</h1>
      <p className={styles.p1}>M-Skin: پوست با عملکرد مغناطیسی (مواد علامت گذاری)
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
