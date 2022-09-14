import { Divider } from "@mui/material";
import React from "react";

function List1() {
  return (
    <div>
      <div
        className="card mb-3"
        style={{
          maxWidth: "640px",
          marginRight: "auto",
          marginLeft: "auto",
          border: "none",
        }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={require("./images/withback.png")}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body" style={{ marginTop: "20px" }}>
              <p className="card-text" style={{ direction: "rtl" }}>
                گزارش انتصاب حسابرس خارجی
              </p>
              <p className="card-text">
                <small className="text-muted">Dec 02, 2020</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Divider
        style={{ marginTop: "5px", marginBottom: "10px", color: "black" }}
      />
      <div
        className="card mb-3"
        style={{
          maxWidth: "640px",
          marginRight: "auto",
          marginLeft: "auto",
          border: "none",
        }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={require("./images/withback.png")}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body" style={{ marginTop: "20px" }}>
              <p className="card-text" style={{ direction: "rtl" }}>
                آخرین اخبار IR/PR را از تاپیک نانو ایراگو دریافت کنید
              </p>
              <p className="card-text">
                <small className="text-muted">Nov 13, 2020</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Divider
        style={{ marginTop: "5px", marginBottom: "10px", color: "black" }}
      />
      <div
        className="card mb-3"
        style={{
          maxWidth: "640px",
          marginRight: "auto",
          marginLeft: "auto",
          border: "none",
        }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={require("./images/withback.png")}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body" style={{ marginTop: "20px" }}>
              <p className="card-text" style={{ direction: "rtl" }}>
                با تشکر فهرست KOSDAQ
              </p>
              <p className="card-text">
                <small className="text-muted">Aug 16, 2019</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Divider
        style={{ marginTop: "5px", marginBottom: "10px", color: "black" }}
      />
    </div>
  );
}

export default List1;
