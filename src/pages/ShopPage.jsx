import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Card from "../components/Card";
import Loader from "../components/modules/Loader";
import { useProducts } from "../context/ProduactContext";
import {
  filterProducts,
  searchProducts,
  getInitialQuery,
} from "../components/helpers/helper";
import SearchBox from "../components/searchBox";
import SideBar from "../components/SideBar";
import styles from "./ShopPage.module.css";

function ShopPage() {
  const products = useProducts();

  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.left_content}>
            <SideBar query={query} setQuery={setQuery} />
          </div>
          <div className={styles.right}>
            <div className={styles.banner}>
              <div>
                <img src="apple.svg" alt="apple" />
                <p>iPhone 14 Series</p>
              </div>
              <h1 style={{ color: "white" }}>
                Up to 10% <br /> off Voucher
              </h1>
            </div>
            <div>
              <img src="iphone.svg" alt="iphone" />
            </div>
          </div>
        </div>
        <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
        <div className={styles.products}>
          {!displayed?.length && <Loader />}
          {displayed?.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ShopPage;
