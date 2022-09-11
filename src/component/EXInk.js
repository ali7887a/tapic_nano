import { Divider } from "@mui/material";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { useLocation } from "react-router-dom";
function EXInk() {
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
              marginBottom: "15px",
              fontSize: "25px",
            }}
          >
            بررسی اجمالی{" "}
          </Divider>
          <Card.Text
            style={{
              direction: "rtl",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            EX-Ink یک محلول مواد قابل تغییر رنگ الکتریکی است که حاوی نانوذرات
            کریستال فوتونیک پراکنده است که به خوبی توسط سیگنال الکتریکی کنترل می
            شود تا رنگ های متغیر را در تمام مناطق نور مرئی نشان دهد.
          </Card.Text>
          <Row xs={1} md={3} className="g-6" style={{ marginTop: "25px" }}>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/ExInk/1.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    جوهر نانو قابل تنظیم الکتریکی
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/ExInk/2.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    فیلم رول قابل تنظیم الکتریکی
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/ExInk/3.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    فیلم ورق قابل تنظیم الکتریکی
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
            بخش قابل اجرا{" "}
          </Divider>
          <Row xs={1} md={3} className="g-6" style={{ marginTop: "25px" }}>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/ExInk/4.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                  پوسته پوسته محصول فناوری اطلاعات
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/ExInk/5.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                  کاشی رنگ داخلی
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/ExInk/6.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                  پنجره رنگی
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
        <div
          style={{
            textAlign: "center",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Button variant="danger" size="lg">
            درخواست کالا
          </Button>
          <Button variant="danger" size="lg">
            فناوری کاربردی: ETX
          </Button>
        </div>
      </Card>
    </>
  );
}

export default EXInk;
