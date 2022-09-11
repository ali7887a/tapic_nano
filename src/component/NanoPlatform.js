import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import styles from "../style/Security.module.css";
import {Link} from "react-router-dom"
function NanoPlatform() {
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
