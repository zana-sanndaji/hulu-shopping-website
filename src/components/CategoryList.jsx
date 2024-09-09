import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../services/category";
import Loader from "./modules/Loader";

import styles from "./CategoryList.module.css";

function CategoryList() {
  const { data, isLoading } = useQuery(["get_categories"], getCategory);
  console.log({ data, isLoading });

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        data.data.map((i) => (
          <div key={i}>
            <h5 className={styles.list}>{i}</h5>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;
