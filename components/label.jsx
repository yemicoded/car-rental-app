import React from "react";
import { clx } from "../helpers/clx";
import Image from "next/image";
import { SiBookstack } from "react-icons/si";
import { AiFillStar } from "react-icons/ai";

export default function Label({ label, src, iconLeft, iconRight, classname, children }) {
  const classes = clx(
    "flex items-center space-x-2 text-secondary-300",
    classname
  );
  return (
    <div className={classes}>
      <Image src={src} width={15} height={15} alt='' />
      {iconLeft}
      <p className='text-sm dark:text-white'>{children}</p>
      {iconRight}
    </div>
  );
}
