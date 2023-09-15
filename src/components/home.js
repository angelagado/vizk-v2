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
            <h1 className="home-title">
              <span>V</span>isual <span>I</span>ntelligence <span>Z</span>ero
              <span> K</span>ey <br />
            </h1>
            <h4>est. October 1, 2021</h4>
            <br /> <br />
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
                <Image src={img1} className="home-img" />
              </Col>
            </Row>
          </Container>
        </Fade>
        <br /> <br /> <br />
        <Container fluid className="home-card">
          <Fade left big delay={100}>
            <h1>Commitments of the Company</h1>
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
                  <Card.Title>Commercial</Card.Title> <br />
                  <Card.Text>
                    These are the revenue driven steps in business management
                    aimed in growing your business. Reprehenderit dicta
                    veritatis sint quidem asperiores magni eaque praesentium
                    temporibus, magnam, eveniet consequatur. Reprehenderit dicta
                    veritatis sint quidem asperiores magni eaque praesentium
                    temporibus, magnam, eveniet consequatur
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
                  <Card.Title>Non-Commercial</Card.Title> <br />
                  <Card.Text>
                    These are the compliance area of the business aimed in
                    protecting the brand, the business, and its constitutes.
                    Reprehenderit dicta veritatis sint quidem asperiores magni
                    eaque praesentium temporibus, magnam, eveniet consequatur.
                    Reprehenderit dicta veritatis sint quidem asperiores magni
                    eaque praesentium temporibus, magnam, eveniet consequatur
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
                  <Card.Title>Technical</Card.Title> <br />
                  <Card.Text>
                    Develop risk driven automation tools that will assist
                    entrepreneurs in managing and making the right commercial
                    and non-commercial business decisions. Reprehenderit dicta
                    veritatis sint quidem asperiores magni eaque praesentium
                    temporibus, magnam, eveniet consequatur. Reprehenderit dicta
                    veritatis sint quidem asperiores magni eaque praesentium
                    temporibus, magnam, eveniet consequatur
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
          </Fade>
        </Container>
      </section>
      <br /> <br />
      <Fade bottom big>
        <h2>
          We have successfully served over __ clients in the last __ years.
          <br />
          Today, we continue to provide our clients with the best services and
          solutions.
        </h2>
      </Fade>
      <br />
      <AppTestimonials />
      <AppContact />
      <AppFooter />
    </div>
  );
}
