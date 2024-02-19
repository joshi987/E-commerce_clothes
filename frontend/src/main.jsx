import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './customer/components/layout/Layout.jsx';
import HomePages from './customer/pages/HomePages.jsx';
import Sign from './customer/components/signin/Sign.jsx';
import Pricepage from './customer/pricepage/Pricepage.jsx';
import Addcart from './customer/components/addcart/Addcart.jsx';
import { Provider } from 'react-redux';
import { store } from './customer/redux/store.js';
import Addbag from './customer/components/addbag/Addbag.jsx';
import CreateAccount from './customer/components/createAccount/CreateAccount.jsx';
import axios from "axios";
import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BuyNowPage from './customer/components/addbag/BuyNowPage.jsx';
import Admin from './customer/components/admin/Admin.jsx';

axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
    {
      path:'/',
      element:<HomePages/>
    },
      {
        path:"sign",
        element:<Sign/>
      },{
        path:"price",
        element:<Pricepage/>,
      },
      {
        path:"bag",
        element:<Addbag/>
      },
      {
        path:"/account-login",
        element:<CreateAccount/>
      },
      {
        path:"/admin",
        element:<Admin/>
      }
       
    
    ],
 
   
  },
  {
    
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/price/cart",
    element:
      <Addcart/>
    ,
      },
      {
        path:"/bag/buy",
        element:<BuyNowPage/>
      }
    
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Provider store={store}>
<ToastContainer/>
<RouterProvider router={router}/>
</Provider>
  </React.StrictMode>,
)
