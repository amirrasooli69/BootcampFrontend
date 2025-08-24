import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CourcesPage from "./pages/CourcesPage";
import AboutUsPage from "./pages/AboutUsPage";
import PageNoutFound from "./pages/404";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Programmer from "./components/Programmer";

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CourcesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/about-us" element={<AboutUsPage />} > 
        <Route path="programmer" element={<Programmer />} />
        <Route path="user" element={<div>User</div>} />
        </Route>
        <Route path="landing" element={<Navigate to="/" replace />} />
        <Route path="/*" element={<PageNoutFound />} />
      </Routes>
  );
}

export default App;
