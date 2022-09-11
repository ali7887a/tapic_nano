import { Divider } from "@mui/material";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { useLocation } from "react-router-dom";
function EpInk() {
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
            EP-Ink محلول مواد قابل نمایش الکتروفورزی است که حاوی نانوذرات
            پراکنده یکنواخت از محیط دی الکتریک پایین با رنگ های مختلف است. این
            یک راه حل نوآورانه با دید عالی است که امکان حفظ رنگ مشترک را حتی در
            غیاب جریان در حالی که زیر نور خورشید بیشتر دیده می شود، می دهد.
          </Card.Text>
          <Row
            xs={1}
            md={3}
            className="g-2"
            style={{ marginTop: "25px", justifyContent: "space-around" }}
          >
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/EpInk/1.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    مواد نمایشگر الکتروفورتیک
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/EpInk/2.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    فیلم نمایش الکتروفورتیک
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
                <Card.Img variant="top" src={require("./images/EpInk/3.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    ESL (برچسب قفسه الکتریکی)
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/EpInk/4.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    نمایشگر الکتریکی (سیگنال دیجیتال)
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/EpInk/5.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    IT برنامه SKIN
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
            فناوری کاربردی: EPD
          </Button>
        </div>
      </Card>
    </>
  );
}

export default EpInk;
