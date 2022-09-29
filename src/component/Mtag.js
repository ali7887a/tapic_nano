import { Divider } from "@mui/material";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import styles from "../style/Security.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useLoadingContext } from "react-router-loading";
import loadData from "./fetchers";
function Mtag() {
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
            M-Tag نماینده راه حل احراز هویت واقعی است که توسط یک و تنها فناوری
            نوآورانه MTX تاپیک نانو استفاده شده است که امکان تغییر رنگ یا الگو
            را توسط میدان مغناطیسی فراهم می کند.
            <br />
            M-Tag برای نشان دادن برچسب محافظت از برند طراحی شده است که می تواند
            فوراً تغییر رنگ برچسب را توسط آهنرباهایی که در زندگی روزمره یافت می
            شود (مانند آهنربای لاستیکی، آهنربای بلندگوی تلفن همراه و نوت بوک)
            تشخیص دهد.
          </Card.Text>
          <Card.Img variant="top" src={require("./images/mtag/1.jpg")} />
        </Card.Body>
      </Card>
      <div className={styles.rowimages}>
        <img className={styles.img} src={require("./images/mtag/2.jpg")} />
        <img className={styles.img} src={require("./images/mtag/3.jpg")} />
        <img className={styles.img} src={require("./images/mtag/4.jpg")} />
      </div>
      <Card style={{ width: "98vw", border: "none" }}>
        <Card.Body>
          <Divider
            style={{
              marginTop: "15px",
              marginBottom: "15px",
            }}
          >
            مشخصات{" "}
          </Divider>
          <Card.Img variant="top" src={require("./images/mtag/5.jpg")} />
          <Divider
            textAlign="right"
            style={{
              marginTop: "35px",
              marginBottom: "35px",
            }}
          >
            اولیه :M-Tag
          </Divider>
          <Card.Img variant="top" src={require("./images/mtag/6.jpg")} />
          <Divider
            textAlign="right"
            style={{
              marginTop: "35px",
              marginBottom: "35px",
            }}
          >
            ساده :M-Tag
          </Divider>
          <Card.Img variant="top" src={require("./images/mtag/7.jpg")} />
          <Divider
            textAlign="right"
            style={{
              marginTop: "35px",
              marginBottom: "35px",
            }}
          >
            استاندارد :M-Tag
          </Divider>
          <Card.Img variant="top" src={require("./images/mtag/8.jpg")} />
          <Divider
            textAlign="right"
            style={{
              marginTop: "35px",
              marginBottom: "35px",
            }}
          >
            پریمیوم :M-Tag
          </Divider>
          <Card.Img variant="top" src={require("./images/mtag/9.jpg")} />
          <Divider
            textAlign="right"
            style={{
              marginTop: "35px",
              marginBottom: "35px",
            }}
          >
            بارکد :M-Tag
          </Divider>
          <Card.Img variant="top" src={require("./images/mtag/10.jpg")} />
          <Divider
            textAlign="right"
            style={{
              marginTop: "35px",
              marginBottom: "35px",
            }}
          >
            چک :M-Tag
          </Divider>
          <Card.Img variant="top" src={require("./images/mtag/11.jpg")} />
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
            بررسی اجمالی
          </Divider>
          <Row
            xs={1}
            md={3}
            className={`${styles.card} ${"g-10"}`}
            style={{ marginTop: "25px" }}
          >
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/mtag/12.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    لوازم آرایشی
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/mtag/13.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    غذا و نوشیدنی
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/mtag/14.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    دارویی{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/mtag/15.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    قطعات الکترونیکی
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/mtag/16.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    خودرو
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/mtag/17.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    نوشیدنی ممتاز
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

export default Mtag;
