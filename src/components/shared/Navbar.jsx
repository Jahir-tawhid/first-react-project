// import { useEffect, useState } from "react";
// import { FaBars } from "react-icons/fa";
// import { IoMdClose } from "react-icons/io";
// import { Link, useLocation } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState("/");
//   const location = useLocation();

//   useEffect(() => {
//     setActiveLink(location.pathname || "/");
//   }, [location.pathname]);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleClickLink = (path) => {
//     setActiveLink(path);
//   };

//   return (
//     <nav className="bg-green-800 text-white py-4 md:py-8 sticky top-0 z-10 border-b-2 border-green-500">
//       <div className="container mx-auto flex justify-between items-center">
//         <h3 className="text-xl font-bold"> React Practice</h3>

//         {/* Mobile menu Bar */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu}>
//             {isOpen ? <IoMdClose /> : <FaBars />}
//           </button>
//         </div>
//         <ul className="hidden md:flex space-x-4 md:space-x-6">
//           <li>
//             <Link
//               to={"/"}
//               onClick={() => handleClickLink("/")}
//               className={`${
//                 activeLink === "/" ? "text-blue-500" : "hover:text-green-500"
//               }`}
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               to={"/products"}
//               onClick={() => handleClickLink("/products")}
//               className={`${
//                 activeLink === "/products"
//                   ? "text-blue-500"
//                   : "hover:text-green-500"
//               }`}
//             >
//               Products
//             </Link>
//           </li>
//           <li>
//             <Link
//               to={"/blogs"}
//               onClick={() => handleClickLink("/blogs")}
//               className={`${
//                 activeLink === "/blogs"
//                   ? "text-blue-500"
//                   : "hover:text-green-500"
//               }`}
//             >
//               {" "}
//               Blogs
//             </Link>
//           </li>
//           <li>
//             <Link
//               to={"/contact"}
//               onClick={() => handleClickLink("/contact")}
//               className={`${
//                 activeLink === "/contact"
//                   ? "text-blue-500"
//                   : "hover:text-green-500"
//               }`}
//             >
//               Contact
//             </Link>
//           </li>
//           <li>
//             <Link
//               to={"/about"}
//               onClick={() => handleClickLink("/about")}
//               className={`${
//                 activeLink === "/about"
//                   ? "text-blue-500"
//                   : "hover:text-green-500"
//               }`}
//             >
//               About
//             </Link>
//           </li>
//         </ul>
//         <link to={"/login"}>
//           <button className="hidden md:block bg-white text-black px-4 py-1 rounded cursor-pointer hover:bg-slate-400">
//             LogIn
//           </button>
//         </link>

//         {/* Mobile menu collapsed */}
//         <div
//           className={`md:hidden w-full absolute bg-green-600 top-full left-0 ${
//             isOpen ? "block" : "hidden"
//           }`}
//         >
//           <ul className="flex flex-col items-center py-4 space-y-2">
//             <li className="hover:text-green-500">Home</li>
//             <li className="hover:text-green-500">Products</li>
//             <li className="hover:text-green-500">Blogs</li>
//             <li className="hover:text-green-500">Contact</li>
//             <li className="hover:text-green-500">About</li>
//             <li>
//               <button className="bg-white text-black px-4 py-1 rounded cursor-pointer hover:bg-slate-400">
//                 LogIn
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// <!-- updating code here --!>

import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const activeLink = location.pathname;

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="bg-green-800 text-white py-4 md:py-8 sticky top-0 z-50 border-b-2 border-green-500">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h3 className="text-xl font-bold"> Simple React </h3>

        {/* Mobile menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <IoMdClose size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`${
                  activeLink === item.path
                    ? "text-blue-400 font-bold"
                    : "hover:text-green-300"
                } transition-colors duration-200`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Fixed Login Link */}
        <Link to="/login" className="hidden md:block">
          <button className="bg-white text-black px-4 py-1 rounded cursor-pointer hover:bg-slate-200 transition-colors">
            LogIn
          </button>
        </Link>

        {/* Mobile menu collapsed */}
        <div
          className={`md:hidden w-full absolute bg-green-700 top-full left-0 transition-all duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <ul className="flex flex-col items-center py-6 space-y-5">
            {navLinks.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`${
                    activeLink === item.path ? "text-blue-400 font-bold" : ""
                  } text-lg`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <button className="bg-white text-black px-6 py-2 rounded font-medium">
                  LogIn
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
