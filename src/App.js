import React, { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import BioGroup from "./component/BioGroup";
import Display from "./component/Display";
import Footer from "./component/Footer";
import HomeScreen from "./component/HomeScreen";
import IR from "./component/IR";
import IR2 from "./component/IR2";
import MBead from "./component/MBead";
import Mpac from "./component/Mpac";
import Mpurikit from "./component/Mpurikit";
import Mtag from "./component/Mtag";
import Product from "./component/Product";
import ScrollButton from "./component/ScrollButton";
import Security from "./component/Security";
import Header from "./Header/Header";
import EpInk from "./component/EpInk";
import EtInk from "./component/EtInk";
import ExInk from "./component/EXInk";
import Functional from "./component/Functional";
import Mskin from "./component/Mskin";
import Mpaper from "./component/Mpaper";
import Mcard from "./component/Mcard";
import MsecuPaper from "./component/MsecuPaper";
import Mcurrency from "./component/Mcurrency";
import MsecuPrint from "./component/MsecuPrint";
import Technology from "./component/Technology";
import NanoPlatform from "./component/NanoPlatform";
import MTX from "./component/MTX";
import MPD from "./component/MPD";
import SPM from "./component/SPM";
import ETX from "./component/ETX";
import EPD from "./component/EPD";
import ETD from "./component/ETD";
import IP from "./component/IP";
const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 900;
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="ir" element={<IR />} />
          <Route path="ir2" element={<IR2 />} />
          <Route path="Product" element={<Product />}>
            <Route path="security" element={<Security />}>
              <Route index element={<Mtag />} />
              <Route path="Mpac" element={<Mpac />} />
              <Route path="Mcard" element={<Mcard />} />
              <Route path="Msecupaper" element={<MsecuPaper />} />
              <Route path="Msecuprint" element={<MsecuPrint />} />
              <Route path="Mcurrency" element={<Mcurrency />} />
            </Route>
            <Route path="Bio" element={<BioGroup />}>
              <Route index element={<MBead />} />
              <Route path="purikit" element={<Mpurikit />} />
            </Route>
            <Route path="display" element={<Display />}>
              <Route index element={<ExInk />} />
              <Route path="EpInk" element={<EpInk />} />
              <Route path="EtInk" element={<EtInk />} />
            </Route>
            <Route path="functional" element={<Functional />}>
              <Route index element={<Mskin />} />
              <Route path="mpaper" element={<Mpaper />} />
            </Route>
          </Route>
          <Route path="technology" element={<Technology />}>
            <Route path="nanoplatform" element={<NanoPlatform />}>
              <Route index element={<MTX />} />
              <Route path="MPD" element={<MPD />} />
              <Route path="SPM" element={<SPM />} />
              <Route path="ETX" element={<ETX />} />
              <Route path="EPD" element={<EPD />} />
              <Route path="ETD" element={<ETD />} />
            </Route>
            <Route path="IP" element={<IP />} />
          </Route>
        </Routes>
        <ScrollButton />
        {width > breakpoint && <Footer />}
      </HashRouter>
    </>
  );
};

export default App;
