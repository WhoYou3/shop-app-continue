import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Products from "./pages/Products";
import Home from "./pages/Home";
import DetailProduct from "./pages/DetailProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/:products",
        element: <Products />,
      },
      { path: "/:products/:product", element: <DetailProduct /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
