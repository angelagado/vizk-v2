import Container from "react-bootstrap/Container";

function AppContact() {
  return (
    <section id="contact" className="block contact-block">
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
    </section>
  );
}

export default AppContact;
