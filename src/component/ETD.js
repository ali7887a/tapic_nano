import React from "react";
import styles from "../style/MTX.module.css";
import Col from "react-bootstrap/Col";
import { Divider } from "@mui/material";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { useLocation } from "react-router-dom";
function ETD() {
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
      <p className={styles.paragraph}>ETD: مواد نمایشگر الکتروفورتیک</p>
      <div className={styles.title}>ETD</div>
      <Card
        style={{
          width: "80vw",
          backgroundColor: "#4a4e59",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <Row className="no-gutters">
          <Col md={5} lg={5}>
            <Card.Img variant="top" src={require("./images/ETD/ETD.jpg")} />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title className={styles.title2}>ETD</Card.Title>
              <Card.Text className={styles.main}>
                مواد دستگاه قابل کنترل شفافیت الکتریکی <br />
                فناوری ETD بر اساس اصل الکتروفورز برای کنترل انتقال توسط سیگنال
                الکتریکی خارجی توسعه یافته است. این فناوری نوآورانه نانوذرات
                سیاه با بار منفی را در یک سیال شفاف قادر می‌سازد تا موقعیت
                نانوذرات را برای تغییر سطح شفافیت توسط سیگنال الکتریکی کنترل
                کنند.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <p className={styles.paragraph2}>
        این فناوری نوآورانه ETD می تواند رنگ های خاکستری مختلف را با کنترل غلظت
        نانوذرات سیاه و نیروی الکتریکی خارجی به طور موثر تنظیم کند. رنگ اصلی
        تعبیه شده سیاه است اما رنگ های مختلف را می توان با تنظیم رنگ نانوذرات
        سفارشی کرد.
        <br />
        این می تواند رنگ را بدون نیاز به منبع فعلی در هنگام انتخاب یک سایه رنگ
        ترجیحی حفظ کند که باعث صرفه جویی اساسی در انرژی می شود.
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
            <Card.Img variant="top" src={require("./images/ETD/1.gif")} />
          </Card>
        </Col>
        <Col>
          <Card style={{ border: "none" }}>
            <Card.Body>
              <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                اصل ETD
              </Card.Text>
            </Card.Body>
            <Card.Img variant="top" src={require("./images/ETD/2.jpg")} />
          </Card>
        </Col>
        <Col>
          <Card style={{ border: "none" }}>
            <Card.Body>
              <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                شفافیت پایدار را بدون عرضه فعلی حفظ کنید
              </Card.Text>
            </Card.Body>
            <Card.Img variant="top" src={require("./images/ETD/3.jpg")} />
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
          <Row xs={1} md={3} className="g-6" style={{ marginTop: "25px" }}>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/ETD/4.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    پنجره های هوشمند{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/ETD/5.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    مبلمان هوشمند{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/ETD/6.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    نمایشگر شفاف
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
          <Row xs={1} md={3} className="g-6" style={{ marginTop: "25px" }}>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/ETD/7.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    پنجره معماری
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/ETD/8.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    قطعات خودرو
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/ETD/9.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    نمایشگر هوشمند
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

export default ETD;
