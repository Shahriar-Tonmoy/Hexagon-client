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
import AddProduct from "./Components/AddJob/AddJob.jsx";
import MyCart from "./Components/MyCart/MyCart.jsx";
import Products from "./Components/Products/Products.jsx";
import Details from "./Components/Details/Details.jsx";
import Update from "./Components/Update/Update.jsx";
import MyBids from "./Components/MyBids/MyBids.jsx";
import MyPostedJobs from "./Components/MyPostedJobs/MyPostedJobs.jsx";
import BidRequests from "./Components/BidRequests/BidRequests.jsx";
import AddJob from "./Components/AddJob/AddJob.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";

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
        path:"addJob",
        element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
      },
      {
        path:"dashboard",
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      },
      {
        path:"/details/:id",
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader: ()=>fetch('https://need-server.vercel.app/jobs')

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
