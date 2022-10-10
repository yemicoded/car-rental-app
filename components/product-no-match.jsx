import React from 'react'
import { clx } from '../helpers/clx'

export default function ProductNoMatch({
      classname,
      children
}) {
      const classes = clx(
            "text-center border-dashed border-2 p-4 rounded-xl border-primary-500",
            classname
      )
      return (
            <div className={classes}>
                  <h3 className='text-4xl font-semibold text-primary-500'>OOPS!</h3>
                  <p className='font-medium text-md text-error-500'>Sorry no vehicle match your filtered result</p>
            </div>
      )
}