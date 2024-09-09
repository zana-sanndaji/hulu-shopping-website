import styles from "./BasketSidebar.module.css";

function BasketSidebar({ state, clickHandler }) {
  return (
    <div className={styles.sidebar}>
      <div>
        <p>Total:</p>
        <span>{state.total} $</span>
      </div>
      <div>
        <p>Quantity:</p>
        <span>{state.itemsCounter}</span>
      </div>
      <div>
        <p>Status:</p>
        <span>{!state.checkout && "Pending..."}</span>
      </div>
      <button onClick={() => clickHandler("CHECKOUT")}>Checkout</button>
    </div>
  );
}

export default BasketSidebar;
