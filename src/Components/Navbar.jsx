import { NavLink } from "react-router";
import { navData } from "../Data/data";
import { CgProfile } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-evenly items-center p-4">
        <div className="">
          <span className="font-Poppins font-semibold text-[24px]">3legant.</span>
        </div>
        <div className="">
          <ul className="flex gap-[2.5rem]">
            {navData.map((index) => (
              <li key={index}>
                <NavLink to={index.url}>{index.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-2 items-center">
          <img src="../../public/Assets/png/search 02.png" alt="" />
          <img src="../../public/Assets/png/user-circle.png" alt="" />
          <button>
            <img src="../../public/Assets/png/shopping bag.png" alt="" />
          </button>
          <img src="../../public/Assets/png/Frame 3.png" alt="" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
