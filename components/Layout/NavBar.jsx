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
          <div>About us</div>
          <div className='pl-5'>Products</div>
          <div className='pl-5'>Blogs</div>
          <div className='pl-5'>Where To Buy</div>
          <div className='pl-5'>Contact Us</div>
        </div>

        <div>
          <CiSearch className='w-10 h-10' />
        </div>
      </div>
    </section>
  );
};

export default NavBar;
