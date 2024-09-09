import { createQueryObject } from "./helpers/helper";
import { categories } from "../constants/list";

import styles from "./SideBar.module.css";

function SideBar({ query, setQuery }) {
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    console.log(tagName);

    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };

  return (
    <div className={styles.sidebar}>
      <ul onClick={categoryHandler}>
        {categories.map((item) => (
          <li
            key={item.id}
            className={
              item.type.toLowerCase() === query.category
                ? styles.selected
                : null
            }
          >
            {" "}
            {item.type}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
