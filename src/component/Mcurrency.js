import { Divider } from "@mui/material";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { useLocation } from "react-router-dom";
function Mcurrency() {
  const location = useLocation();
  const path = location.pathname;
  const store = window.localStorage;
  let url = '';
  let prevUrl = '';

  url = store.getItem('url');
  store.setItem('prevUrl', url);
  store.setItem('url', path);

  url = store.getItem('url');
  prevUrl = store.getItem('prevUrl');
  const pre = localStorage.getItem('prevUrl')
  if(pre.includes("/product")){
    console.log('current page')
  }else{
    window.scrollTo(0,0)
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
            M-Currency یک محصول مواد نانو برجسته است که دارای فناوری پیشرفته
            نانو است و دارای عملکردهای امنیتی منحصر به فردی است که به طور خاص
            برای اسکناس راه حل مالی توسعه یافته است که به دوام بسیار دقیق و
            مقاومت شیمیایی نیاز دارد.
          </Card.Text>
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
                  src={require("./images/mcurrency/1.jpg")}
                />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                  نمونه ای از لایحه 1
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img
                  variant="top"
                  src={require("./images/mcurrency/2.jpg")}
                />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                  نمونه ای از لایحه 2

                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img
                  variant="top"
                  src={require("./images/mcurrency/3.jpg")}
                />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                  نمونه ای از لایحه 3
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
            فناوری کاربردی: MTX
          </Button>
        </div>
      </Card>
    </>
  );
}

export default Mcurrency;
