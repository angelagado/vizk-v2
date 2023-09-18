import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import Fade from "react-reveal/Fade";
import Card from "react-bootstrap/Card";

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
          <Fade left big>
            <Row className="row1">
              <Col sm={6}>
                <h1 style={{ textAlign: "left" }}>
                  <span>What</span> We Do
                </h1>
                <p style={{ textAlign: "left" }}>
                  Managing risks may sometimes require the development of
                  automation, Artificial Intelligence (AI), and machine learning
                  tools, while others will need professional
                  consultants/advisors, or only have an interim need for extra
                  hands/support. <br /> <br />
                  <span>VIZK will be your all around ally</span> and our
                  professionals will assess your needs and compliment the
                  resources you have to ascertain the most cost-efficient
                  solution for your business.
                </p>
              </Col>
              <Col sm={6}>
                <Image src={img2} className="img1" />
              </Col>
            </Row>
          </Fade>
        </Container>
        <br /> <br />
        <Container fluid>
          <Fade right big delay={100}>
            <br />
            <Row className="row2">
              <Col sm={6}>
                <Image src={img2} className="img2" />
              </Col>
              <Col sm={6}>
                <h1 style={{ textAlign: "end" }}>
                  <span>Why</span> Work With Us?
                </h1>
                <p style={{ textAlign: "end" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit dicta veritatis sint quidem asperiores magni
                  eaque. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Reprehenderit dicta veritatis sint quidem asperiores
                  magni eaque. <br />
                  <br /> Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Reprehenderit dicta veritatis sint quidem asperiores
                  magni eaque <br /> <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit dicta veritatis sint quidem asperiores magni
                  eaque.
                </p>
              </Col>
            </Row>
          </Fade>
        </Container>
        <br /> <br /> <br />
        <Fade bottom big delay={100}>
          <h1>
            What <span>We Believe</span> In
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit dicta veritatis sint quidem asperiores magni eaque
            praesentium temporibus, magnam, eveniet consequatur possimus nihil?
            Nemo deserunt repudiandae soluta neque doloribus, quo!
          </p>
          <br />
          <div className="about-card">
            <Fade bottom big>
              <Card>
                <Card.Body>
                  <Card.Title>Core Value</Card.Title> <br />
                  <Card.Text>
                    Reprehenderit dicta veritatis sint quidem asperiores magni
                    eaque praesentium temporibus, magnam, eveniet consequatur.
                    Reprehenderit dicta veritatis sint quidem asperiores magni
                    eaque praesentium temporibus, magnam, eveniet consequatur.
                    Reprehenderit dicta veritatis sint quidem asperiores magni
                    eaque praesentium temporibus, magnam, eveniet consequatur
                  </Card.Text>
                </Card.Body>
              </Card>
            </Fade>
            <br />
            <Container fluid>
              <Fade bottom big>
                <Row>
                  <Card className="about-card1">
                    <Card.Body>
                      <Card.Title>Core Value</Card.Title> <br />
                      <Card.Text>
                        Reprehenderit dicta veritatis sint quidem asperiores
                        magni eaque praesentium temporibus, magnam, eveniet
                        consequatur. Reprehenderit dicta veritatis sint quidem
                        asperiores magni eaque praesentium temporibus, magnam,
                        eveniet consequatur. Reprehenderit dicta veritatis sint
                        quidem asperiores magni eaque praesentium temporibus,
                        magnam, eveniet consequatur
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <br />
                  <Card className="about-card1">
                    <Card.Body>
                      <Card.Title>Core Value</Card.Title> <br />
                      <Card.Text>
                        Reprehenderit dicta veritatis sint quidem asperiores
                        magni eaque praesentium temporibus, magnam, eveniet
                        consequatur. Reprehenderit dicta veritatis sint quidem
                        asperiores magni eaque praesentium temporibus, magnam,
                        eveniet consequatur. Reprehenderit dicta veritatis sint
                        quidem asperiores magni eaque praesentium temporibus,
                        magnam, eveniet consequatur
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Row>
              </Fade>
              <br />
              <Fade bottom big>
                <Row>
                  <Card className="about-card1">
                    <Card.Body>
                      <Card.Title>Core Value</Card.Title> <br />
                      <Card.Text>
                        Reprehenderit dicta veritatis sint quidem asperiores
                        magni eaque praesentium temporibus, magnam, eveniet
                        consequatur. Reprehenderit dicta veritatis sint quidem
                        asperiores magni eaque praesentium temporibus, magnam,
                        eveniet consequatur. Reprehenderit dicta veritatis sint
                        quidem asperiores magni eaque praesentium temporibus,
                        magnam, eveniet consequatur
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <br />
                  <Card className="about-card1">
                    <Card.Body>
                      <Card.Title>Core Value</Card.Title> <br />
                      <Card.Text>
                        Reprehenderit dicta veritatis sint quidem asperiores
                        magni eaque praesentium temporibus, magnam, eveniet
                        consequatur. Reprehenderit dicta veritatis sint quidem
                        asperiores magni eaque praesentium temporibus, magnam,
                        eveniet consequatur. Reprehenderit dicta veritatis sint
                        quidem asperiores magni eaque praesentium temporibus,
                        magnam, eveniet consequatur
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Row>
              </Fade>
            </Container>
          </div>
        </Fade>
      </section>
      <AppContact />
      <AppFooter />
    </div>
  );
}

export default AppAbout;
