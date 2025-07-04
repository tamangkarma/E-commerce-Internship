import { useState } from "react";
import { NavLink } from "react-router";
import { navData } from "../Data/data";
import { CgProfile } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [shopDropdown, setShopDropdown] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md relative">
      {/* Logo */}
      <div>
        <span className="font-Poppins font-semibold text-[24px]">3legant.</span>
      </div>

      {/* Desktop Menu */}  
      <div className="hidden md:flex">
        <ul className="flex gap-[2.5rem] items-center">
          {navData.map((item) => {
            if (item.title === "Shop") {
              return (
                <li key={item.url} className="relative flex items-center space-x-1">
                  {/* Shop Link */}
                  <NavLink
                    to={item.url}
                    className={({ isActive }) =>
                      isActive ? "text-black font-semibold" : "text-gray-600"
                    }
                  >
                    Shop
                  </NavLink>

                  {/* Dropdown Icon */}
                  <button onClick={() => setShopDropdown(!shopDropdown)}>
                    {shopDropdown ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                  </button>

                  {/* Shop Dropdown */}
                  {shopDropdown && (
                    <ul className="absolute bg-white border mt-2 py-2 shadow-lg space-y-2 animate-fade">
                      <li><NavLink to="/shop/item1" className="block px-4 py-2 hover:bg-gray-100">Item 1</NavLink></li>
                      <li><NavLink to="/shop/item2" className="block px-4 py-2 hover:bg-gray-100">Item 2</NavLink></li>
                    </ul>
                  )}
                </li>
              );
            } else if (item.title === "Product") {
              return (
                <li key={item.url} className="relative flex items-center space-x-1">
                  {/* Product Link */}
                  <NavLink
                    to={item.url}
                    className={({ isActive }) =>
                      isActive ? "text-black font-semibold" : "text-gray-600"
                    }
                  >
                    Product
                  </NavLink>

                  {/* Dropdown Icon */}
                  <button onClick={() => setProductDropdown(!productDropdown)}>
                    {productDropdown ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                  </button>

                  {/* Product Dropdown */}
                  {productDropdown && (
                    <ul className="absolute bg-white border mt-2 py-2 shadow-lg space-y-2 animate-fade">
                      <li><NavLink to="/product/item1" className="block px-4 py-2 hover:bg-gray-100">Item 1</NavLink></li>
                      <li><NavLink to="/product/item2" className="block px-4 py-2 hover:bg-gray-100">Item 2</NavLink></li>
                    </ul>
                  )}
                </li>
              );
            } else {
              return (
                <li key={item.url}>
                  <NavLink
                    to={item.url}
                    className={({ isActive }) =>
                      isActive ? "text-black font-semibold" : "text-gray-600"
                    }
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            }
          })}
        </ul>
      </div>

      {/* Icons */}
      <div className="hidden md:flex gap-4 items-center text-[20px]">
        <FiSearch className="cursor-pointer" />
        <CgProfile className="cursor-pointer" />
        <BsBag className="cursor-pointer" />
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg py-4 z-50">
          <ul className="flex flex-col items-center gap-4">
            {navData.map((item) => (
              <li key={item.url}>
                <NavLink
                  to={item.url}
                  onClick={() => setMobileMenu(false)}
                  className="text-gray-600"
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
            <div className="flex gap-4 mt-4 text-[20px]">
              <FiSearch className="cursor-pointer" />
              <CgProfile className="cursor-pointer" />
              <BsBag className="cursor-pointer" />
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
