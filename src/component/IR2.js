import React, { useEffect } from "react";
import styles from "../style/IR.module.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Card from "react-bootstrap/Card";
import PaginationControlled from "./pagination";
import { Button } from "react-bootstrap";
import {useNavigate} from 'react-router-dom'
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function IR() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigation = useNavigate()
  return (
    <>
      <div className={styles.showcase}>
        <h1>PR/IR</h1>
      </div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="black"
            indicatorColor="primary"
            className={styles.tabs}
            centered
          >
            <Tab
              label="PR"
              {...a11yProps(0)}
              style={{ fontSize: "40px", fontWeight: "bolder" }}
            />
            <Tab
              label="IR"
              {...a11yProps(1)}
              style={{ fontSize: "40px", fontWeight: "bolder" }}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <h1 className={styles.title}>PR</h1>
          <p className={styles.p1}>
            ما یک بیانیه مطبوعاتی جدید از تاپیک نانو را به اشتراک می گذاریم.
          </p>
          <p className={styles.p3}>
            <a className={styles.p3} onClick={()=> navigation('/ir')}>
              نشان دادن ویدئوها
            </a>
          </p>
          <h1 className={styles.title2}>
            تاپیک نانو فیلم کاغذ الکترونیکی تمام رنگی تولید می کند ... نمایش
            احساسی متغیر رنگ
          </h1>
          <Divider />
          <Card
            style={{
              width: "80vw",
              border: "none",
              marginTop: "20px",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            <Card.Img variant="top" src={require("./images/NANO.png")} />
            <Card.Body>
              <Card.Text style={{ direction: "rtl" }}>
                تاپیک نانو، یک شرکت متخصص در مواد جدید پیشرفته مبتنی بر نانوذرات،
                در نوزدهمین اعلام کرد که موفق به توسعه یک فیلم E-Paper تمام رنگی
                شده است.
                <br />
                نانوآجر موفق به توسعه جوهر الکترونیکی تمام رنگی با استفاده از
                کریستال های فوتونی برای اولین بار در جهان شد، اما به دلیل
                محدودیت در تشکیل فیلم محدودیتی برای گسترش کاربرد آن وجود داشت.
                این توسعه فیلم موفق به تولید یک فیلم قابل تنظیم رنگی از نانومواد
                شد و به تجاری سازی کاغذ الکترونیکی تمام رنگی سرعت بخشید.
                <br />
                یکی از مقامات نانوآجر گفت: «شرکت‌های جهانی برای دهه‌ها از طریق
                سرمایه‌گذاری در مقیاس بزرگ برای تجاری‌سازی فشار آورده‌اند.
                <br />
                وی ادامه داد: «رقبا به یک فرآیند الگوی پیچیده و یک تابلوی
                رانندگی نیاز دارند که رنگ را از طریق حرکت ذرات درک کند. او توضیح
                داد.
                <br />
                ارزش کاغذ الکترونیکی همچنان در بازار فعلی مورد تاکید است. به
                عنوان مثال، اخیراً در نمایشگاه 'CES 2022'، BMW با رونمایی از
                خودرویی که رنگ آن با پوشش دادن سطح خودرو با کاغذ الکترونیکی
                متغیر است، توجهات را به خود جلب کرد.
                <br />
                به گفته شرکت تحقیقات بازار Mordor Intelligence، انتظار می‌رود
                بازار جهانی صفحه نمایش کاغذ الکترونیکی (EPD) از 1.537 میلیارد
                دلار در سال 2020 به 3.43 میلیارد دلار در سال 2026 افزایش یابد.
                انتظار می‌رود که به 4.8 تریلیون دلار افزایش یابد.
                <br />
                تاپیک نانو مواد مختلف کاربردی جدید را بر اساس پلتفرم نانویی که به
                طور مستقل ساخته شده است توسعه و تجاری خواهد کرد.
                <br />
                Joo Jae-hyeon، مدیر عامل تاپیک نانو، تاکید کرد: "ما می خواهیم یک
                بازار نمایشگر احساسی (E-skin) جدید ایجاد کنیم، مانند جعبه های
                محصولات الکترونیکی که می تواند آزادانه رنگ ها را با توجه به
                ترجیحات کاربر یا محیط های خارجی با بهره گیری از نقاط قوت تغییر
                دهد. از محصولات ما.»
              </Card.Text>
            </Card.Body>
          </Card>
          <Divider />
          <div style={{textAlign:"center" , marginTop:"20px"}}>
          <Button variant="danger" onClick={()=> navigation('/ir')} >مشاهده لیست</Button>{' '}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <p className={styles.p3}>
            <a
              href="https://nanobrick.irpage.co.kr/#/main"
              className={styles.p3}
            >
              برو به سایت تاپیک نانو ایراگو
            </a>
          </p>
          <Divider>
            <Chip label="لیست" />
          </Divider>
          <PaginationControlled />
        </TabPanel>
      </Box>
    </>
  );
}

export default IR;
