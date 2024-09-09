import { Navigate, Route, Routes } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services/User";

import AuthPage from "../pages/AuthPage";
import ShopPage from "../pages/ShopPage";
import DetailsPage from "../pages/DetailsPage";
import CheckoutPage from "../pages/CheckoutPage";
import PageNotFound from "../pages/404";
import Loader from "../components/modules/Loader";
import ProduactsProvider from "../context/ProduactContext";
import CartProvider from "../context/CartContext";
import Layout from "../layouts/Layout";

function Router() {
  const { data, isLoading, error } = useQuery(["profile"], getProfile);

  if (isLoading) return <Loader />;

  return (
    <CartProvider>
      <ProduactsProvider>
        <Layout>
          <Routes>
            <Route
              path="/auth"
              element={
                document.cookie ? <Navigate to="/" /> : <AuthPage />
              }
            />
            <Route path="/" element={<ShopPage />} />
            <Route path="/shop/:id" element={<DetailsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </ProduactsProvider>
    </CartProvider>
  );
}

export default Router;
