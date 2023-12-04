import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./AuthProvider/authProvider.jsx";
import Root from "./Components/Root/Root.jsx";
import Registration from "./Components/Registration/Registration.jsx";
import SignIn from "./Components/SignIn/SignIn.jsx";
import Home from "./Components/Home/Home.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";
import Error from "./Components/Error/Error.jsx";
import AddProduct from "./Components/AddProperty/AddProperty.jsx";
import MyCart from "./Components/MyCart/MyCart.jsx";
import Products from "./Components/Products/Products.jsx";
import Details from "./Components/Details/Details.jsx";
import Update from "./Components/Update/Update.jsx";
import MyBids from "./Components/MyBids/MyBids.jsx";
import MyPostedJobs from "./Components/MyPostedJobs/MyPostedJobs.jsx";
import BidRequests from "./Components/BidRequests/BidRequests.jsx";
import AddProperty from "./Components/AddProperty/AddProperty.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import MyAddedProperties from "./Components/MyAddedProperties/MyAddedProperties.jsx";
import ManageProperties from "./Components/ManageProperties/manageProperties.jsx";
import AllProperties from "./Components/AllProperties/AllProperties.jsx";
import Wishlist from "./Components/Wishlist/Wishlist.jsx";
import MakeOffer from "./Components/MakeOffer/MakeOffer.jsx";
import BoughtProperties from "./Components/BoughtProperties/BoughtProperties.jsx";
import MyReviews from "./Components/MyReviews/MyReviews.jsx";
import ManageUsers from "./Components/ManageUsers/ManageUsers.jsx";
import ManageReview from "./Components/ManageReview/ManageReview.jsx";
import RequestedProperties from "./Components/RequestedProperties/RequestedProperties.jsx";
import AdvertiseProperties from "./Components/AdvertiseProperties/AdvertiseProperties.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
      {
        path: "SignIn",
        element: <SignIn></SignIn>,
      },
      {
        path:"addProperty",
        element:<PrivateRoute><AddProperty></AddProperty></PrivateRoute>
      },
      {
        path:"/manageProperties",
        element:<PrivateRoute><ManageProperties></ManageProperties></PrivateRoute>
      },
      {
        path:"/myAddedProperties",
        element:<PrivateRoute><MyAddedProperties></MyAddedProperties></PrivateRoute>
      },
      {
        path:"/dashboard",
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      },
      {
        path:"/allProperties",
        element:<PrivateRoute><AllProperties></AllProperties></PrivateRoute>
      },
      {
        path:"/details/:id",
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader: ()=>fetch('http://localhost:3000/properties')

      },
      {
        path:"/profile/:id",
        element:<PrivateRoute><Profile></Profile></PrivateRoute>,
        loader: ()=>fetch('http://localhost:3000/users')

      },
      {
        path:"/wishlist",
        element:<PrivateRoute><Wishlist></Wishlist></PrivateRoute>
      },
      {
        path:"/manageUsers",
        element:<PrivateRoute><ManageUsers></ManageUsers></PrivateRoute>
      },
      {
        path:"/manageReview",
        element:<PrivateRoute><ManageReview></ManageReview></PrivateRoute>
      },
      {
        path:"/requestedProperties",
        element:<PrivateRoute><RequestedProperties></RequestedProperties></PrivateRoute>
      },
      {
        path:"/broughtProperties",
        element:<PrivateRoute><BoughtProperties></BoughtProperties></PrivateRoute>
      },
      {
        path:"/advertiseProperties",
        element:<PrivateRoute><AdvertiseProperties></AdvertiseProperties></PrivateRoute>
      },
      {
        path:"/myReviews",
        element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>
      },
      {
        path:"/makeOffer/:id",
        element:<PrivateRoute><MakeOffer></MakeOffer></PrivateRoute>,
        loader: ()=>fetch('http://localhost:3000/properties')
      },
      {
        path:"/bidRequests",
        element:<PrivateRoute><BidRequests></BidRequests></PrivateRoute>
      },
      {
        path:"/myPostedJobs",
        element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
      },
      {
        path:"/update/:id",
        element:<PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:3000/properties/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
