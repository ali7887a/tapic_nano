import React, { useEffect, useState } from "react";
import styles from "../style/Inquiry.module.css";
import { Divider } from "@mui/material";
import Accordion from "react-bootstrap/Accordion";
import MuiAlert from "@mui/material/Alert";
import { useLoadingContext } from "react-router-loading";
import loadData from "./fetchers";
import Formdesktop1 from "./Formdesktop1";
function IRInquiry() {
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
      <div className={styles.title}> استعلام سرمایه گذاری</div>
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
        سوالات متداول{" "}
      </Divider>
      <Accordion>
        <Accordion.Item eventKey="9">
          <Accordion.Header className={styles.Htitle}>
            <span className={styles.span}>سوال1:</span>
            <span className={styles.question}>
              ممکن است وضعیت سرمایه پرداخت شده و کل سهام منتشر شده را به ما
              بگویید؟
            </span>
          </Accordion.Header>
          <Accordion.Body className={styles.questionBox}>
            تا تاریخ 30 ژوئن 2018، سرمایه پرداخت شده 4.0 میلیارد وون وون و سهام
            موجود 4.0 میلیون سهم شامل 3.3 میلیون سهم عادی و 649 هزار سهم ممتاز
            است.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="10">
          <Accordion.Header className={styles.Htitle}>
            <span className={styles.span}>سوال2:</span>
            <span className={styles.question}>
              آژانس اوراق بهادار سهام تاپیک نانو کیست؟
            </span>
          </Accordion.Header>
          <Accordion.Body className={styles.questionBox}>
            بانک KB کوکمین عامل انتقال ماست و اطلاعات تماس به شرح زیر است: تلفن:
            +82-2-2073-8123, 8126, 8118, 8106 شخص تماس: برای انتقال سهم تاپیک
            نانو به عنوان شارژ درخواست کنید
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="11">
          <Accordion.Header className={styles.Htitle}>
            <span className={styles.span}>سوال3:</span>
            <span className={styles.question}>
              دوره حسابداری و دوره پایانی لیست سهامداران چیست؟
            </span>
          </Accordion.Header>
          <Accordion.Body className={styles.questionBox}>
            تاپیک نانو شرکتی است که در ماه دسامبر در حال پایان است و تاریخ ثبت
            سهامداران 31 دسامبر هر سال مالی است. دوره بسته شدن فهرست سهامداران
            هفت روز از اول ژانویه تا 7 ژانویه است.
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

export default IRInquiry;
