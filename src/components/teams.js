import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const teamsData = [
  {
    id: 1,
    image: require("../assets/images/team1.jpg"),
    fbLink: "https://www.facebook.com/profile.php?id=100075833574946",
    linkedinLink: "https://www.linkedin.com",
    name: "NAME",
    designation: "POSITION",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 2,
    image: require("../assets/images/team2.jpg"),
    fbLink: "https://www.facebook.com/profile.php?id=100075833574946",
    linkedinLink: "https://www.linkedin.com",
    name: "NAME",
    designation: "POSITION",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 3,
    image: require("../assets/images/team3.jpg"),
    fbLink: "https://www.facebook.com/profile.php?id=100075833574946",
    linkedinLink: "https://www.linkedin.com",
    name: "NAME",
    designation: "POSITION",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 4,
    image: require("../assets/images/team4.jpg"),
    fbLink: "https://www.facebook.com/profile.php?id=100075833574946",
    linkedinLink: "https://www.linkedin.com",
    name: "NAME",
    designation: "POSITION",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 5,
    image: require("../assets/images/team5.jpg"),
    fbLink: "https://www.facebook.com/profile.php?id=100075833574946",
    linkedinLink: "https://www.linkedin.com",
    name: "NAME",
    designation: "POSITION",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 6,
    image: require("../assets/images/team6.jpg"),
    fbLink: "https://www.facebook.com/profile.php?id=100075833574946",
    linkedinLink: "https://www.linkedin.com",
    name: "NAME",
    designation: "POSITION",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 7,
    image: require("../assets/images/team7.jpg"),
    fbLink: "https://www.facebook.com/profile.php?id=100075833574946",
    linkedinLink: "https://www.linkedin.com",
    name: "NAME",
    designation: "POSITION",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 8,
    image: require("../assets/images/team8.jpg"),
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
          <div className="subtitle">some of our experts</div>
        </div>
        <Row>
          {teamsData.map((teams) => {
            return (
              <Col sm={3} key={teams.id}>
                <div className="image">
                  <Image src={teams.image} />
                  <div className="overlay">
                    <div className="socials">
                      <ul>
                        <li>
                          <a href={teams.fbLink}>
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href={teams.linkedinLink}>
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <h3>{teams.name}</h3>
                  <span className="designation">{teams.designation}</span>
                  <p>{teams.description}</p>
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
