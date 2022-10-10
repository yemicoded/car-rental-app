import React from 'react'
import { clx } from '../helpers/clx'

export default function Switch({
      classname,
      active = false,
      label,
      toggleActive,
      children
}) {
      const classes = clx(
            "w-[4.2rem] border-2 border-primary-100 rounded-2xl h-[35px] p-[2px] flex items-center relative",
            classname
      )
      return (
            <div className={`${label && "flex w-fit space-x-4 items-center"}`}>
                  <div className={classes} onClick={toggleActive}>
                        <div id="thumb" className={`h-[25px] w-[25px] rounded-full absolute top-1/2 duration-500 ${active? "bg-primary-500 right-1 dark:bg-secondary-100":"bg-primary-100 dark:bg-secondary-400 left-1"} -translate-y-1/2`} />
                  </div>
                  <p className='font-semibold '>{label}</p>
            </div>
      )
}