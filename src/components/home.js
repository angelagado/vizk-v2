import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Fade from "react-reveal/Fade";

import AppHeader from "./header";
import AppHero from "./hero";
import AppFooter from "./footer";
import AppContact from "./contact";
import AppTestimonials from "./testimonials";

import img1 from "../assets/images/card.jpg";

export default function AppHome() {
  return (
    <div>
      <AppHeader />
      <AppHero />
      <section id="home" className="block home-block">
        <Fade bottom big>
          <Container fluid>
            <h1>Lorem ipsum dolor sit amet consectetur</h1> <br />
            <br /> <br />
            <Row>
              <Col sm={6}>
                <h1 style={{ textAlign: "left" }}>
                  Lorem <span>ipsum dolor</span> sit amet
                </h1>

                <p style={{ textAlign: "left" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit dicta veritatis sint quidem asperiores magni
                  eaque praesentium temporibus, magnam, eveniet consequatur
                  possimus nihil? Nemo deserunt repudiandae soluta neque
                  doloribus, quo! Vitae alias ex error distinctio laudantium
                  recusandae, iure. Vel nisi soluta, minus consectetur
                  reiciendis laborum, laudantium perspiciatis quos molestias
                  quam eum.
                </p>
              </Col>
              <Col sm={6}>
                <Image src={img1} />
              </Col>
            </Row>
          </Container>
        </Fade>
        <br /> <br /> <br />
        <Container fluid className="home-card">
          <Fade left big delay={100}>
            <h1>Lorem ipsum dolor sit amet consectetur</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit dicta veritatis sint quidem asperiores magni eaque
            </p>
            <br />

            <Row>
              <Card>
                <Card.Img
                  variant="top"
                  src={img1}
                  style={{ width: "90%", marginLeft: "5%", marginTop: "5%" }}
                />
                <Card.Body>
                  <Card.Title>Lorem ipsum dolor sit amet</Card.Title> <br />
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit dicta veritatis sint quidem asperiores magni
                    eaque praesentium temporibus, magnam, eveniet consequatur
                    possimus nihil? Nemo deserunt repudiandae soluta neque
                    doloribus, quo!
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Img
                  variant="top"
                  src={img1}
                  style={{ width: "90%", marginLeft: "5%", marginTop: "5%" }}
                />
                <Card.Body>
                  <Card.Title>Lorem ipsum dolor sit amet</Card.Title> <br />
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit dicta veritatis sint quidem asperiores magni
                    eaque praesentium temporibus, magnam, eveniet consequatur
                    possimus nihil? Nemo deserunt repudiandae soluta neque
                    doloribus, quo!
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  src={img1}
                  style={{ width: "90%", marginLeft: "5%", marginTop: "5%" }}
                />
                <Card.Body>
                  <Card.Title>Lorem ipsum dolor sit amet</Card.Title> <br />
                  <Card.Text>
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
      <br /> <br />
      <Fade bottom big>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Reprehenderit dicta veritatis sint quidem asperiores magni eaque
        </p>
      </Fade>
      <br />
      <AppTestimonials />
      <AppContact />
      <AppFooter />
    </div>
  );
}
