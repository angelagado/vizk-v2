import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

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
  {
    id: 5,
    image: require("../assets/images/teams-devs.jpg"),
    fbLink: "https://www.facebook.com/profile.php?id=100075833574946",
    linkedinLink: "https://www.linkedin.com",
    name: "NAME",
    designation: "POSITION",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 6,
    image: require("../assets/images/teams-devs.jpg"),
    fbLink: "https://www.facebook.com/profile.php?id=100075833574946",
    linkedinLink: "https://www.linkedin.com",
    name: "NAME",
    designation: "POSITION",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 7,
    image: require("../assets/images/teams-devs.jpg"),
    fbLink: "https://www.facebook.com/profile.php?id=100075833574946",
    linkedinLink: "https://www.linkedin.com",
    name: "NAME",
    designation: "POSITION",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 8,
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
  {
    id: 5,
    image: require("../assets/images/teams-finance.jpg"),
    fbLink: "https://www.facebook.com/profile.php?id=100075833574946",
    linkedinLink: "https://www.linkedin.com",
    name: "NAME",
    designation: "POSITION",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 6,
    image: require("../assets/images/teams-finance.jpg"),
    fbLink: "https://www.facebook.com/profile.php?id=100075833574946",
    linkedinLink: "https://www.linkedin.com",
    name: "NAME",
    designation: "POSITION",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 7,
    image: require("../assets/images/teams-finance.jpg"),
    fbLink: "https://www.facebook.com/profile.php?id=100075833574946",
    linkedinLink: "https://www.linkedin.com",
    name: "NAME",
    designation: "POSITION",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 8,
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
    <section id="teams" className="block teams-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our team</h2>
          <div className="subtitle">some of our experts</div> <br />
          <br />
          <div className="subtitle">DEPARTMENT</div>
        </div>
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
      <Container fluid>
        <div className="title-holder">
          <div className="subtitle">DEPARTMENT</div>
        </div>
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
    </section>
  );
}

export default AppTeams;
