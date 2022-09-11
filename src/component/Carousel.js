import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "../style/Carousel.module.css"
function SliderCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className={styles.main}>
      <Carousel.Item className={styles.item}>
        <img
          className="d-block w-100"
          src={require("./images/vis_01.jpg")}
          alt="First slide"
        />
        <Carousel.Caption style={{ marginTop: "auto", marginBottom: "auto" }}>
          <p>نوآوری فراتر از تصور!!</p>
          <h1 className={styles.h1}>تاپیک نانو</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.item}>
        <img
          className="d-block w-100"
          src={require("./images/vis_02.jpg")}
          alt="Second slide"
        />

        <Carousel.Caption style={{ marginTop: "auto", marginBottom: "auto" }}>
          <p>الهام گرفته از:</p>
          <h1 className={styles.h1}>دل طبیعت</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.item}>
        <img
          className="d-block w-100"
          src={require("./images/vis_03.jpg")}
          alt="Third slide"
        />

        <Carousel.Caption style={{ marginTop: "auto", marginBottom: "auto" }}>
          <p>
            پیشرفت مداوم از طریق
          </p>
          <h1 className={styles.h1}>نوآوری</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.item}>
        <img
          className="d-block w-100"
          src={require("./images/main_tech.jpg")}
          alt="Third slide"
        />

        <Carousel.Caption style={{ marginTop: "auto", marginBottom: "auto" }}>
          <p>
            هدایت از راه
          </p>
          <h1 className={styles.h1}>تکنولوژی</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SliderCarousel;
