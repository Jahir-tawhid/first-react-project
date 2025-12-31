import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {

                const [isOpen, setIsOpen] = useState(false);

                const toggleMenu = () => {
                                setIsOpen(!isOpen);
                }


  return (
    <nav className="bg-green-800 text-white py-4 md:py-8">
                <div className="container mx-auto flex justify-between items-center">
                                <h3> React Practice</h3>

                                 {/* Mobile menu Bar */}
                                <div onClick={toggleMenu}> 
                                { IsOpen ? <IoMdClose /> : <FaBars />}
                                
                                
                                </div>
                                <ul className="flex space-x-4 md:space-x-6">
                                                <li>Home</li>
                                                <li>Products</li>
                                                <li>Blogs</li>
                                                <li>Contact</li>
                                                <li>About</li>
                                </ul>
                         <button> LogIn </button>
                </div>
    </nav>
  )
}

export default Navbar
