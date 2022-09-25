import React from "react";
import styles from "../style/Introduction.module.css";
import TextCarousel2 from "./TextCarousel2";
function Introduction() {
  return (
    <div className={styles.main2}> 
      <h1 style={{ textAlign: "center", color: "black" }}>
        فناوری‌های اصلی نانو پلتفرم فعال
      </h1>
      <p style={{ direction: "rtl", color: "black", textAlign: "center" , marginBottom:"0px"}}>
        TAPICNANO شش فناوری نانو هسته ای را با الهام از طبیعت مادر به دست آورده
        است. این شرکت مواد نانو نوآورانه‌ای را توسعه داده است: فناوری نانو
        کریستال فوتونی قابل تغییر رنگ با استفاده از تشکیل رنگ آفتاب‌پرست با توجه
        به محیط اطراف توسعه یافته است و فناوری نانو انتقال با اجرای روش استتار
        اختاپوس ایجاد شده است. این شرکت تلاش‌های بی‌پایان نوآوری R&D را برای
        دستیابی به فناوری‌های نانویی جدید که می‌تواند توسط سیگنال‌های مغناطیسی
        یا الکتریکی خارجی برای تغییر رنگ، الگو و شفافیت کنترل شود، تحمل کرده
        است. بنابراین، این شرکت دارایی های معنوی مختلفی در کره و خارج از کشور به
        دست آورده است.
      </p>
      <TextCarousel2 />
    </div>
  );
}

export default Introduction;
