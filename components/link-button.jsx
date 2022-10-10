import React from 'react'
import { clx } from '../helpers/clx'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LinkButton({
      icon,
      active,
      label,
      href,
      fullWidth,
      onclick,
      classname,
      children
}) {
      const classes = clx(
            'text-secondary-300 font-semibold hover:bg-secondary-200 dark:hover:bg-secondary-300 dark:hover:text-secondary-400 cursor-pointer select-none duration-500 flex space-x-4 items-center w-fit px-6 py-2 rounded-xl',
            fullWidth && "w-full",
            active && "bg-secondary-100/30 dark:bg-secondary-200 text-secondary-600 font-semibold",
            classname
      )
      return (
            <Link href={href? href:""}>
                  <a className={classes} onClick={onclick}>
                  {icon}
                  <p>{label}</p>
                  </a>
            </Link>
      )
}