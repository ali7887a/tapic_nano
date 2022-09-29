import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import svg from "./images/error-404-on-screen-svgrepo-com.svg";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
export default function NotFound() {
  const navigation = useNavigate();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ height: "100vh" }}>
          <img src={svg} />
          <p style={{textAlign:'center' , direction:"rtl" , fontWeight:"bold"}}>صفحه مورد نظر یافت نشد!!</p>
          <div style={{ display: "flex" , justifyContent:"center"}}>
            <Button
              variant="danger"
              size="medium"
              onClick={() => navigation("/")}
              style={{marginBottom:'60px'}}
            >
              برگشت به خانه
            </Button>
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}
