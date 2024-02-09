import React from "react";
import PowerLogo from "../assets/poweredby.png";

function Footer() {
  return (
    <>
      <footer className="py-4 bottom-0 left-0 w-full ">
      <p className="text-sm text-black text-center">
        {/* Centered copyright text */}
        <span className="block sm:inline-block">Coyright &copy; {new Date().getFullYear()}. All rights reserved by Credence rewards.</span>
      </p>
      <div className="flex items-center mt-3 justify-center  sm:justify-end"> {/* Flex to center Powered By and logo */}
        <p className="mr-2 text-sm">Powered By</p> {/* Adjust margin for separation */}
        <img src={PowerLogo} alt="Credence Rewards" className="h-6" />
      </div>
    </footer>

    </>
  );
}

export default Footer;
