import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slick() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <div>
          <img src="img/image1.jpg" alt="" />
        </div>
        <div>
          <img src="img/image2.png" alt="" />
        </div>
        <div>
          <img src="img/image3.png" alt="" />
        </div>
      </Slider>
    </div>
  );
}