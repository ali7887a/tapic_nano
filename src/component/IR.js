import styles from "../style/IR.module.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Videos from "./Videos";
import PaginationControlled from "./pagination";
import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import { useLoadingContext } from "react-router-loading";
import loadData from "./fetchers";
// modal ********************
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="xlg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton />
      <iframe
        id="media"
        frameborder="0"
        allowfullscreen="1"
        title="YouTube video player"
        src="https://www.youtube.com/embed/--1HGQvExXI?autoplay=0"
      ></iframe>
    </Modal>
  );
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function IR() {
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
  const [value, setValue] = React.useState(0);
  const [modalShow, setModalShow] = React.useState(false);
  useEffect(() => {
    setTimeout(function () {
      setModalShow(true);
    }, 300);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className={styles.showcase}>
        <h1>PR/IR</h1>
      </div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="black"
            indicatorColor="primary"
            className={styles.tabs}
            centered
          >
            <Tab
              label="PR"
              {...a11yProps(0)}
              style={{ fontSize: "40px", fontWeight: "bolder" }}
            />
            <Tab
              label="IR"
              {...a11yProps(1)}
              style={{ fontSize: "40px", fontWeight: "bolder" }}
            />
          </Tabs>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Box>
        <TabPanel value={value} index={0}>
          <h1 className={styles.title}>PR</h1>
          <p className={styles.p1}>
            ???????????????? ?????????? ?????????? ???????? ???? ???????? ?????? ???? ???????????? ???? ??????????.
          </p>
          <p className={styles.p2}>
            ???? ???????????????? ?????????? ?????? ?????????? ???????? ???? ???????? ?????? ???? ???????????? ???? ????????????.
          </p>
          <Divider>
            <Chip label="??????????????" />
          </Divider>
          <Videos />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <p className={styles.p3}>
            <a
              href="https://nanobrick.irpage.co.kr/#/main"
              className={styles.p3}
            >
              ?????? ???? ???????? ?????????? ???????? ????????????
            </a>
          </p>
          <Divider>
            <Chip label="????????" />
          </Divider>
          <PaginationControlled />
        </TabPanel>
      </Box>
    </>
  );
}

export default IR;
