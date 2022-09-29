import React, { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router-loading";
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
import NanoPlatform from "./component/NanoPlatform";
import Technology from "./component/Technology";
import NotFound from "./component/NotFound";
import MTX from "./component/MTX";
import MPD from "./component/MPD";
import SPM from "./component/SPM";
import ETX from "./component/ETX";
import EPD from "./component/EPD";
import ETD from "./component/ETD";
import IP from "./component/IP";
import CS from "./component/CS";
import ProductInquiry from "./component/ProductInquiry";
import IRInquiry from "./component/IRInquiry";
import UnfairTrading from "./component/UnfairTrading";
import OtherInquiry from "./component/OtherInquiry";
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
          <Route path="/" element={<HomeScreen />} loading/>
          <Route path="ir" element={<IR />} loading/>
          <Route path="ir2" element={<IR2 />} loading />
          <Route path="Product" element={<Product />}>
            <Route path="security" element={<Security />}>
              <Route index element={<Mtag />} loading />
              <Route path="Mpac" element={<Mpac />} loading />
              <Route path="Mcard" element={<Mcard />} loading />
              <Route path="Msecupaper" element={<MsecuPaper />} loading />
              <Route path="Msecuprint" element={<MsecuPrint />} loading />
              <Route path="Mcurrency" element={<Mcurrency />} loading />
            </Route>
            <Route path="Bio" element={<BioGroup />}>
              <Route index element={<MBead />} loading/>
              <Route path="purikit" element={<Mpurikit />} loading/>
            </Route>
            <Route path="display" element={<Display />}>
              <Route index element={<ExInk />} loading />
              <Route path="EpInk" element={<EpInk />} loading/>
              <Route path="EtInk" element={<EtInk />} loading/>
            </Route>
            <Route path="functional" element={<Functional />}>
              <Route index element={<Mskin />} loading/>
              <Route path="mpaper" element={<Mpaper />} loading/>
            </Route>
          </Route>
          <Route path="technology" element={<Technology />}>
            <Route path="nanoplatform" element={<NanoPlatform />}>
              <Route index element={<MTX />}loading />
              <Route path="MPD" element={<MPD />} loading />
              <Route path="SPM" element={<SPM />} loading />
              <Route path="ETX" element={<ETX />} loading />
              <Route path="EPD" element={<EPD />} loading />
              <Route path="ETD" element={<ETD />} loading />
            </Route>
            <Route path="IP" element={<IP />} loading />
          </Route>
          <Route path="CS" element={<CS />}>
            <Route path="productInquiry" element={<ProductInquiry />} loading />
            <Route path="IRInquiry" element={<IRInquiry />} loading/>
            <Route path="UnfairTrading" element={<UnfairTrading />} loading/>
            <Route path="OtherInquiry" element={<OtherInquiry />} loading/>
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <ScrollButton />
        {width > breakpoint && <Footer />}
      </HashRouter>
    </>
  );
};

export default App;
