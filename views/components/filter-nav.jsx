import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { clx } from "../../helpers/clx";
import SideBar from "./sidebar";

export default function FilterNav({
  isOpen = true,
  setOpen,
  classname,
  children,
}) {
  const classes = clx(
    "lg:hidden fixed bg-secondary-200/20 h-screen z-20 duration-500",
    isOpen ? "block top-0 right-0 left-0" : "top-0 right-[-100%]",
    classname
  );
  return (
    <div className={classes} onClick={() => setOpen(false)}>
      <div className='h-screen bg-white dark:bg-black w-fit ml-auto relative'>
        {/* Menu close Arrow */}
        <span
          className='absolute left-[-12px] top-[30%] hover:cursor-pointer translate-y-[-30%] ring-2 ring-primary-500 ring-offset-2 w-6 h-6 bg-info-500 rounded-full flex justify-center items-center text-white'
          onClick={() => setOpen(false)}
        >
          <MdOutlineKeyboardArrowRight className='text-3xl' />
        </span>
        <SideBar isMobile />
      </div>
    </div>
  );
}
