import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import FoodDetail from "../Pages/FoodDetail";
import AllFoodItems from "../Pages/AllFoodItems";
import Login from "../Pages/Auth/Login";
import Signup from "../Pages/Auth/Signup";
import FoodPurchase from "../Pages/FoodPurchase";
import PrivateRoute from "./PrivateRoute";
import AddedFoodItems from "../Pages/AddedFoodItems";
import UpdateFood from "../Pages/UpdateFood";
import AddFoodItem from "../Pages/AddFoodItem";
import OrderedFoodItems from "../Pages/OrderedFoodItems";
import NotFound from "../Pages/NotFound";

const baseURL = "https://eleventh-assignment-server-iota.vercel.app";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/all-food-items",
        element: <AllFoodItems />,
      },
      {
        path: "/food/:id",
        loader: ({ params }) =>
          fetch(`${baseURL}/food/${params.id}`, { credentials: "include" }),
        element: <FoodDetail />,
      },
      {
        path: "/purchase/:id",
        loader: ({ params }) =>
          fetch(`${baseURL}/food/${params.id}`, { credentials: "include" }),
        element: (
          <PrivateRoute>
            <FoodPurchase />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/added-food-items",
        element: (
          <PrivateRoute>
            <AddedFoodItems />
          </PrivateRoute>
        ),
      },
      {
        path: "/ordered-food-items",
        element: (
          <PrivateRoute>
            <OrderedFoodItems />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-food/:id",
        loader: ({ params }) =>
          fetch(`${baseURL}/food/${params.id}`, { credentials: "include" }),
        element: (
          <PrivateRoute>
            <UpdateFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-food-item",
        element: (
          <PrivateRoute>
            <AddFoodItem />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
