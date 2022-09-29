import React from "react";
import styles from "../style/MTX.module.css";
import Col from "react-bootstrap/Col";
import { Divider } from "@mui/material";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLoadingContext } from "react-router-loading";
import loadData from "./fetchers";
function SPM() {
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
      <p className={styles.paragraph}>SPM: نانوذرات سوپرپارامغناطیس</p>
      <div className={styles.title}>SPM</div>
      <Card
        style={{
          width: "80vw",
          backgroundColor: "#00a93c",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <Row className="no-gutters">
          <Col md={5} lg={5}>
            <Card.Img
              variant="top"
              style={{ width: "100%", height: "100%" }}
              src={require("./images/SPM/SPM.jpg")}
            />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title className={styles.title2}>SPM</Card.Title>
              <Card.Text className={styles.main}>
                نانوذرات سوپرپارامغناطیس
                <br />
                فن آوری سوپرپارامغناطیس (SPM) برای تولید مواد SPM به کار گرفته
                شده است که خواص مغناطیسی قوی را تنها در صورت وجود میدان مغناطیسی
                حفظ می کند. این فناوری امکان جداسازی و خالص سازی مواد هدف را با
                اعمال گروه عاملی هدفمند به طور یکنواخت روی سطح نانوذرات فراهم می
                کند.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <p className={styles.paragraph2}>
        سوپرپارامغناطیس ماده ای است که در غیاب میدان مغناطیسی خاصیت مغناطیسی از
        خود نشان نمی دهد، اما زمانی که یک میدان مغناطیسی خارجی توسط یک آهنربا یا
        القای الکترومغناطیسی اعمال شود، مغناطیسی می شود.
        <br />
        در این زمان، هنگامی که میدان مغناطیسی خارجی قطع می شود، مغناطیس مغناطیسی
        حذف شده و ویژگی ها فردی می شوند.
      </p>
      <Row
        xs={1}
        md={2}
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
            <Card.Img variant="top" src={require("./images/SPM/1.gif")} />
          </Card>
        </Col>
        <Col>
          <Card style={{ border: "none" }}>
            <Card.Body>
              <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                فرآیند جداسازی SPM
              </Card.Text>
            </Card.Body>
            <Card.Img variant="top" src={require("./images/SPM/2.jpg")} />
          </Card>
        </Col>
      </Row>
      <Row
        xs={1}
        md={2}
        className={`${styles.card} ${"g-10"}`}
        style={{ marginLeft: "35px", marginRight: "35px" }}
      >
        <Col>
          <Card style={{ border: "none" }}>
            <Card.Body>
              <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                تصویر SEM
              </Card.Text>
            </Card.Body>
            <Card.Img variant="top" src={require("./images/SPM/3.jpg")} />
          </Card>
        </Col>
        <Col>
          <Card style={{ border: "none" }}>
            <Card.Body>
              <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                قابلیت مغناطیسی
              </Card.Text>
            </Card.Body>
            <Card.Img variant="top" src={require("./images/SPM/4.jpg")} />
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
          <Row
            xs={1}
            md={3}
            className={`${styles.card} ${"g-10"}`}
            style={{ marginTop: "25px" }}
          >
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/SPM/5.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    #1 M-Bead
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/SPM/6.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    #2 M-PuriKit
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
                <Card.Img variant="top" src={require("./images/SPM/7.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    تحقیقات زیست شناسی و دارویی
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/SPM/8.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    تصفیه آب
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/SPM/9.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    تصفیه خاک
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

export default SPM;
