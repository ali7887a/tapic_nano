import React, { useEffect , useState } from "react";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 900;
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return width < breakpoint ? <HeaderMobile/> : <HeaderDesktop/>;
};

export default Header;