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
              src={require("./images/mmd.jpg")}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body" style={{ marginTop: "20px" }}>
              <p className="card-text" style={{ direction: "rtl" }}>
                صورت مالی پانزدهم
              </p>
              <p className="card-text">
                <small className="text-muted">Mar 29, 2022</small>
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
              src={require("./images/mmd.jpg")}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body" style={{ marginTop: "20px" }}>
              <p className="card-text" style={{ direction: "rtl" }}>
                اطلاعیه تشکیل پانزدهمین مجمع عمومی عادی صاحبان سهام
              </p>
              <p className="card-text">
                <small className="text-muted">Mar 11, 2022</small>
              </p>
            </div>
          </div>
        </div>
        <Divider
          style={{ marginTop: "5px", marginBottom: "10px", color: "black" }}
        />
      </div>
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
              src={require("./images/mmd.jpg")}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body" style={{ marginTop: "20px" }}>
              <p className="card-text" style={{ direction: "rtl" }}>
                اطلاعیه انتشار سهام جدید
              </p>
              <p className="card-text">
                <small className="text-muted">Dec 10, 2021</small>
              </p>
            </div>
          </div>
        </div>
        <Divider
          style={{ marginTop: "5px", marginBottom: "10px", color: "black" }}
        />
      </div>
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
              src={require("./images/mmd.jpg")}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body" style={{ marginTop: "20px" }}>
              <p className="card-text" style={{ direction: "rtl" }}>
                اعلام تاریخ مبنا بر اساس تقسیم تراز (اصلاح)
              </p>
              <p className="card-text">
                <small className="text-muted">Apr 15, 2021</small>
              </p>
            </div>
          </div>
        </div>
        <Divider
          style={{ marginTop: "5px", marginBottom: "10px", color: "black" }}
        />
      </div>
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
              src={require("./images/mmd.jpg")}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body" style={{ marginTop: "20px" }}>
              <p className="card-text" style={{ direction: "rtl" }}>
                اعلام تاریخ پایه با توجه به تقسیم سهام
              </p>
              <p className="card-text">
                <small className="text-muted">Mar 31, 2021</small>
              </p>
            </div>
          </div>
        </div>
        <Divider
          style={{ marginTop: "5px", marginBottom: "10px", color: "black" }}
        />
      </div>
    </div>
  );
}

export default List1;
