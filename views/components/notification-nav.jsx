import React from "react";
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { clx } from "../../helpers/clx";

export default function NotificationNav({
  isOpen = true,
  setOpen,
  classname,
  children,
}) {
  const [notifications, setNotifications] = React.useState(null);
  const classes = clx(
    "fixed bg-secondary-200/20 h-screen z-20 duration-300",
    isOpen ? "block top-0 right-0 left-0" : "top-0 right-[-100%]",
    classname
  );
  return (
    <div className={classes} onClick={() => setOpen(false)}>
      <div className='h-screen bg-white dark:bg-black w-[70%] lg:w-[30%] md:w-[50%] p-4 ml-auto relative flex flex-col'>
        {/* Menu close Arrow */}
        <span
          className='absolute left-[-12px] top-[30%] hover:cursor-pointer translate-y-[-30%] ring-2 ring-primary-500 ring-offset-2 w-6 h-6 bg-info-500 rounded-full flex justify-center items-center text-white'
          onClick={() => setOpen(false)}
        >
          <MdOutlineKeyboardArrowRight className='text-3xl' />
        </span>

        <div className='flex gap-2 items-center py-4 border-b-2'>
          <IoMdNotifications className='text-xl' />
          <h3 className='font-semibold text-lg tracking-wide'>Notifications</h3>
        </div>
        {/* Notifications Container */}
        <div
          className={`flex gap-2 ${
            notifications ? "py-3" : "items-center justify-center flex-1"
          }`}
        >
          {!notifications && (
            <p className='w-[70%] mx-auto text-secondary-300 text-md font-medium text-center'>
              Notification Box is empty
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
