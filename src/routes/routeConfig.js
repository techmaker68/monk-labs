import Index from "../Pages/index";
import ProductDetails from "../Pages/productDetails";
import MyBucket from "../Pages/myBucket";
import Success from "../Pages/success";
import Checkout from "../Pages/checkout";
const routes = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/product-detail",
    element: <ProductDetails />,
  },
  {
    path: "/my-bucket",
    element: <MyBucket />,
  },
  {
    path: "/success",
    element: <Success />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
];

export default routes;
