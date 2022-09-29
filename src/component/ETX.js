import React, { useEffect, useState } from "react";
import { useLoadingContext } from "react-router-loading";
import loadData from "./fetchers";
import styles from "../style/MTX.module.css";
import CircleIcon from "@mui/icons-material/Circle";
import Col from "react-bootstrap/Col";
import { Divider } from "@mui/material";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { useLocation } from "react-router-dom";
function ETX() {
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
    <>
      <p className={styles.paragraph}>
        ETX: مواد کریستال فوتونیک قابل تنظیم الکتریکی
      </p>
      <div className={styles.title}>ETX</div>
      <Card
        style={{
          width: "80vw",
          backgroundColor: "#007fcb",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <Row className="no-gutters">
          <Col md={5} lg={5}>
            <Card.Img
              variant="top"
              style={{ width: "100%", height: "100%" }}
              src={require("./images/ETX.jpg")}
            />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title className={styles.title2}>ETX</Card.Title>
              <Card.Text className={styles.main}>
                مواد کریستال فوتونیک قابل تنظیم الکتریکی
                <br />
                ETX یک فناوری مواد کریستال فوتونیک قابل تنظیم الکتریکی است که
                برای نانوذرات پراکنده که به خوبی توسط سیگنال الکتریکی برای نمایش
                رنگ‌های متغیر در همه مناطق نور مرئی کنترل می‌شوند، قابل استفاده
                است.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <p className={styles.paragraph2}>
        پیاده سازی های تمام رنگی مرسوم به ساختار فرآیند پیچیده ای نیاز دارند که
        سه یا چند ماده را برای اجرای رنگ ها ترکیب می کند. با این حال، نانوتاپیک
        اولین فناوری ETX در جهان را توسعه داده است که یک ماده نانویی بازتابنده
        مبتنی بر کریستال فوتونی است که توسط میدان الکتریکی خارجی قادر است جلوه
        تمام رنگی نزدیک به رنگ طبیعی را در یک پیکسل به نمایش بگذارد. این فناوری
        توسط حقوق مالکیت معنوی در سراسر جهان ثبت و ایمن شده است.
      </p>
      <Row
        xs={1}
        md={3}
        className={`${styles.card} ${"g-10"}`}
        style={{ marginTop: "45px", marginLeft: "35px", marginRight: "35px" }}
      >
        <Col>
          <Card style={{ border: "none" }}>
            <Card.Body>
              <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                *اطلاعات تکنیکی
              </Card.Text>
            </Card.Body>
            <Card.Img variant="top" src={require("./images/ETX/1.gif")} />
          </Card>
        </Col>
        <Col>
          <Card style={{ border: "none" }}>
            <Card.Body>
              <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                تغییر رنگ متغیر توسط مواد ETX
              </Card.Text>
            </Card.Body>
            <Card.Img variant="top" src={require("./images/ETX/2.jpg")} />
          </Card>
        </Col>
        <Col>
          <Card style={{ border: "none" }}>
            <Card.Body>
              <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                کنترل تغییر رنگ توسط میدان الکتریکی
              </Card.Text>
            </Card.Body>
            <Card.Img variant="top" src={require("./images/ETX/3.jpg")} />
          </Card>
        </Col>
      </Row>
      <Card style={{ width: "98vw", border: "none" }}>
        <Card.Body>
          <Divider
            style={{
              marginTop: "15px",
              marginBottom: "15px",
              fontSize: "25px",
            }}
          >
            مشخصات{" "}
          </Divider>
          <p style={{ direction: "rtl", marginRight: "10px" }}>
            <CircleIcon
              fontSize={"small"}
              style={{ color: "red", marginLeft: "8px" }}
            />
            اندازه ذرات یکنواخت
          </p>
          <p style={{ direction: "rtl", marginRight: "10px" }}>
            <CircleIcon
              fontSize={"small"}
              style={{ color: "red", marginLeft: "8px" }}
            />
            بار سطحی بالا
          </p>
          <p style={{ direction: "rtl", marginRight: "10px" }}>
            <CircleIcon
              fontSize={"small"}
              style={{ color: "red", marginLeft: "8px" }}
            />
            پایداری پراکندگی بالا
          </p>
          <p style={{ direction: "rtl", marginRight: "10px" }}>
            <CircleIcon
              fontSize={"small"}
              style={{ color: "red", marginLeft: "8px" }}
            />
            تولید انبوه
          </p>
          <p style={{ direction: "rtl", marginRight: "10px" }}>
            <CircleIcon
              fontSize={"small"}
              style={{ color: "red", marginLeft: "8px" }}
            />
            تغییر طیف کامل
          </p>
        </Card.Body>
      </Card>
      <Card style={{ width: "98vw", border: "none" }}>
        <Card.Body>
          <Divider
            style={{
              marginBottom: "15px",
              fontSize: "25px",
              marginTop: "70px",
            }}
          >
            محصول قابل اجرا
          </Divider>
          <Row
            xs={1}
            md={3}
            className={`${styles.card} ${"g-10"}`}
            style={{ marginTop: "25px" }}
          >
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/ETX/4.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    Skim قابل تغییر رنگ برای برنامه IT
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/ETX/5.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    کاشی داخلی قابل تنظیم رنگ
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/ETX/6.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    پنجره هوشمند قابل تنظیم رنگ
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card style={{ width: "98vw", border: "none" }}>
        <Card.Body>
          <Divider
            style={{
              marginBottom: "15px",
              fontSize: "25px",
              marginTop: "70px",
            }}
          >
            بخش قابل اجرا
          </Divider>
          <Row
            xs={1}
            md={3}
            className={`${styles.card} ${"g-10"}`}
            style={{ marginTop: "25px" , marginBottom:'60px' }}
          >
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/ETX/7.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    لوازم الکترونیکی
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/ETX/8.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    پنجره معماری
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/ETX/9.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    مواد داخلی
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}

export default ETX;
