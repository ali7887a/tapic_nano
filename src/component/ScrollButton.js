import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { Button } from "./Styles";

const ScrollButton = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 900;
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      {width < breakpoint ? (
        <></>
      ) : (
        <Button>
          <FaArrowCircleUp
            onClick={scrollToTop}
            style={{
              display: visible ? "inline" : "none",
              backgroundColor: "white",
              borderRadius: "50%",
            }}
          />
        </Button>
      )}
    </>
  );
};

export default ScrollButton;
