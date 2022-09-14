import React, { useEffect, useState } from "react";
import styles from "../style/Inquiry.module.css";
import { Divider } from "@mui/material";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import svg from "./images/talking-in-cellphone.svg";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function OtherInquiry() {
  const [validated, setValidated] = useState(false);
  const [Status, setStatus] = useState(false);
  const [Check, setCheck] = useState();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [Organization, setOrganization] = useState("");
  const [TextArea, setTextArea] = useState("");
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  const EmailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  useEffect(() => {
    if (name && TextArea && Organization && Check) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [name, TextArea, email, Check]);
  const handleClick = () => {
    setOpen(true);
    setName(" ");
    setEmail(" ");
    setOrganization(" ");
    setTextArea(" ");
    window.scrollTo(0, 0);
  };
  console.log(name);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <div className={styles.title}> سوالات دیگر</div>
      <p className={styles.paragraph}>
        تاپیک نانو به تمامی سوالات شما در سریع ترین زمان ممکن پاسخ خواهد داد.
      </p>
      <Divider
        style={{
          marginBottom: "15px",
          fontSize: "25px",
          marginTop: "70px",
          direction: "rtl",
        }}
      >
        سوالات متداول استخدام
      </Divider>
      <Accordion>
        <Accordion.Item eventKey="9">
          <Accordion.Header className={styles.Htitle}>
            <span className={styles.span}>سوال 1:</span>آیا می توانم وضعیت
            استخدام شرکت را بدانم؟
          </Accordion.Header>
          <Accordion.Body className={styles.questionBox}>
            شرکت نانو تاپیک برای مشاغلی که نیاز به استخدام دارد، فرصت شغلی ایجاد
            می کند، شما می توانید برای اطلاعات بیشتر به روش های زیر اقدام کنید.
            <br />
            ایمیل:Tapicnano@gmail.com
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="10">
          <Accordion.Header className={styles.Htitle}>
            <span className={styles.span}>سوال 2:</span>چگونه می توان روند
            استخدام را پیگیری کرد؟
          </Accordion.Header>
          <Accordion.Body className={styles.questionBox}>
            بر اساس رزومه های دریافتی، شرکت اولین غربالگری اسناد را انجام می دهد
            و مصاحبه از طریق اولین مصاحبه با کارکنان سطح کار و مصاحبه دوم با
            مدیران اجرایی انجام می شود. در صورت داشتن هرگونه سوال در مورد فرآیند
            استخدام یا منابع انسانی، لطفاً با آدرس ایمیل زیر با ما تماس بگیرید
            <br />
            ایمیل:Tapicnano@gmail.com
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Divider
        style={{
          marginBottom: "15px",
          fontSize: "25px",
          marginTop: "70px",
        }}
      >
        استعلام آنلاین{" "}
      </Divider>
      <Form
        style={{
          direction: "rtl",
          padding: "25px",
          backgroundColor: "#4d71da",
          color: "white",
          margin: "15px",
        }}
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div>
            <Form.Group className="mb-3" style={{ maxWidth: "400px" }}>
              <Form.Label>نام و نام خانوادگی:</Form.Label>
              <Form.Control
                type="text"
                placeholder="علی علائی"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Form.Group>

            <Form.Group className="mb-3" style={{ maxWidth: "400px" }}>
              <Form.Label>نام سازمان:</Form.Label>
              <Form.Control
                type="text"
                placeholder="شرکت تاپیک نانو"
                required
                onChange={(e) => setOrganization(e.target.value)}
                value={Organization}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
              style={{ maxWidth: "400px" }}
            >
              <Form.Label>ایمیل:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Tapicnano@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={email && !EmailPattern.test(email)}
                value={email}
                required
              />
              <Form.Control.Feedback type="invalid">
                ایمیل خود را به درستی وارد کنید.{" "}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                required
                onChange={(e) => setTextArea(e.target.value)}
                value={TextArea}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                style={{ float: "right" }}
                type="checkbox"
                label="من با جمع آوری و استفاده از اطلاعات شخصی موافقم."
                required
                feedback="شما می بایست ابتدا این گزینه را تیک بزنید."
                feedbackType="invalid"
                onChange={(e) => setCheck(e.target.checked)}
              />
            </Form.Group>
            <Button
              variant="dark"
              style={{
                marginTop: "35px",
                marginBottom: "35px",
                justifyContent: "center",
              }}
              type="submit"
              onClick={Status === true && handleClick}
            >
              ارسال استعلام
            </Button>
          </div>
          <img alt="nothing to show" src={svg} className={styles.img} />
        </div>
      </Form>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          پیام شما با موفقیت ارسال شد{" "}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default OtherInquiry;
