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
        loader: ()=>fetch('https://need-server.vercel.app/jobs')

      },
      {
        path:"/profile/:id",
        element:<PrivateRoute><Profile></Profile></PrivateRoute>,
        loader: ()=>fetch('http://localhost:3000/users')

      },
      {
        path:"/myBids",
        element:<PrivateRoute><MyBids></MyBids></PrivateRoute>
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
        loader: ({params}) => fetch(`https://need-server.vercel.app/jobs/${params.id}`)
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
