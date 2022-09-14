import React from "react";
import styles from "../style/MTX.module.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Divider } from "@mui/material";
import  Button  from "react-bootstrap/Button";
import { useLocation } from "react-router-dom";
function IP() {
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
    <div>
      <div className={styles.title}>وضعیت IP</div>
      <p className={styles.paragraph}>
        نانوتاپیک پیشرفته ترین فناوری ها را ایمن کرده !!
      </p>
      <Row xs={1} md={4} className="g-4">
        <Col>
          <Card style={{ backgroundColor: "#e7302a", color: "white" }}>
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  fontSize: "20px",
                }}
              >
                درخواست ثبت اختراع
              </Card.Title>
              <Divider style={{ backgroundColor: "white" }} />
              <Card.Text
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  fontSize: "60px",
                }}
              >
                264
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  fontSize: "20px",
                }}
              >
                ثبت اختراع
              </Card.Title>
              <Divider style={{ backgroundColor: "black" }} />
              <Card.Text
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  fontSize: "60px",
                }}
              >
                75
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ backgroundColor: "#e7302a", color: "white" }}>
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  fontSize: "20px",
                }}
              >
                درخواست ثبت اختراع سودمند
              </Card.Title>
              <Divider style={{ backgroundColor: "white" }} />
              <Card.Text
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  fontSize: "60px",
                }}
              >
                15
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  fontSize: "20px",
                }}
              >
                ثبت اختراع سودمند{" "}
              </Card.Title>
              <Divider style={{ backgroundColor: "black" }} />
              <Card.Text
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  fontSize: "60px",
                }}
              >
                12
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  fontSize: "20px",
                }}
              >
اپلیکیشن علامت تجاری
              </Card.Title>
              <Divider style={{ backgroundColor: "black" }} />
              <Card.Text
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  fontSize: "60px",
                }}
              >
                57
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ backgroundColor: "#e7302a", color: "white" }}>
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  fontSize: "20px",
                }}
              >
ثبت علامت تجاری
              </Card.Title>
              <Divider style={{ backgroundColor: "white" }} />
              <Card.Text
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  fontSize: "60px",
                }}
              >
                40
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Card>
          <Card.Body>
            <Card.Title
              style={{
                textAlign: "center",
                fontWeight: "bolder",
                fontSize: "20px",
              }}
            >
برنامه طراحی
            </Card.Title>
            <Divider style={{ backgroundColor: "black" }} />
            <Card.Text
              style={{
                textAlign: "center",
                fontWeight: "bolder",
                fontSize: "60px",
              }}
            >
              18
            </Card.Text>
          </Card.Body>
        </Card>
        <Col>
          <Card style={{ backgroundColor: "#e7302a", color: "white" }}>
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  fontSize: "20px",
                }}
              >
ثبت طراحی
              </Card.Title>
              <Divider style={{ backgroundColor: "white" }} />
              <Card.Text
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  fontSize: "60px",
                }}
              >
                17
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div style={{marginTop:"40px" , textAlign:'center', marginBottom:"40px"}}>
      <Button size="lg" variant="danger">جایزه ها و گواهینامه ها</Button>{' '}
      </div>
    </div>
  );
}

export default IP;
