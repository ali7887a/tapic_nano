import { Divider } from "@mui/material";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import styles from "../style/Security.module.css";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useLoadingContext } from "react-router-loading";
import loadData from "./fetchers";
function MBead() {
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
            M-Bead به طور خاص برای جداسازی و خالص سازی مواد خاص مانند پروتئین،
            DNA، اسید نیتریک، سزیم و غیره به سرعت و به سادگی توسط میدان مغناطیسی
            با استفاده از گروه عملکردی بالا پوشش داده شده بر روی نانوذرات
            یکنواخت ساخته شده است.
            <br />
            تاپیک نانو قابلیت تولید انبوه را برای تولید محصول مقرون به صرفه با
            کارایی بالا ایجاد کرده است.
          </Card.Text>
          <Row
            xs={1}
            md={3}
            className={`${styles.card} ${"g-10"}`}
            style={{ marginTop: "25px", justifyContent: "space-around" }}
          >
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/mbead/1.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    محصول M-Bead در تعداد سفارشی
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/mbead/2.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    فرآیند جداسازی ماده هدف توسط محصول M-Bead
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
            مشخصات محصولات
          </Divider>
          <Table striped bordered hover size="lg">
            <thead>
              <tr>
                <th style={{ textAlign: "center" }}>مشخصات</th>
                <th style={{ textAlign: "center" }}>محصولات</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ direction: "rtl" }}>
                  – گروه های هیدروکسیل سطحی
                  <br />
                  - اندازه ذرات [nm]: 100 تا 1000
                  <br />- بار سطحی منفی در pH 7.0
                </td>
                <td style={{ textAlign: "center" }}>M-Bead-OH </td>
              </tr>
              <tr>
                <td style={{ direction: "rtl" }}>
                  – گروه های آمین سطحی
                  <br />
                  – اندازه ذرات [nm]: 100 تا 1000
                  <br />– بار سطحی مثبت در pH 7.0
                </td>
                <td style={{ textAlign: "center" }}>M-Bead-NH2 </td>
              </tr>
              <tr>
                <td style={{ direction: "rtl" }}>
                  - گروه های کربوکسیل سطحی
                  <br />
                  - اندازه ذرات [nm]: 100 تا 1000
                  <br />- بار سطحی منفی در pH 7.0
                </td>
                <td style={{ textAlign: "center" }}>M-Bead-COOH </td>
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
            مشخصات محصولات
          </Divider>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th style={{ textAlign: "center" }}>تقسیم</th>
                <th style={{ textAlign: "center" }}>روش ستون چرخشی </th>
                <th style={{ textAlign: "center" }}>روش مهره مغناطیسی</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ direction: "rtl" }}>تجهیزات پالایش </td>
                <td style={{ direction: "rtl" }}>
                  سانتریفیوژ (نیاز به تجهیزات و فضا){" "}
                </td>
                <td style={{ direction: "rtl" }}>آهن ربا</td>
              </tr>
              <tr>
                <td style={{ direction: "rtl" }}>زمان تصفیه</td>
                <td style={{ direction: "rtl" }}>بیش از 30 دقیقه </td>
                <td style={{ direction: "rtl" }}>10 دقیقه یا کمتر</td>
              </tr>
              <tr>
                <td style={{ direction: "rtl" }}>ترازو تبلت </td>
                <td style={{ direction: "rtl" }}>
                  انواع و اندازه های مختلف ستون های چرخشی مورد نیاز است{" "}
                </td>
                <td style={{ direction: "rtl" }}>
                  با افزایش ظرفیت مهره امکان پذیر است
                </td>
              </tr>
              <tr>
                <td style={{ direction: "rtl" }}>کاربرد تجهیزات اتوماسیون </td>
                <td style={{ direction: "rtl" }}>
                  قابل اجرا است، اما یک سانتریفیوژ یا پمپ خلاء مورد نیاز است
                  (تجهیزات بزرگ شده){" "}
                </td>
                <td style={{ direction: "rtl" }}>
                  تعداد زیادی از نمونه ها را می توان در مدت زمان کوتاهی پردازش
                  کرد (کوچک سازی ماشین)
                </td>
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
            پوشش محصول
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
                  src={require("./images/mbead_r_01.jpg")}
                />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    کیت تشخیص
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img
                  variant="top"
                  src={require("./images/mbead_r_02.jpg")}
                />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    توسعه داروی جدید
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img
                  variant="top"
                  src={require("./images/mbead_r_03.jpg")}
                />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    جدایی، تطهیر{" "}
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
            onClick={() => navigation("/technology/nanoplatform/SPM")}
          >
            SPM در مورد{" "}
          </Button>
          <Button variant="danger" size="medium">
            <a
              href="http://www.m-bead.com/"
              style={{ textDecoration: "none", color: "white" }}
            >
              M-Bead صفحه{" "}
            </a>{" "}
          </Button>
        </div>
      </Card>
    </>
  );
}

export default MBead;
