import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const projectsData = [
  {
    id: 1,
    link: "https://www.google.com/search?sca_esv=561779002&sxsrf=AB5stBgSWiyRah4jzfj9RHoyoE5PXgFV5A:1693527352472&q=google+rick+roll&tbm=isch&source=lnms&sa=X&sqi=2&ved=2ahUKEwjysIuCkYiBAxW1gFYBHWsoD7YQ0pQJegQIDhAB&biw=824&bih=790&dpr=1", //link to project if deployed website
    image: require("../assets/images/works2.jpg"),
    title: "PROJECT TITLE", //title of the project
    subtitle: "SERVICES",
  },
  {
    id: 2,
    link: "https://www.google.com/search?sca_esv=561779002&sxsrf=AB5stBgSWiyRah4jzfj9RHoyoE5PXgFV5A:1693527352472&q=google+rick+roll&tbm=isch&source=lnms&sa=X&sqi=2&ved=2ahUKEwjysIuCkYiBAxW1gFYBHWsoD7YQ0pQJegQIDhAB&biw=824&bih=790&dpr=1",
    image: require("../assets/images/works3.jpg"),
    title: "PROJECT TITLE",
    subtitle: "SERVICES",
  },
  {
    id: 3,
    link: "https://www.google.com/search?sca_esv=561779002&sxsrf=AB5stBgSWiyRah4jzfj9RHoyoE5PXgFV5A:1693527352472&q=google+rick+roll&tbm=isch&source=lnms&sa=X&sqi=2&ved=2ahUKEwjysIuCkYiBAxW1gFYBHWsoD7YQ0pQJegQIDhAB&biw=824&bih=790&dpr=1",
    image: require("../assets/images/works4.jpg"),
    title: "PROJECT TITLE",
    subtitle: "SERVICES",
  },
  {
    id: 4,
    link: "https://www.google.com/search?sca_esv=561779002&sxsrf=AB5stBgSWiyRah4jzfj9RHoyoE5PXgFV5A:1693527352472&q=google+rick+roll&tbm=isch&source=lnms&sa=X&sqi=2&ved=2ahUKEwjysIuCkYiBAxW1gFYBHWsoD7YQ0pQJegQIDhAB&biw=824&bih=790&dpr=1",
    image: require("../assets/images/works5.jpg"),
    title: "PROJECT TITLE",
    subtitle: "SERVICES",
  },
  {
    id: 5,
    link: "https://www.google.com/search?sca_esv=561779002&sxsrf=AB5stBgSWiyRah4jzfj9RHoyoE5PXgFV5A:1693527352472&q=google+rick+roll&tbm=isch&source=lnms&sa=X&sqi=2&ved=2ahUKEwjysIuCkYiBAxW1gFYBHWsoD7YQ0pQJegQIDhAB&biw=824&bih=790&dpr=1",
    image: require("../assets/images/works6.jpg"),
    title: "PROJECT TITLE",
    subtitle: "SERVICES",
  },
  {
    id: 6,
    link: "https://www.google.com/search?sca_esv=561779002&sxsrf=AB5stBgSWiyRah4jzfj9RHoyoE5PXgFV5A:1693527352472&q=google+rick+roll&tbm=isch&source=lnms&sa=X&sqi=2&ved=2ahUKEwjysIuCkYiBAxW1gFYBHWsoD7YQ0pQJegQIDhAB&biw=824&bih=790&dpr=1",
    image: require("../assets/images/works7.jpg"),
    title: "PROJECT TITLE",
    subtitle: "SERVICES",
  },
  {
    id: 7,
    link: "https://www.google.com/search?sca_esv=561779002&sxsrf=AB5stBgSWiyRah4jzfj9RHoyoE5PXgFV5A:1693527352472&q=google+rick+roll&tbm=isch&source=lnms&sa=X&sqi=2&ved=2ahUKEwjysIuCkYiBAxW1gFYBHWsoD7YQ0pQJegQIDhAB&biw=824&bih=790&dpr=1",
    image: require("../assets/images/works8.jpg"),
    title: "PROJECT TITLE",
    subtitle: "SERVICES",
  },
  {
    id: 8,
    link: "https://www.google.com/search?sca_esv=561779002&sxsrf=AB5stBgSWiyRah4jzfj9RHoyoE5PXgFV5A:1693527352472&q=google+rick+roll&tbm=isch&source=lnms&sa=X&sqi=2&ved=2ahUKEwjysIuCkYiBAxW1gFYBHWsoD7YQ0pQJegQIDhAB&biw=824&bih=790&dpr=1",
    image: require("../assets/images/works9.jpg"),
    title: "PROJECT TITLE",
    subtitle: "SERVICES",
  },
  {
    id: 9,
    link: "https://www.google.com/search?sca_esv=561779002&sxsrf=AB5stBgSWiyRah4jzfj9RHoyoE5PXgFV5A:1693527352472&q=google+rick+roll&tbm=isch&source=lnms&sa=X&sqi=2&ved=2ahUKEwjysIuCkYiBAxW1gFYBHWsoD7YQ0pQJegQIDhAB&biw=824&bih=790&dpr=1",
    image: require("../assets/images/works2.jpg"),
    title: "PROJECT TITLE",
    subtitle: "SERVICES",
  },
];

function AppProjects() {
  return (
    <section id="projects" className="block projects-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our Projects</h2>
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
  );
}

export default AppProjects;
