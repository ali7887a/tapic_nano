import { Divider } from "@mui/material";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { useLocation , useNavigate } from "react-router-dom";
function Mpurikit() {
  const navigation = useNavigate();
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
  const pre = localStorage.getItem('prevUrl')
  if(pre.includes("/product")){
    console.log('current page')
  }else{
    window.scrollTo(0,0)
  }
  return (
    <>
      <Card style={{ width: "98vw", border: "none" }}>
        <Card.Body>
          <Divider
            style={{
              marginTop: "15px",
              marginBottom: "15px",
              fontSize: "25px",
            }}
          >
            تعریف محصول{" "}
          </Divider>
          <Card.Text
            style={{
              direction: "rtl",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            M-PuriKit (Kit Purification DNA Plasmid) محصولی است که می تواند DNA
            پلاسمید را از کشت باکتری استخراج کند و سریع ترین و ساده ترین راه
            برای استخراج پلاسمیدهای با خلوص بالا است. با استفاده از نانوذرات
            مغناطیسی روی محلول قلیایی موجود، می توان به سرعت بقایای سلولی را
            بدون استفاده از روش سانتریفیوژ عمومی جدا کرد و حذف کرد و محصولی است
            که به راحتی می تواند تنها DNA خالص را با استفاده از مغناطیس استخراج
            کند. به علاوه این محصول می تواند با تنظیم حجم بافر و دانه های
            مغناطیسی حجم استخراج DNA پلاسمید (مینی، میدی، ماکسی و ...) را به روش
            های مختلف تنظیم کند..
          </Card.Text>
          <Card.Img variant="top" src={require("./images/mpurikit/1.jpg")} />
        </Card.Body>
      </Card>
      <Card style={{ width: "98vw", border: "none" }}>
        <Card.Body>
          <Divider
            style={{
              marginTop: "15px",
              marginBottom: "15px",
              fontSize: "25px",
            }}
          >
            فرآیند استخراج DNA پلاسمید
          </Divider>
          <Card.Img variant="top" src={require("./images/mpurikit/2.jpg")} />
        </Card.Body>
      </Card>
      <Card style={{ width: "98vw", border: "none" }}>
        <Card.Body>
          <Divider
            style={{
              marginTop: "15px",
              marginBottom: "15px",
              fontSize: "25px",
            }}
          >
مشخصات محصول
          </Divider>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th style={{ textAlign: "center" }}>تقسیم</th>
                <th style={{ textAlign: "center" }}>Min</th>
                <th style={{ textAlign: "center" }}>Mid</th>
                <th style={{ textAlign: "center" }}>Max</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ direction: "rtl" }}>جلد استاندارد (جلد فرهنگی)	</td>
                <td style={{ direction: "rtl" }}>1-10 میلی لیتر	</td>
                <td style={{ direction: "rtl" }}>20-50 میلی لیتر	</td>
                <td style={{ direction: "rtl" }}>20-50 میلی لیتر
</td>
              </tr>
              <tr>
                <td style={{ direction: "rtl" }}>زمان آماده سازی	</td>
                <td style={{ direction: "rtl" }}> 15 دقیقه	</td>
                <td style={{ direction: "rtl" }}> 15 دقیقه	</td>
                <td style={{ direction: "rtl" }}> 15 دقیقه	</td>
              </tr>
              <tr>
                <td style={{ direction: "rtl" }}>حجم شستشو	</td>
                <td style={{ direction: "rtl" }}>50 اول	</td>
                <td style={{ direction: "rtl" }}>250 اول	</td>
                <td style={{ direction: "rtl" }}>250 اول
</td>
              </tr>
              <tr>
                <td style={{ direction: "rtl" }}>بازده DNA مورد انتظار	</td>
                <td style={{ direction: "rtl" }}>تا 45 گرم	</td>
                <td style={{ direction: "rtl" }}>تا 450 گرم	</td>
                <td style={{ direction: "rtl" }}>تا 450 گرم	</td>
              </tr>
              <tr>
                <td style={{ direction: "rtl" }}>خلوص DNA مورد انتظار	</td>
                <td style={{ direction: "rtl" }} colSpan={3}>1.8  A260/28</td>
              </tr>
            </tbody>
          </Table>{" "}
        </Card.Body>
      </Card>
      <Card style={{ width: "98vw", border: "none" }}>
        <Card.Body>
          <Divider
            style={{
              marginBottom: "15px",
              fontSize: "25px",
            }}
          >
            پوشش محصول{" "}
          </Divider>
          <Row xs={1} md={3} className="g-6" style={{ marginTop: "25px" }}>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img
                  variant="top"
                  src={require("./images/mpurikit/3.jpg")}
                />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    PCR (واکنش زنجیره ای پلیمراز)
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img
                  variant="top"
                  src={require("./images/mpurikit/4.jpg")}
                />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    شبیه سازی ژن
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Img
                  variant="top"
                  src={require("./images/mpurikit/5.jpg")}
                />
                <Card.Body>
                  <Card.Text style={{ direction: "rtl", textAlign: "center" }}>
                    توالی یابی ژن
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
        <div
          style={{
            textAlign: "center",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
<Button
            variant="danger"
            size="lg"
            onClick={() => navigation("/CS/productInquiry")}
          >
            درخواست کالا
          </Button>
          <Button
            variant="danger"
            size="lg"
            onClick={() => navigation("/technology/nanoplatform/SPM")}
          >
            فناوری کاربردی: SPM
          </Button>
        </div>
      </Card>
    </>
  );
}

export default Mpurikit;
