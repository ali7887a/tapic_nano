import React from "react";
import styles from "../style/MTX.module.css";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
function MTX() {
  return (
    <>
      <p className={styles.paragraph}>
        MTX: مواد کریستال فوتونیک با قابلیت تنظیم رنگ مغناطیسی
      </p>
      <div className={styles.title}>MTX</div>
      {/* <div
        className="card mb-3"
        style={{
          maxWidth: "80vw",
          borderRadius: "0px",
          marginRight: "auto",
          marginLeft: "auto",
          backgroundColor: "#e7302a",
        }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={require("./images/MTX.jpg")}
              className="img-fluid rounded-start"
              alt="MTX"
              style={{
                borderRadius: "0px",
                width: "fit-content",
                heigth: "fit-content",
              }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className={styles.title2}>MTX</h2>
              <p className={styles.main}>
                مواد کریستال فوتونیک قابل تنظیم مغناطیسی
                <br />
                <br />
                MTX فناوری نمادین نانوتاپیک است که با کنترل شدت سیگنال مغناطیسی
                و آرایه نانوذرات و فاصله، رنگ ها یا الگوها را تغییر می دهد. تنها
                تکنولوژی تولید انبوه مواد انجام شده در جهان به طور مختلف برای
                تولید مواد با امنیت بالا، محصولات کاربردی امنیتی، مواد کاربردی و
                غیره اجرا می شود.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <Card className="bg-dark text-white" style={{width:"70vw" , marginRight:"auto" , marginLeft:"auto"}}>
        <Card.Img src={require("./images/MTX.jpg")} alt="Card image" style={{width:"70vw" , height:"80vh"}} />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
      <p className={styles.paragraph}>
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
                کیت تشخیص
              </Card.Text>
            </Card.Body>
            <Card.Img variant="top" src={require("./images/mbead_r_01.jpg")} />
          </Card>
        </Col>
        <Col>
          <Card style={{ border: "none" }}>
            <Card.Body>
              <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                توسعه داروی جدید
              </Card.Text>
            </Card.Body>
            <Card.Img variant="top" src={require("./images/mbead_r_02.jpg")} />
          </Card>
        </Col>
        <Col>
          <Card style={{ border: "none" }}>
            <Card.Body>
              <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                جدایی، تطهیر{" "}
              </Card.Text>
            </Card.Body>
            <Card.Img variant="top" src={require("./images/mbead_r_03.jpg")} />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default MTX;
