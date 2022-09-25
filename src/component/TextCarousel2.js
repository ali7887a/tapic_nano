import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css"; 
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../style.scss";
import styles from "../style/textCarousel.module.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";
import { useNavigate } from "react-router-dom";

export default function TextCarousel() {
  const navigation = useNavigate()
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          "background-color": "rgb(222, 222, 222)",
          marginTop: "20px",
          marginBottom: "20px",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className={`${styles.swip2} ${"mySwiper"}`}
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-color": "rgb(222, 222, 222)",
            marginRight: "auto",
            marginLeft: "auto",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide className={styles.padding2} onClick={()=>{navigation('technology/nanoplatform')}}>
          <div className={styles.animation2}>
            <div className={styles.img}>
              <img className={styles.aks} src={require("./images/a.png")} alt="MTX"/>
            </div>
            <div className={styles.matn}>
              <p className={styles.para}>
                مواد کریستال فوتونیک قابل تغییر مغناطیسی رنگ (MTX) اجازه می دهد
                تا رنگ های مختلف را توسط میدان مغناطیسی تغییر دهید.
                <br />
                فناوری هسته تاپیک نانو برای نانوذرات تشکیل‌شده توسط کریستال فوتونی
                طراحی شده است که امکان اجرای رنگ‌های کامل مطابق با شدت میدان
                مغناطیسی به همراه روش تنظیم آرایه و فاصله را فراهم می‌کند.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.padding2} onClick={()=>{navigation('/technology/nanoplatform/MPD')}}>
          <div className={styles.animation2}>
            <div className={styles.img}>
              <img className={styles.aks} src={require("./images/b.png")} alt="MPD"/>
            </div>
            <div className={styles.matn}>
              <p className={styles.para}>
                فناوری Magnetophoretic Device Material (MPD) برای ساخت کپسول‌های
                پلیمری انعطاف‌پذیر و الاستیک که حاوی نانوذرات مغناطیسی یکنواخت
                در سیال هستند، کاربرد دارد. این مواد را می توان در یک فیلم
                انعطاف پذیر قابل نوشتن و پاک کرد که می تواند جایگزین تخته سفید
                معمولی یا تخته سیاه شود. این ماده سازگار با محیط زیست برای اتاق
                های تمیز مناسب است زیرا هیچ گونه گرد و غبار یا مواد مضر ایجاد
                نمی کند.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.padding2} onClick={()=>{navigation('/technology/nanoplatform/SPM')}}>
          <div className={styles.animation2}>
            <div className={styles.img}>
              <img className={styles.aks} src={require("./images/c.png")} alt="SPM" />
            </div>
            <div className={styles.matn}>
              <p className={styles.para}>
              ماده سوپرپارامغناطیس (SPM) تنها زمانی که میدان مغناطیسی وجود داشته باشد، خواص مغناطیسی قوی را حفظ می کند. این فناوری امکان جداسازی و خالص سازی مواد هدف را با اعمال گروه عاملی هدفمند به طور یکنواخت روی سطح نانوذرات فراهم می کند.

              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.padding2} onClick={()=>{navigation('/technology/nanoplatform/ETX')}}>
          <div className={styles.animation2}>
            <div className={styles.img}>
              <img className={styles.aks} src={require("./images/d.png")} alt="ETX"/>
            </div>
            <div className={styles.matn}>
              <p className={styles.para}>
              ETX یک فناوری مواد کریستال فوتونیک قابل تنظیم الکتریکی است که حاوی نانوذرات پراکنده ای است که به خوبی توسط سیگنال الکتریکی کنترل می شوند تا رنگ های متغیر را در تمام مناطق نور مرئی نشان دهند.

              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.padding2} onClick={()=>{navigation('/technology/nanoplatform/EPD')}}>
          <div className={styles.animation2}>
            <div className={styles.img}>
              <img className={styles.aks} src={require("./images/f.png")} alt="EPD" />
            </div>
            <div className={styles.matn}>
              <p className={styles.para}>
              EPD فناوری مواد قابل نمایش الکتروفورتیک است که نانوذرات پراکنده یکنواخت محیط دی الکتریک پایین با رنگ های مختلف را کنترل می کند. بسته به سیگنال قدرت خارجی، نانوذرات باردار با رنگ‌های مختلف به سمت بالا یا پایین سیال حرکت می‌کنند تا رنگ مربوطه را منتقل کنند.

              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.padding2} onClick={()=>{navigation('/technology/nanoplatform/ETD')}}>
          <div className={styles.animation2}>
            <div className={styles.img}>
              <img className={styles.aks} src={require("./images/g.png")} alt="ETD" />
            </div>
            <div className={styles.matn}>
              <p className={styles.para}>
              ETD بر اساس یک اصل الکتروفورز برای کنترل انتقال توسط سیگنال الکتریکی خارجی توسعه یافته است. این فناوری نوآورانه نانوذرات سیاه با بار منفی را در یک سیال شفاف قادر می‌سازد تا موقعیت نانوذرات را برای تغییر سطح شفافیت توسط سیگنال الکتریکی کنترل کنند.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
