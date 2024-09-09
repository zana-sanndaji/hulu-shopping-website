import { shortenText } from "./helpers/helper";

import { CiTrash } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";

import styles from "./Basket.module.css";

function Basket({ data, clickHandler }) {
  const { id, title, image, quantity } = data;
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>{shortenText(title)}</p>
      <div className={styles.actions}>
        {quantity === 1 && (
          <button onClick={() => clickHandler("REMOVE_ITEM", data)}>
            <CiTrash />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => clickHandler("DECREASE", data)}>
            <IoIosRemove />
          </button>
        )}
        <span>{quantity}</span>
        <button onClick={() => clickHandler("INCREASE", data)}>
          <IoIosAdd />
        </button>
      </div>
    </div>
  );
}

export default Basket;
