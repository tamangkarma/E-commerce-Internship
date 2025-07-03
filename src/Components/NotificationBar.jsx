import png from "../../public/Assets/png/Vector.png";
import { RxCross2 } from "react-icons/rx";
import { GoArrowRight } from "react-icons/go";
const NotificationBar = () => {
  return (
    <>
      <div className="bg-secondary-green h-[2.5rem] w-full flex justify-evenly items-center relative">
        <div className="flex gap-3 justify-center items-center">
          <div>
            <img src={png} alt="png icon" />
          </div>
          <div>
            <p>
              <span className="text-primary text-text13 ">
                30% off storewide — Limited time! 
              </span>
            </p>
          </div>
          <button className="hidden border-black border-b text-buttonxs sm:flex items-center gap-2 ">
            <span>Shop Now</span>
            <div>
              <GoArrowRight/>
            </div>
          </button>
        </div>
        <button className="right-10 absolute lg:right-2 ">
          <RxCross2 />
        </button>
      </div>
    </>
  );
};

export default NotificationBar;
