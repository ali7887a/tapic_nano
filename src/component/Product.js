import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Outlet ,Link} from "react-router-dom";
import styles from "../style/product.module.css";

function Product() {
  return (
    <>
      <div className={styles.showcase}>
        <h1>محصولات</h1>
      </div>
      <div className={styles.tabs}>
      <ButtonGroup size="lg"  >
        <Button variant="outline-danger" className={styles.tab} as={Link} to='security'>گروه امنیتی</Button>
        <Button variant="outline-danger" className={styles.tab} as={Link} to='display'>گروه نمایش</Button>
        <Button variant="outline-danger" className={styles.tab} as={Link} to='bio'>گروه بیوزیستی</Button>
        <Button variant="outline-danger" className={styles.tab} as={Link} to='functional'>گروه عملکردی</Button>
      </ButtonGroup>
      </div>
      <Outlet/>
    </>
  );
}

export default Product;
