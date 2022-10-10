import { useRouter } from "next/router";
import React from "react";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import { clx } from "../helpers/clx";
import Button from "./button";

export default function DetailsCard({ classname, carData, children }) {

  const router = useRouter()

  const classes = clx(
    "bg-white dark:bg-black rounded-xl w-[100%] min-h-[100%] max-h-[100%] p-4 lg:flex flex-col",
    classname
  );
  return (
    <div className={classes}>
      <div className='flex justify-between items-start'>
        <div>
          <h1 className='text-2xl font-bold'>{carData?.name}</h1>
          <div className='text-secondary-300 text-sm flex flex-col lg:flex-row lg:items-center lg:gap-2'>
            <span className='inline-flex gap-2 py-2'>
              <IoIosStar className='text-gold' />
              <IoIosStar className='text-gold' />
              <IoIosStar className='text-gold' />
              <IoIosStar className='text-gold' />
              <IoIosStarOutline className='text-gold' />
            </span>
            <span>440+ Reviewers</span>
          </div>
        </div>
        <MdFavorite className='scale-[1.5] text-red-500 inline-block' />
      </div>

      <div className='flex-1'>
        <p className='py-6 text-secondary-400 dark:text-secondary-300 leading-loose'>
          {carData?.description}
        </p>

        <div className='grid grid-cols-2 gap-x-10 lg:gap-x-20 gap-y-4 mb-6'>
          <div className='flex justify-between '>
            <span className='text-secondary-300'>Type</span>
            <span className='text-secondary-400 font-medium'>
              {carData?.category}
            </span>
          </div>
          <div className='flex justify-between '>
            <span className='text-secondary-300'>Capacity</span>
            <span className='text-secondary-400 font-medium'>
              {carData?.capacity} Person
            </span>
          </div>
          <div className='flex justify-between '>
            <span className='text-secondary-300'>Steering</span>
            <span className='text-secondary-400 font-medium'>
              {carData?.steering}
            </span>
          </div>
          <div className='flex justify-between '>
            <span className='text-secondary-300'>Gasoline</span>
            <span className='text-secondary-400 font-medium'>
              {carData?.gasoline}L
            </span>
          </div>
        </div>
      </div>

      <div className=' mt-4 flex justify-between items-center'>
        <div className='font-semibold text-lg'>
          <h1 className='text-2xl font-bold'>
            {carData?.new_price}/
            <span className='text-base text-secondary-300 font-medium'>
              day
            </span>
          </h1>
          <span className='text-base text-secondary-300 font-medium line-through'>
            {carData?.old_price}
          </span>
        </div>
        <Button size='medium' onclick={()=>router.push(`/payment?selectedCar=${carData._id}`)}>Rent Now</Button>
      </div>
    </div>
  );
}
