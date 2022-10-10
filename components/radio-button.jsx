import React from 'react'
import { clx } from '../helpers/clx'

export default function RadioButton({
      classname,
      label,
      name,
      children
}) {
      const classes = clx(
            "flex gap-2 items-center",
            classname
      )
      return (
            <div className={classes}>
                  <input type="radio" name={name} id={name} />
                  <label htmlFor={name} className='text-md font-bold'>{label}</label>
            </div>
      )
}