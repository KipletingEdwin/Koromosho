import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Kama from "./components/Kama/Kama.jsx";
import Mu from "./components/Mu/Mu.jsx";
import Kayo from "./components/Kayo/Kayo.jsx";
import SundaySchool from "./components/SundaySchool/SundaySchool.jsx";
import Evangelism  from "./components/Evangelism/Evangelism.jsx"
import Choir from "./components/Choir/Choir.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "@fontsource/outfit";
import "@fontsource/roboto";
import LandingPage from "./LandingPage.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Ministries from "./components/Ministries/Ministries.jsx";
import Contact from "./components/Contact/Contact.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
    children: [
 {
        element:  <LandingPage />,
        index: true,
      },
      {
        path: "/kama",
        element:  <Kama />,
      },
      {
        path: "/mu",
        element:  <Mu />,
      },
      {
        path: "/kayo",
        element:  <Kayo />,
      },
      {
        path: "/sundayschool",
        element:  <SundaySchool />,
      },
      {
        path: "/mission",
        element:  <Evangelism />,
      },
      {
        path: "/choir",
        element:  <Choir />,
      },
      {
        path: "/home",
        element:  <Home />,
      },
      {
        path: "/about",
        element:  <About />,
      },
      {
        path: "/ministries",
        element:  <Ministries />,
      },
      {
        path: "/contact",
        element:  <Contact />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
