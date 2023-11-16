import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
    ],
  },
  // {
  //   path: "/admin/products",
  //   element: <AdminLayout />,
  //   children:[
  //     {path: "/admin", element: <AdminPage />}
  //   ]
  // }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
