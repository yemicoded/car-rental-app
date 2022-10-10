import React from "react";
import { FiSearch } from "react-icons/fi";
import { VscSettings } from "react-icons/vsc";
import { clx } from "../helpers/clx";

export default function Search({ classname, children }) {
  const classes = clx(
    "bg-white dark:bg-white rounded-xl lg:rounded-full border-2 overflow-hidden px-4 py-2 flex gap-2 lg:gap-4 items-center",
    classname
  );
  return (
    <div className={classes}>
      <div className="w-4 h-4 lg:w-6 lg:h-6">
        <FiSearch className='w-4 h-4 lg:w-6 lg:h-6 text-secondary-300' />
      </div>
      <div className='flex gap-4 items-center lg:flex-1 flex-1'>
        <input
          type='search'
          placeholder='Search something here'
          className='outline-none flex-1 dark:bg-transparent text-secondary-500'
        />
        <VscSettings className='hidden lg:block text-secondary-300' />
      </div>
    </div>
  );
}
