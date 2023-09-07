import Carousel from "react-bootstrap/Carousel";

var heroData = [
  {
    id: 1,
    image: require("../assets/images/hero1.png"),
  },
  {
    id: 2,
    image: require("../assets/images/hero2.png"),
    title: "We Bring The Best",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 3,
    image: require("../assets/images/hero3.jpg"),
    title: "Enjoy our Services",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];

function AppHero() {
  return (
    <div>
      <section id="hero" className="hero-block">
        <Carousel>
          {heroData.map((hero) => {
            return (
              <Carousel.Item key={hero.id}>
                <img
                  className="d-block w-100"
                  src={hero.image}
                  alt={"slide " + hero.id}
                />
                <Carousel.Caption>
                  <h1>{hero.title}</h1> <br /> <br />
                  <p>{hero.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </section>
    </div>
  );
}

export default AppHero;
