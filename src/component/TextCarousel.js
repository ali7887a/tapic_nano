import React from "react";
import {Link, useNavigate} from 'react-router-dom'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../style.scss";
import styles from "../style/textCarousel.module.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";

export default function TextCarousel() {
  const navigation = useNavigate()

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
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
        className={`${styles.swip} ${"mySwiper"}`}
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image":
              "url(http://www.nanobrick.co.kr/wp/wp-content/uploads/2018/09/m_sec_02.jpg)",
            marginRight: "auto",
            marginLeft: "auto",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide className={styles.padding}>
          <div className={styles.animation} onClick={()=> navigation('/product/security')}>
            <div className="title" data-swiper-parallax="-300">
              گروه امنیتی
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              M-Tag
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p style={{ direction: "rtl" }}>
                M-Tag یک راه حل غیرقابل جعل است که اولین فناوری در جهان است. از
                فناوری MTX برای جلوگیری از تکرارهای احتمالی استفاده می کند. این
                محصول تخصصی برای حفاظت از برند تولید کنندگان و توزیع کنندگان
                کالاهای مصرفی مختلف لوازم آرایشی، دارویی، تنباکو، مشروبات الکلی،
                کالاهای لوکس است.
              </p>
            </div>
            <div className={styles.icon}>
              <AddCircleIcon style={{ backgroundColor: "white" }} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.padding}>
          <div className={styles.animation} onClick={()=> navigation('/product/security/mpac')}>
            <div className="title" data-swiper-parallax="-300">
              گروه امنیتی{" "}
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              M-Pac
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p style={{ direction: "rtl" }}>
                M-Pac یک محصول فیلم بسته بندی با عملکرد بالا با مواد نانو قابل
                تنظیم رنگ است. فناوری هسته MTX به طور مستقیم در ابتدای فرآیند
                تولید بر روی فیلم بسته بندی انعطاف پذیر برای راه حل ضد جعل
                استفاده می شود.
              </p>
            </div>
            <div className={styles.icon}>
              <AddCircleIcon style={{ backgroundColor: "white" }} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.padding}>
          <div className={styles.animation} onClick={()=> navigation('/product/security/mcard')}>
            <div className="title" data-swiper-parallax="-300">
              گروه امنیتی
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              M-Card
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p style={{ direction: "rtl" }}>
                M-Card یک محلول غیرقابل جعل مبتنی بر کارت پلاستیکی است که احتمال
                تکرار آن با MTX (مواد نانو قابل تغییر رنگ مغناطیسی) کمتر است.
                برای جلوگیری موثر از جعل در مناطق مختلف از جمله کارت گارانتی،
                کارت اعتباری، کارت پیش پرداخت، کارت شناسایی و غیره قابل استفاده
                است.
              </p>
            </div>
            <div className={styles.icon}>
              <AddCircleIcon style={{ backgroundColor: "white" }} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.padding}>
          <div className={styles.animation} onClick={()=> navigation('/product/security/msecupaper')}>
            <div className="title" data-swiper-parallax="-300">
              گروه امنیتی
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              M-SecuPaper
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p style={{ direction: "rtl" }}>
                M-SecuPaper یک راه حل امنیتی اسناد کاربر پسند است که به کاربران
                امکان می دهد اسناد ایمن را مستقیماً ایجاد کنند. دارای احراز هویت
                ویژه به همراه مواد نانو قابل تنظیم رنگ مغناطیسی (MTX) است و برای
                اسناد رسمی ادارات دولتی یا شرکت ها قابل استفاده است.
              </p>
            </div>
            <div className={styles.icon}>
              <AddCircleIcon style={{ backgroundColor: "white" }} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.padding}>
          <div className={styles.animation} onClick={()=> navigation('/product/security/msecuPrint')}>
            <div className="title" data-swiper-parallax="-300">
              گروه امنیتی
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              M-SecuPrint
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p style={{ direction: "rtl" }}>
                M-SecuPrint یک ماده امنیتی جدید است که با استفاده از فناوری
                کریستال فوتونیک قابل تنظیم مغناطیسی رنگی (MTX) امکان چاپ های
                مختلف را فراهم می کند. برای اسناد امنیتی مختلف مانند گذرنامه،
                گواهینامه، تمبر مالیاتی، رسید، بلیط و غیره و برنامه های ضد جعل
                قابل اجرا است.
              </p>
            </div>
            <div className={styles.icon}>
              <AddCircleIcon style={{ backgroundColor: "white" }} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.padding}>
          <div className={styles.animation} onClick={()=> navigation('/product/security/mcurrency')}>
            <div className="title" data-swiper-parallax="-300">
              گروه امنیتی
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              M-Currency
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p style={{ direction: "rtl" }}>
                M-Currency یک محصول برجسته از مواد نانو است که دارای فناوری
                پیشرفته نانو است و دارای عملکردهای امنیتی منحصر به فردی است که
                به طور خاص برای اسکناس راه حل مالی توسعه یافته است که به دوام
                بسیار دقیق و مقاومت شیمیایی نیاز دارد.
              </p>
            </div>
            <div className={styles.icon}>
              <AddCircleIcon style={{ backgroundColor: "white" }} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.padding}>
          <div className={styles.animation} onClick={()=> navigation('/product/bio')}>
            <div className="title" data-swiper-parallax="-300">
              گروه بیوزیستی
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              M-Bead
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p style={{ direction: "rtl" }}>
                M-Bead با استفاده از مواد سوپرپارامغناطیس (SPM) ساخته شده است که
                می تواند مواد خاص (پروتئین، نیترات، سزیم و غیره) را به سرعت و به
                سادگی توسط میدان مغناطیسی جدا و خالص کند.
              </p>
            </div>
            <div className={styles.icon}>
              <AddCircleIcon style={{ backgroundColor: "white" }} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.padding}>
          <div className={styles.animation} onClick={()=> navigation('/product/bio/purikit')}>
            <div className="title" data-swiper-parallax="-300">
              گروه بیوزیستی
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              M-PuriKit
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p style={{ direction: "rtl" }}>
                M-PuriKit به طور خاص برای استخراج DNA پلاسمید از محلول کشت شده
                باکتریایی توسعه یافته است. این سریعترین و ساده ترین راه برای
                استخراج پلاسمید با کارایی بالا است.
              </p>
            </div>
            <div className={styles.icon} >
              <AddCircleIcon style={{ backgroundColor: "white" }} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.padding}>
          <div className={styles.animation} onClick={()=> navigation('/product/functional')}>
            <div className="title" data-swiper-parallax="-300">
              گروه عملکردی
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              M-Skin
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p style={{ direction: "rtl" }}>
                M-Skin یک فیلم کاربردی است که برای نمایش شدت میدان مغناطیسی به
                رنگ وسایل مختلف نشانگر مانند ابزارهای اندازه گیری میدان مغناطیسی
                و MRI و غیره ساخته شده است.
              </p>
            </div>
            <div className={styles.icon}>
              <AddCircleIcon style={{ backgroundColor: "white" }} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.padding}>
          <div className={styles.animation} onClick={()=> navigation('/product/functional/mpaper')}>
            <div className="title" data-swiper-parallax="-300">
              گروه عملکردی
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              M-Paper
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p style={{ direction: "rtl" }}>
                M-Paper یک محصول فیلم فوق سبک است که به راحتی توسط یک قلم
                مغناطیسی نوشته و پاک می شود. این لوازم التحریر سازگار با محیط
                زیست است که گرد و غبار یا مواد مضر تولید نمی کند.
              </p>
            </div>
            <div className={styles.icon}>
              <AddCircleIcon style={{ backgroundColor: "white" }} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.padding}>
          <div className={styles.animation} onClick={()=> navigation('/product/display')}>
            <div className="title" data-swiper-parallax="-300">
              گروه نمایش
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              EX-Ink
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p style={{ direction: "rtl" }}>
                EX-Ink یک محلول مواد قابل تغییر رنگ الکتریکی است که حاوی
                نانوذرات کریستال فوتونیک پراکنده است که به خوبی توسط سیگنال
                الکتریکی کنترل می شود تا رنگ های متغیر را در تمام مناطق نور مرئی
                نشان دهد.
              </p>
            </div>
            <div className={styles.icon}>
              <AddCircleIcon style={{ backgroundColor: "white" }} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.padding}>
          <div className={styles.animation} onClick={()=> navigation('/product/display/etink')}>
            <div className="title" data-swiper-parallax="-300">
              گروه نمایش
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              ET-Ink
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p style={{ direction: "rtl" }}>
                ET-Ink یک اصل الکتروفورز حامل راه حل کنترل انتقال است که می
                تواند انتقال را توسط سیگنال الکتریکی خارجی تنظیم کند. نانوذرات
                سیاه با بار منفی در یک سیال شفاف امکان تغییر موقعیت نانوذرات را
                برای کنترل ظریف سطح شفافیت فراهم می‌کند.
              </p>
            </div>
            <div className={styles.icon}>
              <AddCircleIcon style={{ backgroundColor: "white" }} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.padding}>
          <div className={styles.animation} onClick={()=> navigation('/product/display/epink')}>
            <div className="title" data-swiper-parallax="-300">
              گروه نمایش
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              EP-Ink
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p style={{ direction: "rtl" }}>
                EP-Ink محلول مواد قابل نمایش الکتروفورزی است که حاوی نانوذرات
                پراکنده یکنواخت از محیط دی الکتریک پایین با رنگ های مختلف است.
                این یک راه حل نوآورانه با دید عالی است که امکان حفظ رنگ مشترک را
                حتی در غیاب جریان در حالی که زیر نور خورشید بیشتر دیده می شود،
                می دهد.
              </p>
            </div>
            <div className={styles.icon}>
              <AddCircleIcon style={{ backgroundColor: "white" }} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
