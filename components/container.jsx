import React from 'react'
import { clx } from '../helpers/clx'

export default function Container({
      classname,
      children
}) {
      const classes = clx(
            "w-full",
            classname
      )
      return (
            <div className={classes}>{children}</div>
      )
}