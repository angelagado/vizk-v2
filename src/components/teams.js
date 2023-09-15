import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import Fade from "react-reveal/Fade";

import AppHeader from "./header";
import AppContact from "./contact";
import AppFooter from "./footer";

import img1 from "../assets/images/teams1.jpg";

const devsData = [
  {
    id: 1,
    image: require("../assets/images/teams-devs.jpg"),
    fbLink: "https://www.facebook.com/profile.php?id=100075833574946",
    linkedinLink: "https://www.linkedin.com",
    name: "NAME",
    designation: "POSITION",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 2,
    image: require("../assets/images/teams-devs.jpg"),
    fbLink: "https://www.facebook.com/profile.php?id=100075833574946",
    linkedinLink: "https://www.linkedin.com",
    name: "NAME",
    designation: "POSITION",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 3,
    image: require("../assets/images/teams-devs.jpg"),
    fbLink: "https://www.facebook.com/profile.php?id=100075833574946",
    linkedinLink: "https://www.linkedin.com",
    name: "NAME",
    designation: "POSITION",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 4,
    image: require("../assets/images/teams-devs.jpg"),
    fbLink: "https://www.facebook.com/profile.php?id=100075833574946",
    linkedinLink: "https://www.linkedin.com",
    name: "NAME",
    designation: "POSITION",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
];

const financeData = [
  {
    id: 1,
    image: require("../assets/images/teams-finance.jpg"),
    fbLink: "https://www.facebook.com/profile.php?id=100075833574946",
    linkedinLink: "https://www.linkedin.com",
    name: "NAME",
    designation: "POSITION",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 2,
    image: require("../assets/images/teams-finance.jpg"),
    fbLink: "https://www.facebook.com/profile.php?id=100075833574946",
    linkedinLink: "https://www.linkedin.com",
    name: "NAME",
    designation: "POSITION",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 3,
    image: require("../assets/images/teams-finance.jpg"),
    fbLink: "https://www.facebook.com/profile.php?id=100075833574946",
    linkedinLink: "https://www.linkedin.com",
    name: "NAME",
    designation: "POSITION",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 4,
    image: require("../assets/images/teams-finance.jpg"),
    fbLink: "https://www.facebook.com/profile.php?id=100075833574946",
    linkedinLink: "https://www.linkedin.com",
    name: "NAME",
    designation: "POSITION",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
];

function AppTeams() {
  return (
    <div>
      <AppHeader />
      <Fade left big>
        <div className="teams-hero">
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

      <section id="teams" className="block teams-block">
        <Fade right big delay={200}>
          <Container fluid>
            <Row>
              <Col sm={6}>
                <h1 style={{ textAlign: "left" }}>
                  OUR <br />
                  <span>DEVELOPERS</span>
                </h1>
              </Col>
              <Col sm={6}>
                <p style={{ textAlign: "end" }}>
                  Lorem <span>ipsum dolor</span> sit amet
                  <span> consectetur adipisicing </span>
                  elit. Reprehenderit dicta veritatis sint quidem asperiores
                  magni eaque praesentium temporibus, magnam, eveniet
                  consequatur possimus.
                </p>
              </Col>
            </Row>
          </Container>
        </Fade>
        <Fade right big delay={200}>
          <Container fluid>
            <Row>
              {devsData.map((devs) => {
                return (
                  <Col sm={3} key={devs.id}>
                    <div className="image">
                      <Image src={devs.image} />
                      <div className="overlay">
                        <div className="socials">
                          <ul>
                            <li>
                              <a href={devs.fbLink}>
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href={devs.linkedinLink}>
                                <i className="fab fa-linkedin-in"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="content">
                      <h3>{devs.name}</h3>
                      <span className="designation">{devs.designation}</span>
                      <p>{devs.description}</p>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </Fade>
        <br />
        <Fade left big delay={200}>
          <Container fluid>
            <Row>
              <Col sm={6}>
                <h1 style={{ textAlign: "left" }}>
                  OUR <br />
                  <span>ACCOUNTANTS</span>
                </h1>
              </Col>
              <Col sm={6}>
                <p style={{ textAlign: "end" }}>
                  Lorem <span>ipsum dolor</span> sit amet
                  <span> consectetur adipisicing </span>
                  elit. Reprehenderit dicta veritatis sint quidem asperiores
                  magni eaque praesentium temporibus, magnam, eveniet
                  consequatur possimus.
                </p>
              </Col>
            </Row>
          </Container>
        </Fade>
        <Fade left big delay={200}>
          <Container fluid>
            <Row>
              {financeData.map((finance) => {
                return (
                  <Col sm={3} key={finance.id}>
                    <div className="image">
                      <Image src={finance.image} />
                      <div className="overlay">
                        <div className="socials">
                          <ul>
                            <li>
                              <a href={finance.fbLink}>
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href={finance.linkedinLink}>
                                <i className="fab fa-linkedin-in"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="content">
                      <h3>{finance.name}</h3>
                      <span className="designation">{finance.designation}</span>
                      <p>{finance.description}</p>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </Fade>
        <br /> <br /> <br />
        <h1> Lorem ipsum dolor sit amet</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Reprehenderit dicta veritatis sint quidem asperiores magni eaque
          praesentium temporibus, magnam, eveniet consequatur possimus nihil?
          Nemo deserunt repudiandae soluta neque doloribus, quo!
        </p>
        <br />
        <section id="teams" className="block teams-block1">
          <Container fluid>
            <div className="title-holder">
              <br />
              <h1>"Quote"</h1> <br /> <br />
              <div className="subtitle">Author</div>
            </div>
          </Container>
        </section>
      </section>
      <AppContact />
      <AppFooter />
    </div>
  );
}

export default AppTeams;

/* <section id="about" className="about1-block">
          <Container fluid>
            <div className="title-holder">
              <br />
              <h1>"Quote"</h1> <br /> <br />
              <div className="subtitle">Author</div>
            </div>
          </Container>
        </section> */
