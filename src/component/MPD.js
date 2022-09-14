import React from "react";
import styles from "../style/MTX.module.css";
import Col from "react-bootstrap/Col";
import { Divider } from "@mui/material";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { useLocation } from "react-router-dom";
function MPD() {
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
      <p className={styles.paragraph}>MPD: مواد نمایشگر مغناطیسی</p>
      <div className={styles.title}>MPD</div>
      <Card
        style={{
          width: "80vw",
          backgroundColor: "#f4a200",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <Row className="no-gutters">
          <Col md={5} lg={5}>
            <Card.Img variant="top" src={require("./images/MPD/MPD.jpg")} />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title className={styles.title2}>MPD</Card.Title>
              <Card.Text className={styles.main}>
                مواد نمایش مغناطیسی
                <br />
                فناوری Magnetophoretic Device Material (MPD) برای ساخت کپسول‌های
                پلیمری انعطاف‌پذیر و الاستیک که حاوی نانوذرات مغناطیسی یکنواخت
                در سیال هستند، کاربرد دارد.
                <br />
                این مواد را می توان در یک فیلم انعطاف پذیر قابل نوشتن و پاک کرد
                که می تواند جایگزین تخته سفید معمولی یا تخته سیاه شود.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <p className={styles.paragraph2}>
        این با دو ذره رنگی مختلف در کپسول های میکرو ساخته شده است. بنابراین،
        هنگام نوشتن با یک قلم مغناطیسی، وضوح بالا و نسبت کنتراست واضحی مانند
        نوشتن روی کاغذ معمولی ارائه می دهد.
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
            <Card.Img variant="top" src={require("./images/MPD/2.gif")} />
          </Card>
        </Col>
        <Col>
          <Card style={{ border: "none" }}>
            <Card.Body>
              <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                ترکیب MPD
              </Card.Text>
            </Card.Body>
            <Card.Img variant="top" src={require("./images/MPD/3.jpg")} />
          </Card>
        </Col>
        <Col>
          <Card style={{ border: "none" }}>
            <Card.Body>
              <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                اصل کار MPD
              </Card.Text>
            </Card.Body>
            <Card.Img variant="top" src={require("./images/MPD/4.jpg")} />
          </Card>
        </Col>
      </Row>
      <p className={styles.paragraph2}>
        هنگامی که به عنوان یک نوع فیلم تولید می شود، به دلیل تغییر در ویسکوزیته
        و ترکیب سیال در جوهر کپسوله شده، پایداری و زمان نگهداری (پایداری دوگانه)
        کنترل می شود.
        <br />
        بنابراین، پایداری دوگانه دائمی را که برای تولید یک محصول اعمال می‌شود،
        حفظ می‌کند، تصویر را تا زمانی که توسط آهنربا کاملاً پاک شود، نگه می‌دارد
        در حالی که محصول دیگر تصویر را به طور طبیعی در طول زمان پاک می‌کند.
      </p>
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
                <Card.Img variant="top" src={require("./images/MPD/5.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    کتاب ایده های قابل حمل
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/MPD/6.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    چند تخته سفید
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/MPD/7.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    تخته سفید آکادمیک{" "}
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
                <Card.Img variant="top" src={require("./images/MPD/8.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    آموزش{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/MPD/9.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    داخلی{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/MPD/10.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    اتاق تمیز{" "}
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

export default MPD;
