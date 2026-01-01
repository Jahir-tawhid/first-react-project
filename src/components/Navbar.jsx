import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-800 text-white py-4 md:py-8 relative border-b-2 border-green-500">
      <div className="container mx-auto flex justify-between items-center">
        <h3 className="text-xl font-bold"> React Practice</h3>

        {/* Mobile menu Bar */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <IoMdClose /> : <FaBars />}
          </button>
        </div>
        <ul className="hidden md:flex space-x-4 md:space-x-6">
          <li>
            <Link to={"/"} className="hover:text-green-500">
              Home
            </Link>
          </li>
          <li>
            <Link to={"products"} className="hover:text-green-500">
              Products
            </Link>
          </li>
          <li>
            <Link to={"blogs"} className="hover:text-green-500">
              Blogs
            </Link>
          </li>
          <li>
            <Link to={"contact"} className="hover:text-green-500">
              Contact
            </Link>
          </li>
          <li>
            <Link to={"about"} className=" hover:text-green-500">
              About
            </Link>
          </li>
        </ul>
        <button className="hidden md:block bg-white text-black px-4 py-1 rounded cursor-pointer hover:bg-slate-400">
          {" "}
          LogIn{" "}
        </button>

        {/* Mobile menu collapsed */}
        <div
          className={`md:hidden w-full absolute bg-green-600 top-full left-0 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center py-4 space-y-2">
            <li className="hover:text-green-500">Home</li>
            <li className="hover:text-green-500">Products</li>
            <li className="hover:text-green-500">Blogs</li>
            <li className="hover:text-green-500">Contact</li>
            <li className="hover:text-green-500">About</li>
            <li>
              <button className="bg-white text-black px-4 py-1 rounded cursor-pointer hover:bg-slate-400">
                LogIn
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
