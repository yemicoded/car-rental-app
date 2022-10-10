import React from "react";
import { clx } from "../helpers/clx";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

export default function SmallSelect({
  classname,
  selectRef,
  options,
  borderX,
  label,
  placeholder,
  id,
  children,
}) {
  const [selected, setSelected] = React.useState(null);
  const [isOpen, setOpen] = React.useState(false);
  // const selectReff = React.useRef()
  // console.log(selectRef.current.value)
  const handleChange = (e) => {
    const value = e.target.value;
    setSelected(value);
    console.log(value);
  };
  const handleSelection = (option) => {
    setSelected(option);
    setOpen(false);
  };

  const classes = clx(
    "relative w-full xl:min-w-[120px] rounded-lg flex justify-between items-center",
    classname
  );
  return (
    <div className={`pr-4 w-fit ${borderX && "border-x-2 px-4"}`}>
      <select
        name={id}
        id={id}
        ref={selectRef}
        className='hidden'
        defaultValue={selected}
        onChange={handleChange}
      >
        {/* {options.map(option =>
            <option key={option} value={option}>{option}</option>
            )} */}
      </select>
      <label htmlFor={id} className='block text-lg font-semibold'>
        {label}
      </label>
      <div className={classes} onClick={() => setOpen(!isOpen)}>
        {selected === null ? (
          <span className='text-secondary-300 text-sm'>{placeholder}</span>
        ) : (
          <span className='text-secondary-300 text-sm lg:text-md'>
            {selected}
          </span>
        )}
        {isOpen ? (
          <MdOutlineKeyboardArrowUp
            fontSize={20}
            className='h-full w-[20px] ml-2'
            onClick={() => setOpen(!isOpen)}
          />
        ) : (
          <MdOutlineKeyboardArrowDown
            fontSize={20}
            className='h-full w-[20px]'
            onClick={() => setOpen(!isOpen)}
          />
        )}

        {isOpen && (
          <div className='absolute overflow-hidden border-2 rounded-lg bg-white dark:bg-black z-20 left-0 right-0 top-[110%]'>
            {options.map((option) => (
              <option
                key={option}
                value={option}
                className={`px-1 lg:px-4 py-1 hover:bg-secondary-300/10 select-none text-secondary-500 dark:text-white text-sm lg:text-md ${
                  option === selected && "bg-secondary-300/20"
                }`}
                onClick={() => handleSelection(option)}
              >
                {option}
              </option>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
