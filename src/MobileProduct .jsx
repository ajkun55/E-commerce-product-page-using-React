import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import "./Carousel.css";

function MobileProduct() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  let settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mobile-slider-container">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        <div>
          <img src={"/images" + "/image-product-1.jpg"} alt="" />
        </div>
        <div>
          <img src={"/images" + "/image-product-2.jpg"} alt="" />
        </div>
        <div>
          <img src={"/images" + "/image-product-3.jpg"} alt="" />
        </div>
        <div>
          <img src={"/images" + "/image-product-4.jpg"} alt="" />
        </div>
      </Slider>

      <div
        className="arrow next-arrow"
        style={{ display: "block" }}
        onClick={next}
      >
        <img src="/images/icon-next.svg" alt="" />
      </div>

      <div
        className="arrow prev-arrow"
        style={{ display: "block" }}
        onClick={previous}
      >
        <img src="/images/icon-previous.svg" alt="" />
      </div>
    </div>
  );
}

export default MobileProduct;
