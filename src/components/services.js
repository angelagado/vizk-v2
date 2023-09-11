import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Fade from "react-reveal/Fade";

import AppHeader from "./header";
import AppContact from "./contact";
import AppFooter from "./footer";

import img1 from "../assets/images/services1.jpg";
import img2 from "../assets/images/services2.jpeg";

function AppServices() {
  return (
    <div>
      <AppHeader />
      <Fade left big>
        <div className="services-hero">
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

      <section id="services" className="block services-block">
        <Container fluid>
          <Fade bottom big delay={150}>
            <Row>
              <Col sm={6}>
                <h1 style={{ textAlign: "left" }}>
                  Lorem <span>ipsum dolor</span> sit amet consectetur{" "}
                  <span>adipisicing</span> elit
                </h1>
              </Col>
              <Col sm={6}>
                <p style={{ textAlign: "end" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit dicta veritatis sint quidem asperiores magni
                  eaque praesentium temporibus, magnam, eveniet consequatur
                  possimus nihil? Nemo deserunt repudiandae soluta neque
                  doloribus, quo!
                </p>
              </Col>
            </Row>
          </Fade>
        </Container>
        <br /> <br />
        <Container fluid>
          <Fade bottom big delay={150}>
            <Row>
              <Card style={{ width: "48%", marginLeft: "0.1%" }}>
                <Card.Img
                  variant="top"
                  src={img2}
                  style={{ width: "90%", marginLeft: "5%", marginTop: "5%" }}
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "24px" }}>
                    Website Development
                  </Card.Title>
                  <br />
                  <Card.Text style={{ textAlign: "center", fontSize: "18px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit dicta veritatis sint quidem asperiores magni
                    eaque praesentium temporibus, magnam, eveniet consequatur
                    possimus nihil? Nemo deserunt repudiandae soluta neque
                    doloribus, quo!
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "48%", marginLeft: "3%" }}>
                <Card.Img
                  variant="top"
                  src={img2}
                  style={{ width: "90%", marginLeft: "5%", marginTop: "5%" }}
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "24px" }}>
                    Lorem ipsum dolor sit amet
                  </Card.Title>
                  <br />
                  <Card.Text style={{ textAlign: "center", fontSize: "18px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit dicta veritatis sint quidem asperiores magni
                    eaque praesentium temporibus, magnam, eveniet consequatur
                    possimus nihil? Nemo deserunt repudiandae soluta neque
                    doloribus, quo!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
          </Fade>
        </Container>
        <br />
        <Container fluid>
          <Fade bottom big delay={150}>
            <Row>
              <Card style={{ width: "48%", marginLeft: "0.1%" }}>
                <Card.Img
                  variant="top"
                  src={img2}
                  style={{ width: "90%", marginLeft: "5%", marginTop: "5%" }}
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "24px" }}>
                    Lorem ipsum dolor sit amet
                  </Card.Title>
                  <br />
                  <Card.Text style={{ textAlign: "center", fontSize: "18px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit dicta veritatis sint quidem asperiores magni
                    eaque praesentium temporibus, magnam, eveniet consequatur
                    possimus nihil? Nemo deserunt repudiandae soluta neque
                    doloribus, quo!
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "48%", marginLeft: "3%" }}>
                <Card.Img
                  variant="top"
                  src={img2}
                  style={{ width: "90%", marginLeft: "5%", marginTop: "5%" }}
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "24px" }}>
                    Lorem ipsum dolor sit amet
                  </Card.Title>
                  <br />
                  <Card.Text style={{ textAlign: "center", fontSize: "18px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit dicta veritatis sint quidem asperiores magni
                    eaque praesentium temporibus, magnam, eveniet consequatur
                    possimus nihil? Nemo deserunt repudiandae soluta neque
                    doloribus, quo!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
          </Fade>
        </Container>
        <br />
        <Container fluid>
          <Fade bottom big delay={150}>
            <Row>
              <Card style={{ width: "48%", marginLeft: "0.1%" }}>
                <Card.Img
                  variant="top"
                  src={img2}
                  style={{ width: "90%", marginLeft: "5%", marginTop: "5%" }}
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "24px" }}>
                    Lorem ipsum dolor sit amet
                  </Card.Title>{" "}
                  <br />
                  <Card.Text style={{ textAlign: "center", fontSize: "18px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit dicta veritatis sint quidem asperiores magni
                    eaque praesentium temporibus, magnam, eveniet consequatur
                    possimus nihil? Nemo deserunt repudiandae soluta neque
                    doloribus, quo!
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "48%", marginLeft: "3%" }}>
                <Card.Img
                  variant="top"
                  src={img2}
                  style={{ width: "90%", marginLeft: "5%", marginTop: "5%" }}
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "24px" }}>
                    Lorem ipsum dolor sit amet
                  </Card.Title>
                  <br />
                  <Card.Text style={{ textAlign: "center", fontSize: "18px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit dicta veritatis sint quidem asperiores magni
                    eaque praesentium temporibus, magnam, eveniet consequatur
                    possimus nihil? Nemo deserunt repudiandae soluta neque
                    doloribus, quo!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
          </Fade>
        </Container>
      </section>
      <AppContact />
      <AppFooter />
    </div>
  );
}

export default AppServices;
