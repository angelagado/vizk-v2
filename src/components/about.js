import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import Fade from "react-reveal/Fade";

import AppHeader from "./header";
import AppFooter from "./footer";

import img1 from "../assets/images/about3.jpg";
import img2 from "../assets/images/about2.jpeg";
import AppContact from "./contact";

function AppAbout() {
  return (
    <div>
      <AppHeader />
      <Fade left big>
        <div className="about-hero">
          <Carousel>
            <Carousel.Item>
              <img src={img1} />
              <Carousel.Caption>
                <h1>Lorem ipsum</h1> <br />
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={img1} />
              <Carousel.Caption>
                <h1>Dolor sit amet</h1> <br />
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </Fade>

      <section id="about" className="block about-block">
        <Container fluid>
          <Fade bottom big delay={100}>
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit dicta veritatis sint quidem asperiores magni eaque
              praesentium temporibus, magnam, eveniet consequatur possimus
              nihil? Nemo deserunt repudiandae soluta neque doloribus, quo!
            </p>
          </Fade>
          <br /> <br />
          <Fade left big>
            <Row>
              <Col sm={6}>
                <h1 style={{ textAlign: "left" }}>
                  <span>Lorem</span> ipsum
                </h1>
                <p style={{ textAlign: "left" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit dicta veritatis sint quidem asperiores magni
                  eaque praesentium temporibus, magnam, eveniet consequatur
                  possimus nihil? Nemo deserunt repudiandae soluta neque
                  doloribus, quo! Vitae alias ex error distinctio laudantium
                  recusandae, iure. Vel nisi soluta, minus consectetur
                  reiciendis laborum, laudantium perspiciatis quos molestias
                  quam eum. Vitae alias ex error distinctio laudantium
                  recusandae, iure. Vel nisi soluta, minus consectetur
                  reiciendis laborum, laudantium perspiciatis quos molestias
                  quam eum.
                </p>
              </Col>
              <Col sm={6}>
                <Image src={img2} />
              </Col>
            </Row>
          </Fade>
        </Container>
        <br /> <br />
        <br /> <br />
        <Container fluid>
          <Fade right big delay={100}>
            <Row>
              <Col sm={6}>
                <Image src={img2} />
              </Col>
              <Col sm={6}>
                <h1 style={{ textAlign: "end" }}>
                  Lorem <span>ipsum</span>
                </h1>
                <p style={{ textAlign: "end" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit dicta veritatis sint quidem asperiores magni
                  eaque praesentium temporibus, magnam, eveniet consequatur
                  possimus nihil? Nemo deserunt repudiandae soluta neque
                  doloribus, quo! Vitae alias ex error distinctio laudantium
                  recusandae, iure. Vel nisi soluta, minus consectetur
                  reiciendis laborum, laudantium perspiciatis quos molestias
                  quam eum. Vitae alias ex error distinctio laudantium
                  recusandae, iure. Vel nisi soluta, minus consectetur
                  reiciendis laborum, laudantium perspiciatis quos molestias
                  quam eum.
                </p>
              </Col>
            </Row>
          </Fade>
        </Container>
        <br /> <br /> <br /> <br />
        <Fade bottom big delay={100}>
          <section id="about" className="about1-block">
            <Container fluid>
              <div className="title-holder">
                <br />
                <h1>"Quote"</h1> <br /> <br />
                <div className="subtitle">Author</div>
              </div>
            </Container>
          </section>
        </Fade>
      </section>
      <AppContact />
      <AppFooter />
    </div>
  );
}

export default AppAbout;
