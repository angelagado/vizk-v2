import Container from "react-bootstrap/Container";

function AppContact() {
  return (
    <section id="contact" className="block contact-block">
      <div className="title-holder">
        <h2>Contact us</h2>
        <div className="subtitle">connect with us through</div>
      </div>
      <Container fluid>
        <div className="contact-info">
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              vizk.incorporation@gmail.com
            </li>
            <li>
              <i className="fas fa-phone"></i>
              0912-345-6789
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              Quezon City, Philippines
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default AppContact;
