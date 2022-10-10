import React from 'react'
import { clx } from '../helpers/clx'
import {BsCheck} from 'react-icons/bs'

export default function Checkbox({
      label,
      quantity,
      onclick,
      active,
      classname,
      children
}) {
      const [checked, setChecked]=React.useState(false)
      const classes = clx(
            "flex gap-2 items-center font-medium text-secondary-400",
            classname
      )
      return (
            <div className={classes} onClick={onclick}>
                  <span className={`inline-flex justify-center items-center w-[20px] h-[20px] rounded-md ${active ? 'bg-primary-500' : 'border-secondary-300 border-2'}`} onClick={()=>setChecked(!checked)}>
                        {active && <BsCheck color='white'/>}
                  </span>
                  <span>{label} <span className='text-secondary-300'>({quantity})</span></span>
            </div>
      )
}