import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center w-[85%] mx-auto py-5">
        <div className="logo ">
            <img src="/src/assets/brand_logo.png" alt="" />
        </div>
        <ul className="flex space-x-6 font-bold">
            <li href='#'>Menu</li>
            <li href='#'>Location</li>
            <li href='#'>About</li>
            <li href='#'>Contact</li>
        </ul>
        <button className="bg-[#D01C28] text-white px-3 py-2 rounded-md font-semibold">Login</button>
      </nav>
    </>
  );
};

export default Navbar;
