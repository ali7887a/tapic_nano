import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import styles from '../style/Footer.module.css'

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 2,
          px: 2,
          mt: "auto",
          backgroundColor: "rgba(0,0,0,0.9)",
          borderRadius:"0px"
        }}
      >
        <Container  style={{ textAlign: "center" }}>
            <div className={styles.imagelist}>
                <a href="https://www.facebook.com/nanobrick">
                    <img src={require('./images/facebook.png')}/>
                </a>
                <a href="https://www.linkedin.com/company/nanobrick">
                    <img src={require('./images/linkdin.png')}/>
                </a>
                <a href="https://www.youtube.com/channel/UC6664vyPY2C0soAQzbQ6F7A">
                    <img src={require('./images/kossher1.png')}/>
                </a>
                <a href="https://m.weibo.cn/u/7281508216">
                    <img src={require('./images/kossher2.png')}/>
                </a>
                <a href="#">
                    <img src={require('./images/kossher 3.png')} style={{width:"30px" , height:"30px"}}/>
                </a>
            </div>
          <p className={styles.para2}>
          Tapicnano@gmail.com / +98 912 224 5957
          </p>
          <p className={styles.para2}>
          Copyright(©) 2022
          </p>
        </Container>
      </Box>
    </Box>
  );
}
