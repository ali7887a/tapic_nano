import { Divider } from "@mui/material";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { useLocation , useNavigate} from "react-router-dom";
function EtInk() {
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
            ET-Ink یک اصل الکتروفورز حامل راه حل کنترل انتقال است که می تواند
            انتقال را توسط سیگنال الکتریکی خارجی تنظیم کند. نانوذرات سیاه با بار
            منفی در یک سیال شفاف امکان تغییر موقعیت نانوذرات را برای کنترل ظریف
            سطح شفافیت فراهم می‌کند.
          </Card.Text>
          <Row
            xs={1}
            md={3}
            className="g-2"
            style={{ marginTop: "25px", justifyContent: "space-around" }}
          >
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/EtInk/1.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    فیلم کنترل انتقال
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/EtInk/2.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    کنترل شفافیت توسط سیگنال الکتریکی
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
                <Card.Img variant="top" src={require("./images/EtInk/3.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    پنجره هوشمند
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/EtInk/4.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    مبلمان هوشمند
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/EtInk/5.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    نمایشگر شفاف
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
          <Button
            variant="danger"
            size="lg"
            onClick={() => navigation("/CS/productInquiry")}
          >
            درخواست کالا
          </Button>
          <Button
            variant="danger"
            size="lg"
            onClick={() => navigation("/technology/nanoplatform/ETD")}
          >
            فناوری کاربردی: ETD
          </Button>
        </div>
      </Card>
    </>
  );
}

export default EtInk;
