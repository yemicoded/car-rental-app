import React from "react";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { clx } from "../helpers/clx";
import Image from "next/image";
import bufferString from "../helpers/bufferString";

export default function SummaryCard({ car, classname, children }) {
  const getImage = (buffer) => {
    return `/upload/${bufferString(buffer)}`;
  };

  const getPrice = (price) => {
    return parseInt(price?.substring(0, price.indexOf(".")));
  };

  const getTotalPrice = (tax, price) => {
    return tax + getPrice(car?.new_price);
  };

  const [tax, setTax] = React.useState();

  React.useEffect(() => {
    setTax(10 * getPrice(car?.new_price)/100);
  }, [car?.new_price])

  const classes = clx(
    "lg:w-[400px] h-fit bg-white dark:bg-black shadow-lg rounded-lg p-4",
    classname
  );
  return (
    <div className={classes}>
      <SummaryCard.TextWrapper heading='Rental Summary'>
        Prices may change depending on the length of the rental and the price of
        your rental car.
      </SummaryCard.TextWrapper>
      <div className='py-6 flex gap-3 items-center border-b-2'>
        <div className='w-[100px] relative h-[80px] rounded-lg bg-primary-500 before:[content=""] before:absolute before:w-full before:h-full before:top-0 before:bg-url("/images/car.png") before:bg-cover flex items-center justify-center'>
          <Image
            src={getImage(car?.product_images[0])}
            width={300}
            height={100}
            alt='summary-image'
            // layout='responsive'
            objectFit='contain'
          />
        </div>
        <div>
          <h1 className='text-2xl font-bold'>{car?.name}</h1>
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
      </div>
      <div className='py-4'>
        <p className='flex justify-between items-center py-1'>
          <span className='text-secondary-400'>Subtotal</span>
          <span className='font-bold text-md'>${getPrice(car?.new_price)}.00</span>
        </p>
        <p className='flex justify-between items-center py-1'>
          <span className='text-secondary-400'>Tax</span>
          <span className='font-bold text-md'>${tax}</span>
        </p>
      </div>
      <div className='my-2 py-2 px-4 bg-secondary-300/20 rounded-lg flex justify-between items-center'>
        <input
          type='text'
          name='coupon'
          id='coupon'
          placeholder='Apply promo coupon'
          className='bg-transparent text-sm lg:text-md p-2 outline-none w-fit text-secondary-300'
        />
        <span className='font-semibold text-sm lg:text-md select-none h-full'>
          Apply now
        </span>
      </div>
      <div className='flex justify-between items-center py-4'>
        <div>
          <h3 className='font-bold text-lg'>Total Rental Price</h3>
          <p className='text-sm text-secondary-400'>
            Overall price and includes rental discount
          </p>
        </div>
        <span className='font-bold text-xl'>
          ${getTotalPrice(tax, car?.new_price)}
        </span>
      </div>
    </div>
  );
}

export function TextWrapper({ heading, classname, children }) {
  const classes = clx("", classname);
  return (
    <div className={classes}>
      <h1 className='font-bold text-lg'>{heading}</h1>
      <p className='text-secondary-300 text-sm'>{children}</p>
    </div>
  );
}

SummaryCard.TextWrapper = TextWrapper;
