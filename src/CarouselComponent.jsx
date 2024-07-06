import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Carousel.css";
import "./Modal.css";
import { useRef } from "react";
import iconClose from "/images/icon-close.svg";
import propTypes from "prop-types";

function CarouselComponent({ onClose }) {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  let settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={`/images/image-product-${i + 1}.jpg`} alt="" />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="modal-bg-carousel">
      <img
        src={iconClose}
        alt=""
        onClick={onClose}
        className="toggle-btn close-btn"
      />
      <div className="slider-container">
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
          className="arrow next-arrow next-arrow-desk"
          style={{ display: "block" }}
          onClick={next}
        >
          <img src="/images/icon-next.svg" alt="" />
        </div>

        <div
          className="arrow prev-arrow prev-arrow-desk"
          style={{ display: "block" }}
          onClick={previous}
        >
          <img src="/images/icon-previous.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

CarouselComponent.propTypes = {
  onClose: propTypes.func,
};

export default CarouselComponent;
