import { Divider } from "@mui/material";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import CircleIcon from "@mui/icons-material/Circle";
import { useLocation , useNavigate } from "react-router-dom";
function Mpac() {
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
            M-Pac راه حل بسته بندی احراز هویت واقعی است که توسط فناوری MTX به
            طور مستقیم در فرآیند بسته بندی به منظور افزایش امنیت و کارایی اعمال
            می شود. این برای آن دسته از تولیدکنندگان انبوه بسته‌های ماسک، مواد
            غذایی و نوشیدنی، دارویی، قطعات الکترونیکی که از فیلم بسته‌بندی
            انعطاف‌پذیر مانند BOPP، PET، PE، نایلون و کاغذ استفاده می‌کنند تا
            هزینه‌های تولید را به حداقل برسانند و در عین حال از محافظت از برند
            استفاده کنند.
          </Card.Text>
          <Card.Img variant="top" src={require("./images/mpac/1.jpg")} />
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
          <p style={{ direction: "rtl", marginRight: "10px" }}>
            <CircleIcon
              fontSize={"small"}
              style={{ color: "red", marginLeft: "8px" }}
            />
            پشتیبانی از چاپ گراور با سرعت بالا با راه حل احراز هویت واقعی.
          </p>
          <p style={{ direction: "rtl", marginRight: "10px" }}>
            <CircleIcon
              fontSize={"small"}
              style={{ color: "red", marginLeft: "8px" }}
            />
            انواع فیلم بسته بندی انعطاف پذیر مانند BOPP، PET درمان شده با کرونا،
            پلی اتیلن، نایلون، کاغذ و غیره.
          </p>
          <p style={{ direction: "rtl", marginRight: "10px" }}>
            <CircleIcon
              fontSize={"small"}
              style={{ color: "red", marginLeft: "8px" }}
            />
            سفارشی کردن پشتیبانی طراحی با راه حل احراز هویت واقعی مقرون به صرفه.
          </p>
          <p style={{ direction: "rtl", marginRight: "10px" }}>
            <CircleIcon
              fontSize={"small"}
              style={{ color: "red", marginLeft: "8px" }}
            />
            براقیت استثنایی و مقاومت در برابر حرارت PU.
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
            بخش قابل اجرا
          </Divider>
          <Row xs={1} md={3} className="g-6" style={{ marginTop: "25px" }}>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/mpac/2.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    لوازم آرایشی
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/mpac/3.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    غذا و نوشیدنی
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/mpac/4.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    دارویی{" "}
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

export default Mpac;
