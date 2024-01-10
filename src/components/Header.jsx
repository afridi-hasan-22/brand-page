import React from "react";

const Header = () => {
  return (
    <div className="w-[80%] mx-auto mt-12">
      <div className="w-full grid grid-cols-2 ">
        <div>
          <h1 className="text-7xl text-left font-extrabold leading-[80px]">
            YOUR FEET <br /> DESERVE <br />
            THE BEST
          </h1>
          <p className="text-xs text-left text-gray-500 my-4 leading-5">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br /> HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br /> THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
          <div className="flex space-x-8  items-center">
            <a className="bg-[#D01C28] text-white font-semibold px-4 py-2" href="">Shop Now</a>
            <a className="font-semibold px-4 py-2 border  border-3 border-black" href="">Category</a>
          </div>
          <p className="text-xs my-4">Also Available On</p>
          <div className="flex space-x-4 items-center"> 
            <img className="w-[32px]" src="/public/images/flipkart.png" alt="" />
            <img className="w-[32px]" src="/public/images/amazon.png" alt="" />
          </div>
        </div>
        <div className="flex justify-center items-center"><img src="/public/images/shoe_image.png" alt="" /></div>
      </div>
    </div>
  );
};

export default Header;
