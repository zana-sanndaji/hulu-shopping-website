import { Link, Navigate } from "react-router-dom";
import { productQuantity, shortenText } from "./helpers/helper";
import { useCart } from "../context/CartContext";

import { HiBars3BottomRight } from "react-icons/hi2";
import { CiShoppingBasket } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";
import { CiTrash } from "react-icons/ci";
import toast from "react-hot-toast";

import styles from "./Card.module.css";

function Card({ data }) {
  const { id, title, image, price } = data;

  const [state, dispatch] = useCart();

  const quantity = productQuantity(state, id);

  const clickHandler = (type) => {
    if (document.cookie) {
      dispatch({ type, payload: data });
    } else {
      toast.error("Please login first");
    }
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{shortenText(title)}</h3>
      <p>{price} $</p>
      <div className={styles.actions}>
        <Link to={`/shop/${id}`}>
          <HiBars3BottomRight />
        </Link>
        <div>
          {quantity === 1 && (
            <button onClick={() => clickHandler("REMOVE_ITEM")}>
              <CiTrash />
            </button>
          )}
          {quantity > 1 && (
            <button onClick={() => clickHandler("DECREASE")}>
              <IoIosRemove />
            </button>
          )}
          {!!quantity && <span>{quantity}</span>}
          {quantity === 0 ? (
            <button onClick={() => clickHandler("ADD_ITEM")}>
              <CiShoppingBasket />
            </button>
          ) : (
            <button onClick={() => clickHandler("INCREASE")}>
              <IoIosAdd />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
