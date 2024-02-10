import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/sunrise-logo.png";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const ref = useRef(null);
  const navigate=useNavigate()



  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setMobileMenuOpen(false);
    }
  };
  return (
    <nav className="flex justify-between items-center h-30 py-4 px-8  text-black shadow-lg">
      <div className="flex items-center"onClick={()=>navigate("/")} >
        <img className=" top-7 left-16  h-12 md:ml-10" src={logo} alt="Logo" />
      </div>
    
      <div className="hidden md:block flex items-center">
        <Link
          className="hover:text-gray-500 font-normal text-md text-black font-inter"
          to="/terms&condition"
        >
          Term & Conditions
        </Link>
        <button className="inline-block mr-6 ml-6 bg-custom text-white py-2 px-4 rounded font-medium font-inter text-md">
          Contact Support
        </button>
      </div>
      <div className="md:hidden flex  ml-4 cursor-pointer" ref={ref}>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded focus:outline-none"
        >
          <div className="w-6 h-1 bg-black mb-1"></div>
          <div className="w-6 h-1 bg-black mb-1"></div>
          <div className="w-6 h-1 bg-black"></div>
        </button>
      </div>
      {/* Mobile menu items */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute  top-[5.4rem] right-0 left-0 bg-gray-200 shadow-md py-2" >
          <ul className="text-left font-bold">
            <li className="m-4 transition-all delay-150 hover:text-sky-500 duration-300">
              <a
                className="hover:text-gray-500 font-normal text-md text-black font-inter"
                href="#"
              >
                Term & Conditions
              </a>
            </li>

            <li className="m-4 transition-all delay-150 hover:text-sky-500 duration-300">
              <button className="inline-block mr-6  bg-custom text-white py-2 px-4 rounded font-medium font-inter text-md">
                Contact Support
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
