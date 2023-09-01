import Container from "react-bootstrap/Container";

function AppContact() {
  return (
    <section id="contact" className="block contact-block">
      <div className="title-holder">
        <h2>Contact us</h2>
        <div className="subtitle">connect with us through</div>
      </div>
      <div className="google-map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.5951492330696!2d121.0533945!3d14.6221239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7af864949e3%3A0xba79ca0d3dd36120!2sVizk%2C%20Inc!5e0!3m2!1sen!2sph!4v1693480238969!5m2!1sen!2sph"
        ></iframe>
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
