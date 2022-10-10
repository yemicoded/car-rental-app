import React from 'react'
import { clx } from '../../helpers/clx'

export default function CardsTopBar({
      noLink,
      heading,
      classname,
      children
}) {
      const classes = clx(
        "flex justify-between items-center py-4",
        classname
      );
      return (
        <div className={classes}>
          <span className='text-secondary-400 font-semibold text-lg'>
            {heading}
          </span>
          {!noLink && (
            <span className='text-primary-500 font-medium'>view all</span>
          )}
        </div>
      );
}