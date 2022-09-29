import React, { useEffect, useState } from "react";
import styles from "../style/Inquiry.module.css";
import { Divider } from "@mui/material";
import Accordion from "react-bootstrap/Accordion";
import MuiAlert from "@mui/material/Alert";
import { useLoadingContext } from "react-router-loading";
import loadData from "./fetchers";
import Formdesktop1 from "./Formdesktop1";
function OtherInquiry() {
       // ***** Loading
       const [state, setState] = useState();
       const loadingContext = useLoadingContext();
       const loading = async () => {
         const data = await loadData();
         setState(data);
         loadingContext.done();
       };
     
       useEffect(() => {
         loading();
       }, []);
     
       // ***************
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
        className={styles.divider}
      >
        سوالات متداول استخدام
      </Divider>
      <Accordion>
        <Accordion.Item eventKey="9">
          <Accordion.Header className={styles.Htitle}>
            <span className={styles.span}>سوال1:</span>
            <span className={styles.question}>آیا می توانم وضعیت
            استخدام شرکت را بدانم؟</span>
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
            <span className={styles.span}>سوال2:</span>
            <span className={styles.question}>چگونه می توان روند
            استخدام را پیگیری کرد؟</span>
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
          marginTop: "50px",
        }}
        className={styles.divider}
      >
        استعلام آنلاین{" "}
      </Divider>
     <Formdesktop1/>
    </div>
  );
}

export default OtherInquiry;
