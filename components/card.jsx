import React from "react";
import { clx } from "../helpers/clx";
import Image from "next/image";
import { useRouter } from "next/router";
import Label from "./label";
import { GiFuelTank } from "react-icons/gi";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import Button from "./button";
import bufferString from "../helpers/bufferString";

export default function Card({
  classname,
  car,
  brand,
  onclick,
  data,
  constant,
  category,
  children,
}) {
  const router = useRouter();


  const [prod_img] = React.useState(bufferString(car?.product_images[0]));
  const [liked, setLiked] = React.useState(false);

  const classes = clx(
    "max-w-full lg:min-w-[250px] lg:h-fit rounded-lg bg-white dark:bg-black shadow-lg p-4",
    constant && "min-w-[250px]",
    classname
  );
  return (
    <div className={classes} onClick={() => {}}>
      <div className='flex justify-between items-center'>
        <h1 className='font-semibold text-lg'>{car?.name}</h1>
        {liked ? (
          <MdFavorite size={25} color='red' onClick={() => setLiked(!liked)} />
        ) : (
          <MdFavoriteBorder
            size={25}
            color='gray'
            onClick={() => setLiked(!liked)}
          />
        )}
      </div>
      <p className='text-secondary-300 text-sm font-medium'>{car?.category}</p>
      <div className={`gap-3 ${constant ? "flex-col" : "lg:flex-col flex"}`}>
        <div
          className={`${
            !constant && "hidden"
          } lg:block w-full h-[90px] my-4 after:[content=""] relative after:absolute after:w-full after:h-[70%] after:bg-gradient-to-b after:from-transparent after:to-white/90 dark:after:to-transparent after:bottom-0`}
        >
          <Image
            src={`/upload/${prod_img}`}
            alt='car'
            layout='fill'
            quality={100}
            objectFit='contain'
          />
        </div>
        {/* Mobile */}
        {!constant && (
          <div className='lg:hidden flex-1 w-full h-[90px] my-4 after:[content=""] relative after:absolute after:w-full after:h-[35px] after:bg-white/20 dark:after:bg-transparent after:bottom-0'>
            <Image
              src={`/upload/${prod_img}`}
              alt='car'
              layout='fill'
              objectFit='contain'
            />
          </div>
        )}
        <div
          className={`flex ${
            constant ? "flex-row" : "flex-col lg:flex-row"
          } justify-between`}
        >
          <Label src='/images/tank.svg'>{car?.gasoline}L</Label>
          <Label src='/images/manual.svg'>{car?.steering}</Label>
          <Label src='/images/people.svg'>{car?.capacity} People</Label>
        </div>
      </div>
      <div className=' mt-4 flex justify-between items-center'>
        <div className='font-semibold text-lg'>
          <h1>
            ${car?.new_price}/
            <span className='text-base text-secondary-300 font-medium'>
              day
            </span>
          </h1>
          <span className='text-base text-secondary-300 font-medium line-through'>
            ${car?.old_price}
          </span>
        </div>
        <Button onclick={() => router.push(`/products/${car?._id}`)}>Rent Now</Button>
      </div>
    </div>
  );
}
