import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from '../style/IR.module.css'
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
// modal ********************
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton />
      <iframe
        id="media"
        frameborder="0"
        allowfullscreen="1"
        title="YouTube video player"
        src="https://www.youtube.com/embed/--1HGQvExXI?autoplay=0"
      ></iframe>
    </Modal>
  );
}

function Videos() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Row xs={1} md={3} className="g-6" style={{ marginTop: "25px" }}>
      <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}/>
      <Col >
        <Card style={{ border: "none" }} onClick={()=>setModalShow(true)}>
          <Card.Img variant="top" src={require("./images/v1.png")} />
          <span className={styles.play}></span>
          <Card.Body>
            <Card.Text style={{ direction: "rtl" }}>
              [M-Tag] برچسب ضد تقلب با قابلیت تغییر رنگ مغناطیسی
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ border: "none" }} onClick={()=>setModalShow(true)}>
        <span className={styles.play}></span>
          <Card.Img variant="top" src={require("./images/v2.png")} />
          <span className={styles.play}></span>
          <Card.Body>
            <Card.Text style={{ direction: "rtl" }}>
              [M-Pac] بسته بندی هوشمند با قابلیت تغییر رنگ مغناطیسی
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ border: "none" }} onClick={()=>setModalShow(true)}>
          <Card.Img variant="top" src={require("./images/v3.jpg")} />
          <span className={styles.play}></span>
          <Card.Body>
            <Card.Text style={{ direction: "rtl" }}>
              [M-Tag] برچسب ضد تقلب با قابلیت تغییر رنگ مغناطیسی
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ border: "none" }} onClick={()=>setModalShow(true)}>
          <Card.Img variant="top" src={require("./images/v4.png")} />
          <span className={styles.play}></span>
          <Card.Body>
            <Card.Text style={{ direction: "rtl" }}>
              [تکنولوژی MTX] ماده کریستال فوتونیک منحصر به فرد جهان با قابلیت
              تغییر رنگ مغناطیسی
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ border: "none" }} onClick={()=>setModalShow(true)}>
          <Card.Img variant="top" src={require("./images/v5.png")} />
          <span className={styles.play}></span>
          <Card.Body>
            <Card.Text style={{ direction: "rtl" }}>
              [M-Tag] نحوه احراز هویت، M-Tag Plus
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ border: "none" }} onClick={()=>setModalShow(true)}>
          <Card.Img variant="top" src={require("./images/v6.png")} />
          <span className={styles.play}></span>
          <Card.Body>
            <Card.Text style={{ direction: "rtl" }}>
            [M-Pac] نحوه احراز هویت، M-Pac
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Videos;
