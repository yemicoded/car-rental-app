import React from "react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import Review from "../../components/review";
import { clx } from "../../helpers/clx";

export default function Reviews({ classname, children }) {
  const [isOpen, setOpen] = React.useState(false);

  const classes = clx(
    "mt-6 bg-white dark:bg-black rounded-xl min-h-[200px] p-4",
    classname
  );
  return (
    <div className={classes}>
      <div className='flex gap-4 items-center'>
        <h3 className='font-semibold'>Reviews</h3>
        <span className='h-[25px] w-[35px] rounded-md bg-primary-500 text-white font-medium inline-flex items-center justify-center'>
          12
        </span>
      </div>

      <div className='flex flex-col gap-4 py-6'>
        <Review />
        <Review />
        <div className='items-center text-secondary-300 flex gap-2 justify-center'>
          <span className='inline-block text-center '>Show all</span>
          {isOpen ? (
            <MdOutlineKeyboardArrowUp
              fontSize={20}
              className='h-full w-[20px]'
              onClick={() => setOpen(!isOpen)}
            />
          ) : (
            <MdOutlineKeyboardArrowDown
              fontSize={20}
              className='h-full w-[20px]'
              onClick={() => setOpen(!isOpen)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
