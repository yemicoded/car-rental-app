import Link from 'next/link';
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
            <Link href='/products'>
              <span className='text-primary-500 font-medium hover:cursor-pointer'>view all</span>
            </Link>
          )}
        </div>
      );
}