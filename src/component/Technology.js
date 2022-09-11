import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Outlet ,Link} from "react-router-dom";
import styles from "../style/product.module.css";

function Technology() {
  return (
    <>
      <div className={styles.showcase}>
        <h1>تکنولوژی</h1>
      </div>
      <div className={styles.tabs}>
      <ButtonGroup size="lg"  >
        <Button variant="outline-danger" className={styles.tab} as={Link} to='/technology/nanoplatform'>پلتفرم نانو</Button>
        <Button variant="outline-danger" className={styles.tab} as={Link} to='ip'>وضعیت IP</Button>
      </ButtonGroup>
      </div>
      <Outlet/>
    </>
  );
}

export default Technology;
