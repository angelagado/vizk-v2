import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";

function AppContact() {
  return (
    <section id="contact" className="block contact-block">
      <Fade bottom big>
        <h1>CONTACT US</h1>
        <h3 style={{ fontSize: "18px" }}>Let's Talk!</h3>
        <Container fluid>
          <div className="contact-info">
            <ul>
              <li>
                <i className="fas fa-envelope"></i>
                <h3>EMAIL</h3>
                vizk.incorporation@gmail.com
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <h3>PHONE NUMBER</h3>
                0912-345-6789
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <h3>ADDRESS</h3>
                Quezon City, Philippines
              </li>
            </ul>
          </div>
        </Container>
      </Fade>
    </section>
  );
}

export default AppContact;
