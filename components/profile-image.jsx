import React from "react";
import Image from "next/image";
import { clx } from "../helpers/clx";

export default function ProfileImage({ classname, children }) {
  const classes = clx(
    "w-10 h-10 rounded-full border-2 border-secondry-300/20",
    classname
  );
  return (
    <div className={classes}>
      <Image
        src='/images/profile-pic.png'
        width='300'
        height='300'
        layout='responsive'
        objectFit='cover'
        alt='Profile-Image'
      />
    </div>
  );
}
