import Home from "../pages/Home/Home";
import About from "../pages/About/About"
import Products from "../pages/Products/Products";
import SignUpForm from "../pages/SignUpForm.js/SignUpForm";
import MainProdcut from "../pages/MainProduct/MainProdcut";
import Cart from "../pages/Cart/Cart";
import Login from "../pages/Login/Login";
import ShippingData from "../pages/ShippingData.js/ShippingData";
import Order from "../pages/Order.js/Order";
import Account from "../pages/account/Account";
import Orders from "../pages/Orders/Orders";
import Info from "../pages/Info/Info";
import Dasboard from "../pages/Dasboard/Dasboard";
import Adminac from "../pages/Admin/Adminac";
import Productadd from "../pages/ProductAdd/Productadd";
import OrderDetial from "../pages/orderDetail/OrderDetial";
let routes = [
  {
    path: '/',
    element: <Home />,
  },
  { path: '/about', element: <About /> },
  { path: "/signupform", element: <SignUpForm /> },
  { path: '/products', element: <Products /> },
  { path: '/product/:productID', element: <MainProdcut /> },
  { path: '/cart', element: <Cart /> },
  { path: '/Login', element: <Login /> },
  { path: '/shippingData', element: <ShippingData /> },
  { path: '/order', element: <Order /> },
  {
    path: '/account',
    element: <Account />,
    children: [
     
      {path : 'dashboard' , element : <Dasboard/>} ,
      {
        path: 'Orders',
        element: <Orders />
      },
      {
        path: 'Orders/:orderId',
        element: <OrderDetial />
      },
      {
        path: 'Info',
        element: <Info />
      }


    ]
  } ,
  {
    path: '/admin',
    element: <Adminac />,
    children: [
     
  
      {
        path: 'Productadd',
        element: <Productadd />
      },
      

    ]
  } ,

];
export default routes