import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

import AppHeader from "./header";
import AppContact from "./contact";
import AppFooter from "./footer";

import img1 from "../assets/images/services1.jpg";
import img2 from "../assets/images/services2.jpeg";

/*const servicesData = [
  {
    id: 1,
    icon: "fas fa-clone",
    title: "Responsive Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
  },
  {
    id: 2,
    icon: "fas fa-snowflake",
    title: "Creative Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
  },
  {
    id: 3,
    icon: "fas fa-plug",
    title: "SEO Optimized",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
  },
  {
    id: 4,
    icon: "fas fa-desktop",
    title: "Retina Ready",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
  },
  {
    id: 5,
    icon: "fas fa-trophy",
    title: "Website Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
  },
  {
    id: 6,
    icon: "fas fa-life-ring",
    title: "Customer Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
  },
];*/

function AppServices() {
  return (
    <div>
      <AppHeader />
      <div className="services-hero">
        <Carousel>
          <Carousel.Item>
            <img src={img1} />
            <Carousel.Caption>
              <h1>Lorem ipsum</h1> <br />
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={img1} />
            <Carousel.Caption>
              <h1>Dolor sit amet</h1> <br />
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <section id="services" className="block services-block">
        <Container fluid>
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
                Reprehenderit dicta veritatis sint quidem asperiores magni eaque
                praesentium temporibus, magnam, eveniet consequatur possimus
                nihil? Nemo deserunt repudiandae soluta neque doloribus, quo!
              </p>
            </Col>
          </Row>
        </Container>
        <br /> <br />
        <Container fluid>
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
        </Container>
        <br />
        <Container fluid>
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
        </Container>
        <br />
        <Container fluid>
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
        </Container>
      </section>
      <AppContact />
      <AppFooter />
    </div>
  );
}

export default AppServices;

/* <section id="services" className="block services-block">
        <Container fluid>
          <div className="title-holder">
            <h2>Our services</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <Row>
            {servicesData.map((services) => {
              return (
                <Col sm={4} className="holder" key={services.id}>
                  <div className="icon">
                    <i className={services.icon}></i>
                  </div>
                  <h3>{services.title}</h3>
                  <p>{services.description}</p>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section> */
