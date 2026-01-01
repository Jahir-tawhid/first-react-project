import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layout/Root";
import Home from "../components/pages/Home";
import Products from "../components/pages/Products";
import Blogs from "../components/pages/Blogs";
import Contact from "../components/pages/Contact";
import About from "../components/pages/About";
import LogIn from "../components/auth/LogIn";
import Register from "../components/auth/Register";
import ForgotPassword from "./../components/auth/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },
      { path: "blogs", Component: Blogs },
      { path: "contact", Component: Contact },
      { path: "about", Component: About },
      { path: "login", Component: LogIn },
      { path: "register", Component: Register },
      { path: "forgot-password", Component: ForgotPassword },
    ],
  },
]);

export default router;
