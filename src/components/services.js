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
                <h1>OUR SERVICES</h1>
                <p>
                  VIZK offers a variety of services specifically tailored for
                  the clients' needs and wants.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={img1} />
              <Carousel.Caption>
                <h1>OUR SERVICES</h1>
                <p>Here at VIZK, a successful end output is guaranteed.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </Fade>

      <section id="services" className="block services-block">
        <Container fluid>
          <Fade bottom big delay={150}>
            <Row>
              <Card>
                <Card.Img
                  variant="top"
                  src={img2}
                  style={{
                    width: "100%",
                    marginLeft: "0.2%",
                    marginTop: "3%",
                  }}
                />
                <Card.Body>
                  <Card.Title>Website Development</Card.Title>
                  <br />
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
                  src={img2}
                  style={{
                    width: "100%",
                    marginLeft: "0.2%",
                    marginTop: "3%",
                  }}
                />
                <Card.Body>
                  <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
                  <br />
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
        <br /> <br />
        <Container fluid>
          <Fade bottom big delay={150}>
            <Row>
              <Card>
                <Card.Img
                  variant="top"
                  src={img2}
                  style={{
                    width: "100%",
                    marginLeft: "0.2%",
                    marginTop: "3%",
                  }}
                />
                <Card.Body>
                  <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
                  <br />
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
                  src={img2}
                  style={{
                    width: "100%",
                    marginLeft: "0.2%",
                    marginTop: "3%",
                  }}
                />
                <Card.Body>
                  <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
                  <br />
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
        <br /> <br />
        <Container fluid>
          <Fade bottom big delay={150}>
            <Row>
              <Card>
                <Card.Img
                  variant="top"
                  src={img2}
                  style={{
                    width: "100%",
                    marginLeft: "0.2%",
                    marginTop: "3%",
                  }}
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
                  src={img2}
                  style={{
                    width: "100%",
                    marginLeft: "0.2%",
                    marginTop: "3%",
                  }}
                />
                <Card.Body>
                  <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
                  <br />
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
      <AppContact />
      <AppFooter />
    </div>
  );
}

export default AppServices;
