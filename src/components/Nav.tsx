import "../assets/css/Navbar.css";
import logo from "../assets/img/navbar/logo.svg";
import profile from "../assets/img/navbar/profile.svg";
import cart from "../assets/img/navbar/cart.svg";
import arrowDown from "../assets/img/navbar/down-arrow.svg";
import { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { IoLogoInstagram } from "react-icons/io";
import { BsTiktok } from "react-icons/bs";

const Navbar = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="flex navbar items-center w-full lg:px-6 py-4 text-[2rem] font-semibold sticky top-0 left-0 right-0">
      <div className="flex justify-between w-1/3">
        <ul className="lg:flex justify-between px-3 w-full">
          <li className="arrow lg:block hidden">
            <a
              href="#"
              className="flex gap-5 hover:text-gray-600"
            >
              SHOP
              <img
                src={arrowDown}
                className="w-[0.85rem] arrow-hover"
                alt="arrow-down"
              />
            </a>
          </li>
          <li className="lg:block hidden">
            <a href="#" className="ml-1 ">
              BUNDLES
            </a>
          </li>
          <li className="lg:hidden block" onClick={toggleSidebar}>
          <RxHamburgerMenu />
          </li>
        </ul>
      </div>

      <div className="flex justify-center w-1/3 h-8 ml-2">
        <img src={logo} alt="Logo" className="w-auto " />
      </div>

      <div className="flex gap-4 ml-auto w-1/3 justify-end md:justify-between">

  <div className=" hidden lg:block xl:flex gap-4 lg:w-[75%] w-[40%]">
    <a href="#" className="flex gap-4 ">
      LEARN
      <img
        src={arrowDown}
        className="w-[0.85rem] arrow-hover"
        alt="arrow-down"
      />
    </a>
    <a href="#" className="">
      FINDWILDWONDER
    </a>
  </div>

  {/* Icons Section */}
  <div className="flex gap-4 pr-8 items-center md:ml-auto">
    <a href="#" className="">
      <img src={profile} alt="Profile" className="h-6 w-6 object-cover" />
    </a>
    <a href="#" className="">
      <img src={cart} alt="Cart" className="h-6 w-6 object-cover" />
    </a>
  </div>
</div>



<div
        className={`fixed top-0 left-0 z-50 w-3/4 h-full bg-[#fbeccc] transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className="">
          <RxCross2 />
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-4 text-2xl">
          <li><a href="#" className="">SHOP</a></li>
          <li><a href="#" className=" flex gap-4">VARIETY PACKS
          <img
                src={arrowDown}
                className="w-[0.85rem] arrow-hover"
                alt="arrow-down"
              />
            </a></li>
          <li><a href="#" className=" flex gap-4">FLAVORS
          <img
                src={arrowDown}
                className="w-[0.85rem] arrow-hover"
                alt="arrow-down"
              />
            </a></li>
          <li><a href="#" className=" flex gap-4">GIFTS
          <img
                src={arrowDown}
                className="w-[0.85rem] arrow-hover"
                alt="arrow-down"
              />
            </a></li>
          <li><a href="#" className="">BUNDLES</a></li>
          <li><a href="#" className=" flex gap-4">LEARN
          <img
                src={arrowDown}
                className="w-[0.85rem] arrow-hover"
                alt="arrow-down"
              />
            </a></li>
          <li><a href="#" className="">FIND WILDWONDER</a></li>
        </ul>
        <hr className="w-[95%] m-auto"></hr>
        <div className="p-4 text-2xl">
          <div>MANAGE SUBSCRIPTIONS</div>
          <div className="flex mt-4 gap-2 text-2xl"><IoLogoInstagram /> <BsTiktok /></div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
