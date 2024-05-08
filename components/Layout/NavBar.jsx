import React from "react";
import { CiSearch } from "react-icons/ci";

const NavBar = () => {
  return (
    <section>
      <div className="bg-white flex justify-between items-center px-20 font-urbanist font-semibold text-lg">
        <div>
          <img src='/images/navlogo.png' alt='logo' />
        </div>
        <div className='flex'>
          <a href='#about'>About us</a>
          <a href='#products' className='pl-5'>Products</a>
          {/* <a href="#blogs" className='pl-5'>Blogs</a> */}
          <a href='##where to buy' className='pl-5'>Where To Buy</a>
          <a href='#contact' className='pl-5'>Contact Us</a>
        </div>

        <div>
          <CiSearch className='w-10 h-10' />
        </div>
      </div>
    </section>
  );
};

export default NavBar;
