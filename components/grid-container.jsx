import React from 'react'
import { clx } from '../helpers/clx'

export default function GridContainer({
      colCount,
      classname,
      children
}) {
      const classes = clx(
            "grid grid-cols-1 w-full place-content-between items-stretch",
            colCount && colCount > 0 && `lg:grid-cols-${colCount}`,
            classname
      )
      return (
            <div className={classes}>{children}</div>
      )
}