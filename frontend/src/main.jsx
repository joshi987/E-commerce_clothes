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
import Adminlogin from './customer/components/admin/Adminlogin.jsx';
import UserData from './customer/components/userData/UserData.jsx';
import Addproduct from './customer/components/admin/productdetail/addproduct/Addproduct.jsx';
import Allproduct from './customer/components/admin/productdetail/allproduct/Allproduct.jsx';
import ParentComponent from './customer/components/dressProduct/ParentComponent.jsx';
import CreateProductForm from './customer/components/dressProduct/createProduct/CreateProductForm.jsx';
import Updatedummy from './customer/components/dressProduct/updateProduct/Updatedummy.jsx';


axios.defaults.withCredentials = true;


const isUserSignedIn = !!localStorage.getItem('token')
const router =  createBrowserRouter([
  { 
    path:"/",
    element: <Layout/>,
    children:[
    {
      path:'/',
      element: <HomePages/>,
    },
    {
path:"userData",
element: <UserData/>
    },
      {
        path:"/sign",
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
      },
      {
        path:"/admin",
        element:isUserSignedIn && <Admin/>
      },
      {
        path:"/adminlogin",
        element:<Adminlogin/>
      },
      {
        path:"/admin/add-product",
        element:<Addproduct/>
      },
      {
        path:'/admin/all-product',
        element:<Allproduct/>
      },
      {
        path:'/admin/dummy',
        element:<ParentComponent/>
      },
      {
        path:'/admin/dummy/createProductForm',
        element:<CreateProductForm/>
      },
      {
        path:'/admin/dummy/updatedummy/:productId',
        element:<Updatedummy/>
      },
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
