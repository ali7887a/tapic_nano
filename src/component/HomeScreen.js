import Card1 from "./Card1";
import SliderCarousel from "./Carousel";
import Introduction from "./Introduction";
import Introduction2 from "./Introduction2";
import styles from "../style/HomeScreen.module.css";
import AboveFooter from "./AboveFooter";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useLoadingContext } from "react-router-loading";
import loadData from "./fetchers";
function HomeScreen() {
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
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const location = useLocation();
  const path = location.pathname;
  const store = window.localStorage;
  let url = '';
  let prevUrl = '';

  url = store.getItem('url');
  store.setItem('prevUrl', url);
  store.setItem('url', path);

  url = store.getItem('url');
  prevUrl = store.getItem('prevUrl');
  return (
    <>
      <SliderCarousel />
      <Card1 />
      <Introduction />
      <h1 className={styles.title}>تکنولوژی</h1>
      <br />
      <p className={styles.caption}>
        TAPICNANO با الهام دل طبیعت از شکل گیری نانو، شش فناوری نانو هسته ای را
        توسعه داده است.
      </p>
      <Introduction2/>
      <AboveFooter/>
    </>
  );
}

export default HomeScreen;
