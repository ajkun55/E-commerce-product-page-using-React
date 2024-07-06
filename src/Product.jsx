
import img1 from "/images/image-product-1.jpg";
import img2 from "/images/image-product-2.jpg";
import img3 from "/images/image-product-3.jpg";
import img4 from "/images/image-product-4.jpg";
import img1tn from "/images/image-product-1-thumbnail.jpg";
import img2tn from "/images/image-product-2-thumbnail.jpg";
import img3tn from "/images/image-product-3-thumbnail.jpg";
import img4tn from "/images/image-product-4-thumbnail.jpg";
import { useState } from "react";
import CarouselComponent from "./CarouselComponent";
("use strict");

function Product() {
  const [imgSrc, setImgSrc] = useState("");
  const [showCarousel, setShowCarousel] = useState(false);

  function getImg(num) {
    setImgSrc((i) => "img" + num);   
  }

  return (
    <div className="product-desktop">
      <button onClick={() => setShowCarousel(!showCarousel)}>
        <img src={eval(`${imgSrc}`) || img1} alt="" className="main-pic" />
      </button>

      <div className="thumbnails">
        <button onClick={() => getImg(1)}>
          <img src={img1tn} alt="" className="thumbnail" />
        </button>
        <button onClick={() => getImg(2)}>
          <img src={img2tn} alt="" className="thumbnail" />
        </button>
        <button onClick={() => getImg(3)}>
          <img src={img3tn} alt="" className="thumbnail" />
        </button>
        <button onClick={() => getImg(4)}>
          <img src={img4tn} alt="" className="thumbnail" />
        </button>
      </div>

      {showCarousel && (
        <CarouselComponent onClose={() => setShowCarousel(false)} />
      )}
    </div>
  );
}

export default Product;
