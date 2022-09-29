import { Divider } from "@mui/material";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import CircleIcon from "@mui/icons-material/Circle";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useLoadingContext } from "react-router-loading";
import loadData from "./fetchers";
import styles from "../style/Security.module.css";
function Mpaper() {
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
            M-Paper یک فیلم انعطاف پذیر قابل نوشتن و پاک شدنی با استفاده از یک
            قلم مغناطیسی است که می تواند جایگزین تخته سفید معمولی یا تخته سیاه
            شود. این M-Paper سازگار با محیط زیست برای اتاق های تمیز و مکان های
            دانشگاهی مناسب است زیرا در حین استفاده از آن هیچ گونه گرد و غبار یا
            مواد مضر ایجاد نمی کند. همچنین دارای قابلیت خود تمیز شوندگی است که
            حروف نوشته شده را پس از مدت زمان مشخصی حذف می کند. این فیلم ابتکاری
            می تواند به طور موثر برای کاغذ دیواری، تخته سفید اداری، تخته سیاه
            مدرسه، ابزار نوشتاری قابل حمل و موارد دیگر قابل استفاده باشد.
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
                  src={require("./images/Mpaper/1.jpg")}
                />
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img
                  variant="top"
                  src={require("./images/Mpaper/2.jpg")}
                />
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
            مشخصات
          </Divider>
          <p style={{ direction: "rtl", marginRight: "10px" }}>
            <CircleIcon
              fontSize={"small"}
              style={{ color: "red", marginLeft: "8px" }}
            />
            فرم فیلم قابل حمل انعطاف پذیر و سبک وزن
          </p>
          <p style={{ direction: "rtl", marginRight: "10px" }}>
            <CircleIcon
              fontSize={"small"}
              style={{ color: "red", marginLeft: "8px" }}
            />
            استفاده راحت از نوشتن و پاک کردن توسط قلم مغناطیسی
          </p>
          <p style={{ direction: "rtl", marginRight: "10px" }}>
            <CircleIcon
              fontSize={"small"}
              style={{ color: "red", marginLeft: "8px" }}
            />
            محصول Roll to Roll را می توان طبق یک سازنده سفارشی کرد
          </p>
          <p style={{ direction: "rtl", marginRight: "10px" }}>
            <CircleIcon
              fontSize={"small"}
              style={{ color: "red", marginLeft: "8px" }}
            />
            به عنوان صفحه نمایش پروژکتور نیز می توان استفاده کرد
          </p>
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
            بخش قابل اجرا{" "}
          </Divider>
          <Row
            xs={1}
            md={3}
            className={`${styles.card} ${"g-10"}`}
            style={{ marginTop: "25px" }}
          >
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img
                  variant="top"
                  src={require("./images/Mpaper/3.jpg")}
                />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    کتاب ایده های قابل حمل
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img
                  variant="top"
                  src={require("./images/Mpaper/4.jpg")}
                />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    بچه چند تخته
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img
                  variant="top"
                  src={require("./images/Mpaper/5.jpg")}
                />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    دفتر ایده هیئت
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
            onClick={() => navigation("/technology/nanoplatform/MPD")}
          >
            فناوری کاربردی: MPD
          </Button>
        </div>
      </Card>
    </>
  );
}

export default Mpaper;
