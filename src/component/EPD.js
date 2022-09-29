import React, { useEffect, useState } from "react";
import { useLoadingContext } from "react-router-loading";
import loadData from "./fetchers";
import styles from "../style/MTX.module.css";
import Col from "react-bootstrap/Col";
import { Divider } from "@mui/material";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { useLocation } from "react-router-dom";
function EPD() {
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
      <p className={styles.paragraph}>EPD: مواد نمایشگر الکتروفورتیک</p>
      <div className={styles.title}>EPD</div>
      <Card
        style={{
          width: "80vw",
          backgroundColor: "#6b319f",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <Row className="no-gutters">
          <Col md={5} lg={5}>
            <Card.Img
              variant="top"
              style={{ width: "100%", height: "100%" }}
              src={require("./images/EPD/EPD.jpg")}
            />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title className={styles.title2}>EPD</Card.Title>
              <Card.Text className={styles.main}>
                مواد نمایشگر الکتروفورتیک
                <br />
                EPD یک فناوری مواد قابل نمایش الکتروفورتیک است که نانوذرات
                پراکنده یکنواخت محیط دی الکتریک پایین با رنگ های مختلف را کنترل
                می کند. بسته به سیگنال قدرت خارجی، نانوذرات باردار با رنگ‌های
                مختلف به سمت بالا یا پایین سیال حرکت می‌کنند تا رنگ مربوطه را
                منتقل کنند.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <p className={styles.paragraph2}>
        این فناوری نوآورانه مواد، مواد EPD می‌تواند با استفاده از ولتاژ بسیار کم
        در مصرف انرژی صرفه‌جویی کند و حتی در صورت عدم وجود جریان، رنگ خود را حفظ
        کند. این ماده EPD با رنگ های حالت دوگانه، دید واضح تری را در زیر نور
        خورشید و رنگ های حساس برجسته به ارمغان می آورد.
      </p>
      <Row
        xs={1}
        md={3}
        className="g-6"
        style={{ marginTop: "45px", marginLeft: "35px", marginRight: "35px" }}
      >
        <Col>
          <Card style={{ border: "none" }}>
            <Card.Body>
              <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                *اطلاعات تکنیکی
              </Card.Text>
            </Card.Body>
            <Card.Img variant="top" src={require("./images/EPD/1.gif")} />
          </Card>
        </Col>
        <Col>
          <Card style={{ border: "none" }}>
            <Card.Body>
              <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                میکرو کپسول EPD
              </Card.Text>
            </Card.Body>
            <Card.Img variant="top" src={require("./images/EPD/2.jpg")} />
          </Card>
        </Col>
        <Col>
          <Card style={{ border: "none" }}>
            <Card.Body>
              <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                اصل EPD
              </Card.Text>
            </Card.Body>
            <Card.Img variant="top" src={require("./images/EPD/3.jpg")} />
          </Card>
        </Col>
      </Row>
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
                <Card.Img variant="top" src={require("./images/EPD/4.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    پوست حساس لوازم IT
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/EPD/5.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    ESL: برچسب قفسه الکتریکی
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/EPD/6.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    تابلوهای راهنمایی و رانندگی
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
            style={{ marginTop: "25px", marginBottom: "60px" }}
          >
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/EPD/7.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    لوازم الکترونیکی و IT
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/EPD/8.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    توزیع
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/EPD/9.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    حمل و نقل
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

export default EPD;
