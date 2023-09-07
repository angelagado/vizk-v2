import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

import AppHeader from "./header";

import img1 from "../assets/images/services1.jpg";
import AppContact from "./contact";
import AppFooter from "./footer";

const servicesData = [
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
    title: "Brower Compatibility",
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
];

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
      </section>
      <AppContact />
      <AppFooter />
    </div>
  );
}

export default AppServices;
