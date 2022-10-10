import React from "react";
import Image from "next/image";
import { clx } from "../helpers/clx";
import Button from "./button";

export default function CarouselCard({ classname, src, detailsCard, heading, bgLight, noBtn, children }) {
  const classes = clx(
    "h-fit bg-primary-500 rounded-xl p-4 text-white",
    bgLight && "bg-info-500",
    classname
  );
  return (
    <div className={classes}>
      <h3
        className={`text-xl lg:text-3xl font-semibold lg:leading-snug lg:tracking-wider ${
          detailsCard ? "w-[80%] lg:w-[90%]" : "w-[70%] lg:w-[60%]"
        }`}
      >
        {heading}
      </h3>
      <p className='my-4 w-[80%] lg:w-[70%] xl:w-[60%]'>{children}</p>
      <div className='flex flex-col lg:flex-row gap-4'>
        {!noBtn && (
          <div>
            <Button
              size='medium'
              classname={`${!bgLight && "bg-info-500"} px-8`}
            >
              Rent Car
            </Button>
          </div>
        )}
        <div className={`flex-1 h-[100px] ${detailsCard && 'py-6 h-[120px]'}`}>
          <Image
            src={src}
            width={300}
            height={70}
            alt='carousel-image'
            layout='responsive'
            objectFit='contain'
          />
        </div>
      </div>
    </div>
  );
}
