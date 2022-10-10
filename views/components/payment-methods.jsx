import React from "react";
import Image from "next/image";
import RadioButton from "../../components/radio-button";
import { clx } from "../../helpers/clx";
import Input from "../../components/input";

export default function PaymentMethods({ classname, children }) {
  const classes = clx(
    "bg-white dark:bg-black rounded-xl p-4 w-full h-fit flex flex-col gap-4",
    classname
  );
  return (
    <div className={classes}>
      <PaymentMethods.PaymentInfoTopbar
        heading='Payment Method'
        helperText='Please select a payment method'
        step={3}
      />
      <div className='bg-secondary-300/10 w-full h-fit rounded-xl p-4'>
        <div className='flex items-center justify-between'>
          <RadioButton label='Credit Card' />
          <div className='w-[90px] h-[30px] relative'>
            <Image
              src='/images/mastercard-logo.png'
              alt='payment-logo'
              layout='fill'
              objectFit='contain'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-x-6 py-4'>
          <Input
            type='text'
            label='Card Number'
            placeholder='Card number'
            bgWhite
          />
          <Input type='date' label='Expiration Date' bgWhite />
          <Input
            type='text'
            label='Card Holder'
            placeholder='Card holder'
            bgWhite
          />
          <Input
            type='text'
            label='CVV'
            placeholder='CVV'
            bgWhite
          />
        </div>
      </div>
    </div>
  );
}

export function PaymentInfoTopbar({
  classname,
  heading,
  helperText,
  step,
  children,
}) {
  const classes = clx("flex justify-between items-end", classname);
  return (
    <div className={classes}>
      <div>
        <h3 className='text-secondary-500 dark:text-secondary-200 font-bold text-lg'>{heading}</h3>
        <p className='text-sm text-secondary-300'>{helperText}</p>
      </div>
      <span className='text-secondary-300 text-sm'>Step {step} of 4</span>
    </div>
  );
}

PaymentMethods.PaymentInfoTopbar = PaymentInfoTopbar;
