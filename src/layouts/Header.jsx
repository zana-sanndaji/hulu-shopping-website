import { Link } from "react-router-dom";
import styles from "./Header.module.css";

import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

function Header() {
  const [state] = useCart();
  return (
    <>
      <div className={styles.top_header}>
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
      </div>
      <header className={styles.header}>
        <div>
          <Link to="/">
            <span className={styles.logo}>
              <p>HULU</p>
            </span>
          </Link>
        </div>
        <div className={styles.right}>
          <ul className={styles.lists}>
            <li>Contact</li>
            <li>About</li>
            <li>
              <Link to="/">Shop</Link>
            </li>
            <li>
              <Link
                to="/auth"
                onClick={() => {
                  document.cookie &&
                    toast.success("you are logged in already!");
                }}
              >
                <span className={styles.login}>
                  <p>Login</p>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/checkout">
                {!!state.itemsCounter && (
                  <span className={styles.counter}>{state.itemsCounter}</span>
                )}
                <img src="shop.svg" className={styles.svg} />
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
