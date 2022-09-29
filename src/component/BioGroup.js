import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../style/bio.module.css";
function BioGroup() {
  const location = useLocation();
  return (
    <>
      <h1 className={styles.title}>گروه بیوزیستی</h1>
      <p className={styles.p1}>
      {location.pathname === "/product/bio" ? (
          <span>M-Bead جداسازی و تطهیر</span>
        ) : <span>M-PuriKit کشت باکتری</span>}
         </p>
      <div className={styles.tabs}>
        <ButtonGroup size="md">
          <Button variant="dark" as={Link} to="/product/bio">
            M-Bead
          </Button>
          <Button variant="dark" as={Link} to="purikit">
            M-PuriKit
          </Button>
        </ButtonGroup>
      </div>
      <Outlet />
    </>
  );
}

export default BioGroup;
