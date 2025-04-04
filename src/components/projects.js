import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import Fade from "react-reveal/Fade";

import AppHeader from "./header";
import AppContact from "./contact";
import AppFooter from "./footer";

import img1 from "../assets/images/projects1.jpg";

const projectsData = [
  {
    id: 1,
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", //link to project if deployed website
    image: require("../assets/images/projects2.jpeg"),
    title: "PROJECT TITLE", //title of the project
    subtitle: "SERVICES",
  },
  {
    id: 2,
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: require("../assets/images/projects2.jpeg"),
    title: "PROJECT TITLE",
    subtitle: "SERVICES",
  },
  {
    id: 3,
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: require("../assets/images/projects2.jpeg"),
    title: "PROJECT TITLE",
    subtitle: "SERVICES",
  },
  {
    id: 4,
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: require("../assets/images/projects2.jpeg"),
    title: "PROJECT TITLE",
    subtitle: "SERVICES",
  },
  {
    id: 5,
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: require("../assets/images/projects2.jpeg"),
    title: "PROJECT TITLE",
    subtitle: "SERVICES",
  },
  {
    id: 6,
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: require("../assets/images/projects2.jpeg"),
    title: "PROJECT TITLE",
    subtitle: "SERVICES",
  },
  {
    id: 7,
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: require("../assets/images/projects2.jpeg"),
    title: "PROJECT TITLE",
    subtitle: "SERVICES",
  },
  {
    id: 8,
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: require("../assets/images/projects2.jpeg"),
    title: "PROJECT TITLE",
    subtitle: "SERVICES",
  },
  {
    id: 9,
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: require("../assets/images/projects2.jpeg"),
    title: "PROJECT TITLE",
    subtitle: "SERVICES",
  },
];

function AppProjects() {
  return (
    <div>
      <AppHeader />
      <Fade left big>
        <div className="projects-hero">
          <Carousel>
            <Carousel.Item>
              <img src={img1} />
              <Carousel.Caption>
                <h1>OUR PROJECTS</h1> <br />
                <p>
                  Here are some of the projects that we have completed over the
                  years.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={img1} />
              <Carousel.Caption>
                <h1>OUR PROJECTS</h1> <br />
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </Fade>
      <section id="projects" className="block projects-block">
        <Container fluid>
          <br /> <br />
          <Row className="portfoliolist">
            {projectsData.map((projects) => {
              return (
                <Col sm={4} key={projects.id}>
                  <Fade left big delay={300}>
                    <br />
                    <div className="portfolio-wrapper">
                      <a href={projects.link}>
                        <Image src={projects.image} />
                        <div className="label text-center">
                          <h3>{projects.title}</h3>
                          <p>{projects.subtitle}</p>
                        </div>
                      </a>
                    </div>
                  </Fade>
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

export default AppProjects;
