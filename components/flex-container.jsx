import React from 'react'
import { clx } from '../helpers/clx'

export default function FlexContainer({
      classname,
      direction,
      children
}) {
      const classes = clx(
            "flex",
            direction === 'col' && 'flex-col',
            direction==='row' && 'flex-row',
            classname,
      )
      return (
            <div className={classes}>{children}</div>
      )
}