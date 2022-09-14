import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Outlet, useLocation } from "react-router-dom";
import styles from "../style/Security.module.css";
import {Link} from "react-router-dom"
function NanoPlatform() {
  const location = useLocation();
  const path = location.pathname;
  const store = window.localStorage;
  let url = '';
  let prevUrl = '';

  url = store.getItem('url');
  store.setItem('prevUrl', url);
  store.setItem('url', path);

  url = store.getItem('url');
  prevUrl = store.getItem('prevUrl');
  const pre = localStorage.getItem('prevUrl')
  if(pre.includes("/technology")){
    console.log('current page')
  }else{
    window.scrollTo(0,0)
  }
  return (
    <>
      <div className={styles.tabs}>
      <ButtonGroup size="lg"  >
        <Button variant="dark"  as={Link} to="/technology/nanoplatform">MTX</Button>
        <Button variant="dark"  as={Link} to="MPD">MPD</Button>
        <Button variant="dark"  as={Link} to="SPM">SPM</Button>
        <Button variant="dark"  as={Link} to="ETX">ETX</Button>
        <Button variant="dark"  as={Link} to="EPD">EPD</Button>
        <Button variant="dark"  as={Link} to="ETD">ETD</Button>
      </ButtonGroup>
      </div>
      <Outlet />
    </>
  );
}

export default NanoPlatform;
