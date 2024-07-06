import iconMinus from "/images/icon-minus.svg";
import iconPlus from "/images/icon-plus.svg";
import iconCart from "/images/icon-cart.svg";
import { useState } from "react";
import Modal from "./Cart";

function Info({ count, setCount, handleMinus, handlePlus }) {
  const [showModal, setShowModal] = useState(false);
  function openCart() {
    setShowModal(true);
  }

  return (
    <div className="info">
      <p className="company-name">Sneaker Company</p>
      <h1>Fall Limited Edition Sneakers</h1>
      <p className="company-intro">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div className="price">
        <p className="present-price">
          $125.00 <span className="discount">50%</span>
        </p>
        <p className="prev-price">$250.00</p>
      </div>

      <div className="btns">
        <div className="number">
          <button onClick={handleMinus}>
            <img src={iconMinus} alt="" />
          </button>
          <span>{count}</span>
          <button onClick={handlePlus}>
            <img src={iconPlus} alt="" />
          </button>
        </div>

        <button onClick={openCart} className="add-btn">
          <span>
            <img src={iconCart} alt="" />
          </span>
          Add to cart
        </button>
      </div>

      <Modal
        show={showModal}
        count={count}
        onClose={() => setShowModal(false)}
        onDelete={() => setCount(0)}
      />
    </div>
  );
}

export default Info;
