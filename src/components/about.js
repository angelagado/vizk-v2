import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import img2 from "../assets/images/about2.jpeg";

function AppAbout() {
  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About Us</h2>
          <div className="subtitle">Who We Are</div>
        </div>
        <Row>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit dicta veritatis sint quidem asperiores magni eaque
            praesentium temporibus, magnam, eveniet consequatur possimus nihil?
            Nemo deserunt repudiandae soluta neque doloribus, quo! Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Vitae alias ex error
            distinctio laudantium recusandae, iure. Vel nisi soluta, minus
            consectetur reiciendis laborum, laudantium perspiciatis quos
            molestias quam eum. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Vitae alias ex error distinctio laudantium
            recusandae, iure. Vel nisi soluta, minus consectetur reiciendis
            laborum, laudantium perspiciatis quos molestias quam eum. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Vitae alias ex
            error distinctio laudantium recusandae, iure. Vel nisi soluta, minus
            consectetur reiciendis laborum, laudantium perspiciatis quos
            molestias quam eum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            alias ex error distinctio laudantium recusandae, iure. Vel nisi
            soluta, minus consectetur reiciendis laborum, laudantium
            perspiciatis quos molestias quam eum. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Vitae alias ex error distinctio
            laudantium recusandae, iure. Vel nisi soluta, minus consectetur
            reiciendis laborum, laudantium perspiciatis quos molestias quam eum.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            alias ex error distinctio laudantium recusandae, iure. Vel nisi
            soluta, minus consectetur reiciendis laborum, laudantium
            perspiciatis quos molestias quam eum. Vitae alias ex error
            distinctio laudantium recusandae, iure. Vel nisi soluta, minus
            consectetur reiciendis laborum, laudantium perspiciatis quos
            molestias quam eum.
          </p>
          <br />
        </Row>
      </Container>
      <Container fluid>
        <div className="title-holder">
          <br />
          <div className="subtitle">What We Do</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img2} />
          </Col>
          <Col sm={6}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit dicta veritatis sint quidem asperiores magni eaque
              praesentium temporibus, magnam, eveniet consequatur possimus
              nihil? Nemo deserunt repudiandae soluta neque doloribus, quo!
              Vitae alias ex error distinctio laudantium recusandae, iure. Vel
              nisi soluta, minus consectetur reiciendis laborum, laudantium
              perspiciatis quos molestias quam eum. Vitae alias ex error
              distinctio laudantium recusandae, iure. Vel nisi soluta, minus
              consectetur reiciendis laborum, laudantium perspiciatis quos
              molestias quam eum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
              alias ex error distinctio laudantium recusandae, iure. Vel nisi
              soluta, minus consectetur reiciendis laborum, laudantium
              perspiciatis quos molestias quam eum. Vitae alias ex error
              distinctio laudantium recusandae, iure. Vel nisi soluta, minus
              consectetur reiciendis laborum, laudantium perspiciatis quos
              molestias quam eum.
            </p>
          </Col>
        </Row>
      </Container>
      <br /> <br /> <br />
      <section id="about" className="about1-block">
        <Container fluid>
          <div className="title-holder">
            <h2>Our Motto</h2>
            <div className="subtitle">subtitle</div>
            <br />
            <h1>
              "If everyone is moving forward together, then success takes care
              of itself"
            </h1>{" "}
            <br />
            <div className="subtitle">Henry Ford</div>
          </div>
        </Container>
      </section>
    </section>
  );
}

export default AppAbout;
