import React from 'react'
import { clx } from '../helpers/clx'
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from 'react-icons/md'

export default function Select({
      classname,
      selectRef,
      options,
      label,
      placeholder,
      id,
      children
}) {
      const [selected, setSelected] = React.useState(null)
      const [isOpen, setOpen] = React.useState(false)
      // const selectReff = React.useRef()
      // console.log(selectRef.current.value)
      const handleChange = (e) => {
            const value = e.target.value
            setSelected(value)
            console.log(value)
      }
      const handleSelection = (option) => {
            setSelected(option)
            setOpen(false)
      }

      const classes = clx(
            "relative px-4 py-3 bg-secondary-300/10 rounded-lg flex justify-between items-center",
            classname
      )
      return (
        <div>
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
          <label htmlFor={id} className='block py-2 font-semibold'>
            {label}
          </label>
          <div className={classes} onClick={() => setOpen(!isOpen)}>
            {selected === null ? (
              <span className='text-secondary-300'>{placeholder}</span>
            ) : (
              <span className='text-secondary-500 dark:text-secondary-400 dark:font-medium'>{selected}</span>
            )}
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

            {isOpen && (
              <div className='absolute overflow-hidden border-2 rounded-lg bg-white z-20 left-0 right-0 top-[110%]'>
                {options.map((option) => (
                  <option
                    key={option}
                    value={option}
                    className={`px-4 py-2 hover:bg-secondary-300/10 select-none text-secondary-500 ${
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