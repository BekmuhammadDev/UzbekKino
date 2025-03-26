import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/mainLayout/mainlayout";
import AboutPage from "../pages/aboutus";
import CatalogPage from "../pages/catalog";
import NewsPage from "../pages/news";
import ServicePage from "../pages/service";
import NotFound from "../pages/notfound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      { path: "/", element: <AboutPage /> },
      { path: "catalog", element: <CatalogPage /> },
      { path: "news", element: <NewsPage /> },
      { path: "service", element: <ServicePage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router; // <-- DEFAULT EXPORT QO'SHILDI!
