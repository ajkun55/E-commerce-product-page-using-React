import propTypes from "prop-types";
import "./Modal.css";
import iconDelete from "/images/icon-delete.svg";
import imgProduct from "/images/image-product-1-thumbnail.jpg";

function Modal({ show, count, onClose, onDelete }) {
  if (!show) return null;

  const empty = <p className="empty">Your cart is empty.</p>;
  const notEmpty = (
    <>
      <div className="row">
        <img src={imgProduct} alt="" className="img-product-in-cart" />
        <p>Fall Limited Edition Sneakers</p>
        <p>
          $125.00*{count} <span className="total-price">${125 * count}</span>
        </p>
        <img
          src={iconDelete}
          alt=""
          onClick={onDelete}
          className="delete-btn"
        />
      </div>
      <button className="check-btn" onClick={onClose}>
        Checkout
      </button>
    </>
  );
  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal cart-container">
        <h2>Cart</h2> <hr />
        {count === 0 ? empty : notEmpty}
      </div>
    </div>
  );
}
Modal.propTypes = {
  show: propTypes.bool,
  onClose: propTypes.func,
  onDelete: propTypes.func,
  count: propTypes.number,
};
export default Modal;
