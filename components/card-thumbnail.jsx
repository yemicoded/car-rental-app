import React from "react";
import Image from "next/image";
import { clx } from "../helpers/clx";

export default function CardThumbnail({ classname, active, index, src, onclick, children }) {
  const classes = clx(
    "w-full h-full p-1 rounded-xl flex items-center justify-center",
    active && "border-2 border-primary-500",
    classname
  );
  return (
    <div className={classes}>
      <div className='rounded-xl h-[80px] bg-primary-500 dark:bg-secondary-100 lg:h-[120px] w-[100%] overflow-hidden relative flex items-center justify-center' onClick={onclick}>
        <Image
          src={src}
          layout='fill'
          objectFit={`${index === 1 ? 'contain' : 'fill'}`}
          quality={100}
          objectPosition='center center'
          alt='thumbnail'
        />
      </div>
    </div>
  );
}
