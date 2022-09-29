import { Divider } from "@mui/material";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import styles from "../style/Security.module.css";
import Table from "react-bootstrap/Table";
import { useLocation , useNavigate} from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useLoadingContext } from "react-router-loading";
import loadData from "./fetchers";
function Mskin() {
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
            M-Skin برای تجسم رنگ یا طرح آن با کنترل سیگنال های مغناطیسی خارجی
            مختلف طراحی شده است. این فیلم مبتکرانه مبتنی بر مواد نانو برای
            دستگاه ها و تجهیزات دارای عملکرد مغناطیسی، از جمله تجهیزات پزشکی
            مانند MRI، لوازم خانگی مانند دستگاه های پخت القایی، بلندگوهای صوتی و
            بسیاری از دستگاه های دیگر که از قطعات مغناطیسی استفاده می کنند، قابل
            استفاده است.
          </Card.Text>
          <Row
            xs={1}
            md={3}
            className={`${styles.card} ${"g-10"}`}
            style={{ marginTop: "25px", justifyContent: "space-around" }}
          >
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/Mskin/1.jpg")} />
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/Mskin/2.jpg")} />
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
          <Table striped bordered hover size="lg">
            <thead>
              <tr>
                <th style={{ textAlign: "center" }}>مشخصات</th>
                <th style={{ textAlign: "center" }}>دسته بندی</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ textAlign: "center" }}>
                  نوع ورق اندازه فیلم (میلی متر)
                </td>
                <td style={{ textAlign: "center" }}>
                  600 x 500، 297 x 210، قابل کاستومایز شدن
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>محدوده تغییر رنگ</td>
                <td style={{ textAlign: "center" }}>نارنجی تا آبی تیره </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>ضخامت فیلم (µm)</td>
                <td style={{ textAlign: "center" }}>150 ~ 200</td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>تست مقاومت حرارتی</td>
                <td style={{ textAlign: "center" }}>75℃, 48H</td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>تست دما و رطوبت ثابت</td>
                <td style={{ textAlign: "center" }}>60℃ / 80%, 48H</td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>تست نوردهی در فضای باز</td>
                <td style={{ textAlign: "center" }}>48H</td>
              </tr>
            </tbody>
          </Table>
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
          <Row xs={1} md={3}             className={`${styles.card} ${"g-10"}`}
 style={{ marginTop: "25px" }}>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/Mskin/3.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    لوازم آشپزخانه: القایی
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/Mskin/4.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    Living Science: بلندگوی صوتی
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/Mskin/5.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    تجهیزات پزشکی: MRI
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

export default Mskin;
