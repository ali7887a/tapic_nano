import React from "react";
import styles from "../style/MTX.module.css";
import Col from "react-bootstrap/Col";
import { Divider } from "@mui/material";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { useLocation } from "react-router-dom";
function MTX() {
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
  if(pre.includes("/technology")){
    console.log('current page')
  }else{
    window.scrollTo(0,0)
  }
  return (
    <>
      <p className={styles.paragraph}>
        MTX: مواد کریستال فوتونیک با قابلیت تنظیم رنگ مغناطیسی
      </p>
      <div className={styles.title}>MTX</div>
      <Card
        style={{
          width: "80vw",
          backgroundColor: "#e7302a",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <Row className="no-gutters">
          <Col md={5} lg={5}>
            <Card.Img variant="top" src={require("./images/MTX.jpg")} />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title className={styles.title2}>MTX</Card.Title>
              <Card.Text className={styles.main}>
                مواد کریستال فوتونیک قابل تنظیم مغناطیسی
                <br />
                MTX فناوری نمادین نانوتاپیک است که با کنترل شدت سیگنال مغناطیسی
                و آرایه نانوذرات و فاصله، رنگ ها یا الگوها را تغییر می دهد. تنها
                تکنولوژی تولید انبوه مواد انجام شده در جهان به طور مختلف برای
                تولید مواد با امنیت بالا، محصولات کاربردی امنیتی، مواد کاربردی و
                غیره اجرا می شود.
                <br />
                تنها تکنولوژی تولید انبوه انجام شده مواد در جهان به طور مختلف
                برای تولید مواد با امنیت بالا، محصولات کاربردی امنیتی، مواد
                کاربردی و غیره اجرا می شود.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <p className={styles.paragraph2}>
        سایر فناوری‌های تغییر رنگ از ذرات یا فیلترهای رنگی استفاده می‌کنند،
        فناوری MTX برای درک رنگ‌های مختلف از طریق کنترل میدان مغناطیسی کامل به
        یک نانوذرات پراکنده است.
      </p>
      <Row
        xs={1}
        md={3}
        className="g-6"
        style={{ marginTop: "45px", marginLeft: "35px", marginRight: "35px" }}
      >
        <Col>
          <Card style={{ border: "none" }}>
            <Card.Body>
              <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                *اطلاعات تکنیکی
              </Card.Text>
            </Card.Body>
            <Card.Img variant="top" src={require("./images/MTX/1.gif")} />
          </Card>
        </Col>
        <Col>
          <Card style={{ border: "none" }}>
            <Card.Body>
              <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                تنوع رنگ بر اساس میدان مغناطیسی
              </Card.Text>
            </Card.Body>
            <Card.Img variant="top" src={require("./images/MTX/2.jpg")} />
          </Card>
        </Col>
        <Col>
          <Card style={{ border: "none" }}>
            <Card.Body>
              <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                تنوع رنگ بر اساس میدان مغناطیسی
              </Card.Text>
            </Card.Body>
            <Card.Img variant="top" src={require("./images/MTX/3.jpg")} />
          </Card>
        </Col>
      </Row>
      <Card style={{ width: "98vw", border: "none" }}>
        <Card.Body>
          <Divider
            style={{
              marginBottom: "15px",
              fontSize: "25px",
              marginTop: "70px",
            }}
          >
            محصول قابل اجرا
          </Divider>
          <Row xs={1} md={3} className="g-6" style={{ marginTop: "25px" }}>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/MTX/4.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    M-Tag{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/MTX/5.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    M-Pac{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/MTX/6.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    M-Bead{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/MTX/7.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    M-Currency
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/MTX/8.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    M-Skin
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/MTX/9.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    M-Paper{" "}
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
              marginTop: "70px",
            }}
          >
            بخش قابل اجرا
          </Divider>
          <Row xs={1} md={3} className="g-6" style={{ marginTop: "25px" }}>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/MTX/10.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                  حفاظت از برند: احراز هویت واقعی
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/MTX/11.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                  اسکناس مالی
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/MTX/12.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                  امنیت اسناد
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/MTX/13.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                  قطعات خودرو
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/MTX/14.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                  لوازم زندگی
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={require("./images/MTX/15.jpg")} />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                  تجهیزات پزشکی
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}

export default MTX;
