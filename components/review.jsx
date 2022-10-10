import React from "react";
import Image from "next/image";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { clx } from "../helpers/clx";

export default function Review({ classname, children }) {
  const classes = clx("flex gap-3", classname);
  return (
    <div className={classes}>
      <div className='min-w-[50px] h-[50px] rounded-full overflow-hidden'>
        <Image
          src='/images/profile-pic.png'
          width={100}
          height={100}
          alt='profile-pic'
          layout='responsive'
          objectFit='cover'
        />
      </div>
      <div>
        <div className='flex justify-between items-center'>
          <div>
            <h3 className='text-lg font-semibold'>Alex Stanton</h3>
            <p className='text-sm text-secondary-300'>CEO at Bukalapak</p>
          </div>
          <div>
            <p className='text-sm text-secondary-300 text-right'>21 July 2022</p>
            <div className="flex gap-2 py-2">
              <IoIosStar className='text-gold' />
              <IoIosStar className='text-gold' />
              <IoIosStar className='text-gold' />
              <IoIosStar className='text-gold' />
              <IoIosStarOutline className='text-gold' />
            </div>
          </div>
        </div>
        <p className='text-sm py-4 text-secondary-300'>
          We are very happy with the service from the MORENT App. Morent has a
          low price and also a large variety of cars with good and comfortable
          facilities. In addition, the service provided by the officers is also
          very friendly and very polite.
        </p>
      </div>
    </div>
  );
}
