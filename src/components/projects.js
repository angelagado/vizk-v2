import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import AppHeader from "./header";
import AppContact from "./contact";
import AppFooter from "./footer";

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

      <section id="projects" className="block projects-block">
        <Container fluid>
          <div className="title-holder">
            <h2>Our projects</h2>
            <div className="subtitle">our awesome projects</div>
          </div>
          <Row className="portfoliolist">
            {projectsData.map((projects) => {
              return (
                <Col sm={4} key={projects.id}>
                  <div className="portfolio-wrapper">
                    <a href={projects.link}>
                      <Image src={projects.image} />
                      <div className="label text-center">
                        <h3>{projects.title}</h3>
                        <p>{projects.subtitle}</p>
                      </div>
                    </a>
                  </div>
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
