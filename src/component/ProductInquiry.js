import React, { useEffect, useState } from "react";
import styles from "../style/Inquiry.module.css";
import { Divider } from "@mui/material";
import Accordion from "react-bootstrap/Accordion";
import { useLoadingContext } from "react-router-loading";
import loadData from "./fetchers";
import Formdesktop1 from "./Formdesktop1";
function ProductInquiry() {
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
      <div className={styles.title}> استعلام محصولات</div>
      <p className={styles.paragraph}>
        تاپیک نانو به همه سوالات شما در سریع ترین زمان ممکن پاسخ خواهد داد.
      </p>
      <Divider
        style={{
          marginBottom: "15px",
          fontSize: "25px",
          marginTop: "70px",
        }}
        className={styles.divider}
      >
        سوالات متداول گروه امنیتی
      </Divider>
      <Accordion style={{ direction: "rtl" }}>
        <Accordion.Item eventKey="0">
          <Accordion.Header className={styles.Htitle}>
            <span className={styles.span}>سوال1:</span>{" "}
            <span className={styles.question}>
              رقابت اصلی شما در مقایسه با سایر محصولات غیر تقلبی چیست؟
            </span>
          </Accordion.Header>
          <Accordion.Body className={styles.questionBox}>
            به طور کلی، فناوری‌های بازار ضد جعل عبارتند از: هولوگرام، جوهر
            فلورسنت، RFID، بارکد، کد QR و غیره. با این حال، از آنجایی که این
            فناوری‌ها برای مدت طولانی در بازار وجود داشته‌اند، برخی از مسائل از
            نظر امنیت به وجود آمده است. و تأیید فناوری ها؛ بنابراین، نیاز به راه
            حل جدید ضد جعل در حال افزایش است. از طرف دیگر راه حل تأیید واقعی ما
            دارای ویژگی های متمایز به شرح زیر است:
            <br />
            <br />
            1. امنیت بی نظیر:
            <br />
            فن‌آوری‌های رایج برای ضد جعل که در حال حاضر به طور گسترده در بازار
            استفاده می‌شوند، به‌عنوان بخشی از طراحی، بسته‌بندی و عملکرد ساده
            به‌جای فناوری ضد جعل در نظر گرفته می‌شوند. با این حال، محصولات
            امنیتی نوآورانه ما دارای مواد نانو نوآورانه MTX (فناوری کریستال
            فوتونیک قابل تنظیم رنگ مغناطیسی) هستند.
            <br />
            <br />
            2. تأیید آسان:
            <br />
            اساساً مصرف کنندگان در تشخیص محصولات اصلی و تقلبی با هولوگرام، جوهر
            فلورسنت، کد QR و غیره مشکل دارند و فناوری مانند RFID نیاز به یک
            دستگاه بازرسی جداگانه دارد. از طرف دیگر، راه حل امنیتی ما این مزیت
            را دارد که هر کسی می تواند به راحتی محصولات اصلی را با استفاده از
            آهنرباهای نزدیک (یعنی آهنرباها از تلفن همراه یا رایانه آزمایشگاهی یا
            آهنربای لاستیکی) تأیید کند.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className={styles.Htitle}>
            <span className={styles.span}>سوال2:</span>
            <span className={styles.question}>روش تایید واقعی چیست؟</span>
          </Accordion.Header>
          <Accordion.Body className={styles.questionBox}>
            فناوری نوآورانه MTX، ماده نانو ثبت اختراع IP است که با میدان
            مغناطیسی رنگ تغییر می‌کند و برای لایه‌های مختلف از جمله برچسب، فیلم
            بسته‌بندی انعطاف‌پذیر، کارت، کاغذ و غیره قابل استفاده است. توسط نوع
            یا شدت آهنربا ایجاد می شود. مواد کریستال فوتونیک قابل تنظیم با رنگ
            مغناطیسی مواد مبتنی بر فناوری است که فقط توسط این شرکت در جهان قابل
            تولید است. به دلیل امکان تکرار بسیار کم، محصولی که از مواد نانو
            استفاده شده است که رنگ یا طرح آن توسط آهنربا تغییر می کند، اصل بودن
            آن تایید می شود.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header className={styles.Htitle}>
            <span className={styles.span}>سوال3:</span>
            <span className={styles.question}>
              {" "}
              آیا می توانم یک تأیید واقعی بدون آهنربا انجام دهم؟
            </span>
          </Accordion.Header>
          <Accordion.Body className={styles.questionBox}>
            مواد نانو تاپیک نانو یک ماده کریستالی فوتونی است که توسط سوهان
            مغناطیسی تغییر رنگ می دهد. بنابراین، یک آهنربا ضروری است. با این
            حال، می توانید از آهنرباهایی استفاده کنید که مشخص نیستند اما به
            راحتی در زندگی روزمره نزدیک شما یافت می شوند، مانند آهنربا بلندگو یا
            دوربین تعبیه شده در تلفن هوشمند یا لبه لبه، یک آهنربای لاستیکی
            تبلیغاتی یا تزئینی.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header className={styles.Htitle}>
            <span className={styles.span}>سوال4:</span>
            <span className={styles.question}>
              تفاوت بین راه حل تأیید واقعی، M-TAG و راه حل بسته بندی واقعی،
              M-PAC در میان گروه محصولات امنیتی چیست؟تفاوت بین راه حل تأیید
              واقعی، M-TAG و راه حل بسته بندی واقعی، M-PAC در میان گروه محصولات
              امنیتی چیست؟
            </span>
          </Accordion.Header>
          <Accordion.Body className={styles.questionBox}>
            راه حل راستی آزمایی اصیل گروهی از محصولات امنیتی با مواد نانو قابل
            تنظیم رنگ مغناطیسی است که به شکل برچسب و بسته بندی انعطاف پذیر پیاده
            سازی شده است. M-TAG برای محصولات مختلف پس از اتمام بسته بندی قابل
            اجرا است و به عنوان یک برچسب امنیتی استفاده می شود در حالی که M-PAC
            مستقیماً هنگام پردازش یک فیلم بسته بندی انعطاف پذیر برای آن دسته از
            تولید کنندگانی که نیاز به تولید انبوه برای یک محصول دارند استفاده می
            شود.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header className={styles.Htitle}>
            <span className={styles.span}>سوال5:</span>
            <span className={styles.question}>
              چگونه می توانم از M-TAG یا M-PAC برای جلوگیری از استفاده مجدد به
              عنوان تأیید واقعی اطمینان حاصل کنم؟
            </span>
          </Accordion.Header>
          <Accordion.Body className={styles.questionBox}>
            M-TAG یک راه حل راستی آزمایی واقعی با اعمال آهنربا بر روی مواد نانو
            است که برای تغییر رنگ یا الگو فعال می شوند. اگر یک برچسب برداشته شود
            (جدا شود)، میلیون‌ها کپسول ماکرو تعبیه‌شده در فیلم از بین می‌روند و
            بنابراین هنگام استفاده از آهن‌ربا، رنگ یا طرح تغییر نمی‌کند. اگر
            می‌خواهید به صورت بصری بررسی کنید که آیا برچسب حذف شده است یا خیر،
            می‌توانید یک unction امنیتی اضافی اعمال کنید تا بدانید برچسب پیوست
            بسته باقی می‌ماند یا باز. از سوی دیگر، راه حل تأیید واقعی که
            مستقیماً روی فیلم بسته بندی انعطاف پذیر چاپ شده است، M-PAC امکان
            استفاده مجدد از آن بدون آسیب رساندن به فیلم بسته بندی محصول را
            ندارد.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header className={styles.Htitle}>
            <span className={styles.span}>سوال6:</span>
            <span className={styles.question}>
              مواد جدید نانو در کجا تولید و مدیریت می شوند؟
            </span>
          </Accordion.Header>
          <Accordion.Body className={styles.questionBox}>
            کل تولید مواد جدید نانو در مقر تاپیک نانو در شهر Pyongtack انجام می
            شود و به طور یکپارچه توسط سیستم مدیریت امنیت بالا کنترل و مدیریت می
            شود. فقط پرسنل مجاز می توانند به محل تولید وارد شوند و هر فرآیند
            ترانزیت مواد و محصولات تا پایان تحویل نهایی ثبت و پیگیری می شود.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header className={styles.Htitle}>
            <span className={styles.span}>سوال7:</span>
            <span className={styles.question}>
              آیا امکان خرید محصولات امنیتی به صورت شخصی وجود دارد؟
            </span>
          </Accordion.Header>
          <Accordion.Body className={styles.questionBox}>
            به دلیل هدف امنیتی بالای آن، مواد و برنامه های کاربردی نانو جدید به
            مصرف کنندگان فردی فروخته نمی شوند، بلکه فقط به مشتریان شرکتی فروخته
            می شوند. هنگامی که در مورد محصولات ما سؤالی دارید، لطفاً با نماینده
            فروش به آدرس Tapicnano@gmail.com تماس بگیرید و ما به سرعت با شما
            تماس خواهیم گرفت. متشکرم.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header className={styles.Htitle}>
            <span className={styles.span}>سوال8:</span>
            <span className={styles.question}>
              آیا امکان خرید مواد امنیتی وجود دارد؟
            </span>
          </Accordion.Header>
          <Accordion.Body className={styles.questionBox}>
            به عنوان مواد کریستال فوتونیک قابل تنظیم رنگ مغناطیسی برای امنیت که
            فقط توسط شرکت تولید می شود، ما مواد را طبق قرارداد با چند شرکای
            استراتژیک عرضه می کنیم. اگر در مورد همکاری تجاری با ما سؤالی دارید،
            لطفاً با ما در Tapicnano@gmail.com تماس بگیرید و ما مستقیماً با شما
            تماس خواهیم گرفت. متشکرم.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Divider
        style={{
          marginBottom: "15px",
          fontSize: "25px",
          marginTop: "70px",
          direction: "rtl",
        }}
        className={styles.divider}
      >
        سوالات متداول گروه BIO{" "}
      </Divider>
      <Accordion>
        <Accordion.Item eventKey="9">
          <Accordion.Header className={styles.Htitle}>
            <span className={styles.span}>سوال1:</span>
            <span className={styles.question}>
              آیا امکان خرید مواد امنیتی وجود دارد؟
            </span>
          </Accordion.Header>
          <Accordion.Body className={styles.questionBox}>
            M-Bead ما یک نانوذره سوپرپارامغناطیس با یک گروه عملکردی خاص روی سطح
            آن است. برخلاف روش مرسوم جداسازی ستونی یا گریز از مرکز، M-Bead برای
            تسهیل جداسازی و خالص سازی مواد مشخص شده مانند اسیدهای نوکلئیک و
            پروتئین های نوترکیب طراحی شده است.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="10">
          <Accordion.Header className={styles.Htitle}>
            <span className={styles.span}>سوال2:</span>
            <span className={styles.question}>
              رقابت M-Bead در مقایسه با سایرین چقدر است؟
            </span>
          </Accordion.Header>
          <Accordion.Body className={styles.questionBox}>
            ما به عنوان یک تولید کننده تخصصی مواد نانو، تکنولوژی و امکانات تولید
            انبوه را برای تولید بهترین کیفیت در جهان با قیمت مقایسه ای عالی
            داریم.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="11">
          <Accordion.Header className={styles.Htitle}>
            <span className={styles.span}>سوال3:</span>
            <span className={styles.question}>
              آیا می توانم با تغییر اندازه ذرات M-Bead سفارش بدهم؟
            </span>
          </Accordion.Header>
          <Accordion.Body className={styles.questionBox}>
            در حال حاضر M-Bead با اندازه های استاندارد 200 نانومتر و 500 نانومتر
            ارائه می شود. با این حال، یک اندازه سفارشی می تواند تولید شود. در
            این مورد، لازم است در مورد جزئیات صحبت کنید و لطفاً از طریق ایمیل با
            ما به آدرس Tapicnano@gmail.com تماس بگیرید، سپس در اسرع وقت با شما
            قرارداد می‌بندیم. متشکرم.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="12">
          <Accordion.Header className={styles.Htitle}>
            <span className={styles.span}>سوال4:</span>
            <span className={styles.question}>
              آیا میتوانم خواستار یک جلسه رسمی با شما باشم؟
            </span>
          </Accordion.Header>
          <Accordion.Body className={styles.questionBox}>
            حتما در صورت تمایل می توانید به ایمیل Tapicnano@gmail.com با ما تماس
            بگیرید.
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

export default ProductInquiry;
