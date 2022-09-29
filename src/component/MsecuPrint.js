import { Divider } from "@mui/material";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import styles from '../style/Security.module.css'
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useLoadingContext } from "react-router-loading";
import loadData from "./fetchers";
function MsecuPrint() {
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
  const navigation = useNavigate();
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
  if (pre.includes("/product")) {
    console.log("current page");
  } else {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <Card style={{ width: "98vw", border: "none" }}>
        <Card.Body>
          <Divider
            style={{
              marginTop: "15px",
              marginBottom: "15px",
              fontSize: "25px",
            }}
          >
            بررسی اجمالی
          </Divider>
          <Card.Text
            style={{
              direction: "rtl",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            M-SecuPrint اولین مواد نانو قابل تنظیم رنگی در جهان با شدت سیگنال
            مغناطیسی است و امکان رشد نامحدود در زمینه‌های مختلف مانند امنیت و
            حوزه‌های علمی زنده، از جمله راه‌حل احراز هویت نام تجاری برای اطمینان
            از قابلیت اطمینان محصول، راه‌حل بسته‌بندی امنیتی را دارد. مواد قالب
            گیری و غیره این ماده ابتکاری نانو، M-SecuPrint با استفاده از فناوری
            کلیدی NANOBRIC، MTX (کریستال فوتونی قابل تغییر مغناطیسی رنگ) که توسط
            پتنت های کره ای و بین المللی ثبت و محافظت شده است، توسعه یافته است.
            مواد نانویی قابل تغییر رنگ یا الگوی مغناطیسی مجهز به ذرات نانو
            پراکنده بودند که می توانند طول موج و فاصله ذرات را کنترل کنند.
            TOPICNANO به فناوری فرآیند رمپ بالا برای قابلیت تولید انبوه دست
            یافته است..
          </Card.Text>
          <Row
            xs={1}
            md={3}
            className={`${styles.card} ${"g-10"}`}
            style={{ marginTop: "25px", justifyContent: "space-around" }}
          >
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img
                  variant="top"
                  src={require("./images/msecuprint/1.jpg")}
                />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    M-SecuPrint
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img
                  variant="top"
                  src={require("./images/msecuprint/2.jpg")}
                />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    رنگ و الگو با توجه به فرم آهنرباهای مختلف تغییر می کند
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
            }}
          >
            بخش قابل اجرا
          </Divider>
          <Row xs={1} md={3} className="g-6" style={{ marginTop: "25px" }}>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img
                  variant="top"
                  src={require("./images/msecuprint/3.jpg")}
                />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    مواد ضد جعل
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img
                  variant="top"
                  src={require("./images/msecuprint/4.jpg")}
                />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    برچسب امنیتی
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img
                  variant="top"
                  src={require("./images/msecuprint/5.jpg")}
                />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    احراز هویت گذرنامه
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img
                  variant="top"
                  src={require("./images/msecuprint/6.jpg")}
                />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    کارت امنیتی
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img
                  variant="top"
                  src={require("./images/msecuprint/7.jpg")}
                />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    مواد قالب گیری امنیتی
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img
                  variant="top"
                  src={require("./images/msecuprint/8.jpg")}
                />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    مواد بسته بندی امنیتی
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            variant="danger"
            size="medium"
            onClick={() => navigation("/CS/productInquiry")}
          >
            درخواست کالا
          </Button>
          <Button
            variant="danger"
            size="medium"
            onClick={() => navigation("/technology/nanoplatform")}
          >
            فناوری کاربردی: MTX
          </Button>
        </div>
      </Card>
    </>
  );
}

export default MsecuPrint;
