import Carousel from "react-bootstrap/Carousel";

export default function HomeCarrousel({ data }) {
  return (
    <div>
      <Carousel>
        {data.map((item, index) => (
          <Carousel.Item key={index}>
            <figure className="ratio ratio-21x9">
              <img
                src={item.image}
                alt={item.title}
                className="img-fluid object-fit-cover carrouselimg"
              />
            </figure>
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
