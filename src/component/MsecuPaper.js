import { Divider } from "@mui/material";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { useLocation, useNavigate } from "react-router-dom";

function MSecuPaper() {
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
            M-SecuPaper یک راه حل امنیتی اسناد کاربر پسند است که به کاربران
            امکان می دهد اسناد ایمن را مستقیماً ایجاد کنند. این راه حل ویژه با
            مواد MTX و توابع احراز هویت برای اسناد رسمی دولت و شرکت ها قابل اجرا
            است. این راه حل سند دارای عملکردهای امنیتی ویژه برای افزایش قابلیت
            اطمینان گواهینامه شرکت و جلوگیری از جعل گواهینامه دولتی است.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "98vw", border: "none" }}>
        <Card.Body>
          <Divider
            style={{
              marginTop: "15px",
              marginBottom: "15px",
              fontSize: "25px",
            }}
          >
            مشخصات{" "}
          </Divider>
          <Row xs={2} md={5} className="g-6" style={{ marginTop: "25px" }}>
            <Col style={{ marginRight: "auto", marginLeft: "auto" }}>
              <Card
                style={{
                  border: "none",
                  width: "150px",
                  height: "200px",
                  marginRight: "auto",
                  marginLeft: "auto",
                }}
              >
                <Card.Img
                  variant="top"
                  src={require("./images/msecupaper/1.jpg")}
                />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    مواد مغناطیسی قابل تغییر رنگ
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none", width: "150px", height: "200px" }}>
                <Card.Img
                  variant="top"
                  src={require("./images/msecupaper/2.jpg")}
                />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    واتر مارک{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none", width: "150px", height: "200px" }}>
                <Card.Img
                  variant="top"
                  src={require("./images/msecupaper/3.jpg")}
                />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    محافظت در برابر کپی
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none", width: "150px", height: "200px" }}>
                <Card.Img
                  variant="top"
                  src={require("./images/msecupaper/4.jpg")}
                />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    نور فرابنفش
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none", width: "150px", height: "200px" }}>
                <Card.Img
                  variant="top"
                  src={require("./images/msecupaper/5.jpg")}
                />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    هولوگرام{" "}
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
                <Card.Img
                  variant="top"
                  src={require("./images/msecupaper/6.jpg")}
                />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    گواهی امنیتی
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img
                  variant="top"
                  src={require("./images/msecupaper/7.jpg")}
                />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    بلیط
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img
                  variant="top"
                  src={require("./images/msecupaper/8.jpg")}
                />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    تمبر مالیاتی
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
            onClick={() => navigation("/technology/nanoplatform")}
          >
            فناوری کاربردی: MTX
          </Button>
        </div>
      </Card>
    </>
  );
}

export default MSecuPaper;
