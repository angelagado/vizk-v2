import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Fade from "react-reveal/Fade";

var testimonialsData = [
  {
    id: 1,
    name: "CLIENT NAME",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.",
    designation: "POSITION",
  },
  {
    id: 2,
    name: "CLIENT NAME",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.",
    designation: "POSITION",
  },
  {
    id: 3,
    name: "CLIENT NAME",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.",
    designation: "POSITION",
  },
];

function AppTestimonials() {
  return (
    <div>
      <Fade bottom big>
        <section id="testimonials" className="testimonials-block">
          <Container fluid>
            <div className="title-holder">
              <h2>Client testimonials</h2>
            </div>
            <Carousel controls={false}>
              {testimonialsData.map((testimonials) => {
                return (
                  <Carousel.Item key={testimonials.id}>
                    <blockquote>
                      <p>{testimonials.description}</p>
                      <cite>
                        <span className="name">{testimonials.name}</span>
                        <span className="designation">
                          {testimonials.designation}
                        </span>
                      </cite>
                    </blockquote>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Container>
        </section>
      </Fade>
    </div>
  );
}

export default AppTestimonials;
