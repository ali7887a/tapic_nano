import React, { useEffect, useState } from "react";
import { useLoadingContext } from "react-router-loading";
import loadData from "./fetchers";
import styles from "../style/MTX.module.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Divider } from "@mui/material";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router-dom";
function IP() {
  // ***** Loading
  const [state, setState] = useState();
  const loadingContext = useLoadingContext();
  const loading = async () => {
    const data = await loadData();
    setState(data);
    loadingContext.done();
  };

  useEffect(() => {
    loading();
  }, []);

  // ***************
  const location = useLocation();
  const path = location.pathname;
  const store = window.localStorage;
  let url = "";
  let prevUrl = "";

  url = store.getItem("url");
  store.setItem("prevUrl", url);
  store.setItem("url", path);

  url = store.getItem("url");
  prevUrl = store.getItem("prevUrl");
  const pre = localStorage.getItem("prevUrl");
  if (pre.includes("/technology")) {
    console.log("current page");
  } else {
    window.scrollTo(0, 0);
  }
  return (
    <div>
      <div className={styles.title}>وضعیت IP</div>
      <p className={styles.paragraph}>
        نانوتاپیک پیشرفته ترین فناوری ها را ایمن کرده !!
      </p>
      <Row xs={1} md={4} className="g-4" style={{width:"100%"}}>
        <Col className={styles.col}>
          <Card className={styles.card1}>
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  fontSize: "15px",
                }}
              >
                درخواست ثبت اختراع
              </Card.Title>
              <Divider style={{ backgroundColor: "white" }} />
              <Card.Text
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  fontSize: "45px",
                }}
              >
                264
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className={styles.col}>
          <Card className={styles.card2}>
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  fontSize: "15px",
                }}
              >
                ثبت اختراع
              </Card.Title>
              <Divider style={{ backgroundColor: "black" }} />
              <Card.Text
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  fontSize: "45px",
                }}
              >
                75
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className={styles.col}>
          <Card className={styles.card3}>
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  fontSize: "15px",
                }}
              >
                درخواست ثبت اختراع سودمند
              </Card.Title>
              <Divider style={{ backgroundColor: "white" }} />
              <Card.Text
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  fontSize: "45px",
                }}
              >
                15
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className={styles.col}>
          <Card className={styles.card4}>
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  fontSize: "15px",
                }}
              >
                ثبت اختراع سودمند{" "}
              </Card.Title>
              <Divider style={{ backgroundColor: "black" }} />
              <Card.Text
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  fontSize: "45px",
                }}
              >
                12
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className={styles.col}>
          <Card className={styles.card5}>
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  fontSize: "15px",
                }}
              >
                اپلیکیشن علامت تجاری
              </Card.Title>
              <Divider style={{ backgroundColor: "black" }} />
              <Card.Text
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  fontSize: "45px",
                }}
              >
                57
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className={styles.col}>
          <Card className={styles.card6}>
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  fontSize: "15px",
                }}
              >
                ثبت علامت تجاری
              </Card.Title>
              <Divider style={{ backgroundColor: "white" }} />
              <Card.Text
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  fontSize: "45px",
                }}
              >
                40
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className={styles.col}>
        <Card className={styles.card7}>
          <Card.Body>
            <Card.Title
              style={{
                textAlign: "center",
                fontWeight: "bolder",
                fontSize: "15px",
              }}
            >
              برنامه طراحی
            </Card.Title>
            <Divider style={{ backgroundColor: "black" }} />
            <Card.Text
              style={{
                textAlign: "center",
                fontWeight: "bolder",
                fontSize: "45px",
              }}
            >
              18
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col className={styles.col}>
          <Card className={styles.card8}>
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  fontSize: "15px",
                }}
              >
                ثبت طراحی
              </Card.Title>
              <Divider style={{ backgroundColor: "white" }} />
              <Card.Text
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  fontSize: "45px",
                }}
              >
                17
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div
        style={{ marginTop: "40px", textAlign: "center", marginBottom: "60px" }}
      >
        <Button size="medium" variant="danger">
          جایزه ها و گواهینامه ها
        </Button>{" "}
      </div>
    </div>
  );
}

export default IP;
