import { useState } from "react";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-green-500 shadow-md">
   
      <div className="flex items-center text-2xl font-semibold text-white">
        <a href="/" className="hover:text-green-300">
          Communication Tracker
        </a>
      </div>

   
      <div className="hidden md:flex space-x-6 items-center text-white">
        <Link
          to="/admin"
          className="transition-all hover:text-green-200 hover:underline"
        >
          Admin
        </Link>
        <Link
          to="/dashboard"
          className="transition-all hover:text-green-200 hover:underline"
        >
          Dashboard
        </Link>
        <Link
          to="/calendar"
          className="transition-all hover:text-green-200 hover:underline"
        >
          Calendar
        </Link>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl text-gray-700">
          {menuOpen ? <IoClose /> : <TiThMenu />}
        </button>
      </div>

    
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-100 shadow-md flex flex-col items-start p-4 space-y-4 md:hidden">
          <Link
            to="/admin"
            className="transition-all hover:text-green-200 hover:underline"
          >
            Admin
          </Link>
          <Link
            to="/dashboard"
            className="transition-all hover:text-green-200 hover:underline"
          >
            Dashboard
          </Link>
          <Link
            to="/calendar"
            className="transition-all hover:text-green-200 hover:underline"
          >
            Calendar
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;