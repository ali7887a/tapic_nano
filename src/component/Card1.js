import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import styles from "../style/Card1.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ActionRefresh } from "../redux/action";
function Card1() {
  const dispatch = useDispatch();
  return (
    <CardGroup
      className={styles.card}
      style={{
        direction: "rtl",
        width: "85vw",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "15px",
        border: "none",
      }}
    >
      <Card
        style={{ borderRadius: "8px" }}
        className={styles.children}
        as={Link}
        to="ir"
        onClick={dispatch(ActionRefresh(true))}
      >
        <Card.Body>
          <Card.Title>اخبار</Card.Title>
          <Card.Text>
            صفحه تاپیک نانو IRGO برای آخرین اخبار در مورد IR/PR
          </Card.Text>
        </Card.Body>
        <Card.Img
          variant="top"
          style={{
            width: "100%",
            maxWidth: "286px",
            maxHeight: "161px",
            marginBottom: "20px",
            marginRight: "auto",
            marginLeft: "auto",
          }}
          src={require("./images/NANO.png")}
        />
      </Card>
      <Card
        className={styles.children}
        as={Link}
        to="ir2"
        style={{ borderRadius: "8px" }}
      >
        <Card.Body>
          <Card.Title>بیانیه مطبوعاتی</Card.Title>
          <Card.Text>
            دریافت گواهینامه استاندارد بین المللی برای معرف های استخراج زیستی
          </Card.Text>
        </Card.Body>
        <Card.Img
          style={{
            width: "100%",
            maxWidth: "286px",
            maxHeight: "161px",
            marginBottom: "20px",
            marginRight: "auto",
            marginLeft: "auto",
          }}
          variant="top"
          src={require("./images/2.jpg")}
        />
      </Card>
      <Card
        className={styles.children}
        as={Link}
        to="ir"
        style={{ borderRadius: "8px" }}
      >
        <Card.Body>
          <Card.Title>انتشار ویدئو</Card.Title>
          <Card.Text>دانه های مغناطیسی برای استخراج RNA ویروسی</Card.Text>
        </Card.Body>
        <Card.Img
          style={{
            width: "100%",
            maxWidth: "286px",
            maxHeight: "161px",
            marginBottom: "20px",
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: "5px",
          }}
          variant="top"
          src={require("./images/3.png")}
        />
      </Card>
    </CardGroup>
  );
}

export default Card1;
