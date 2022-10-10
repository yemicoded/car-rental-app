import React from "react";
import Input from "../../components/input";
import { clx } from "../../helpers/clx";

export default function BillingInfo({ classname, children }) {
  const classes = clx(
    "bg-white dark:bg-black rounded-xl p-4 w-full h-fit",
    classname
  );
  return (
    <div className={classes}>
      <BillingInfo.PaymentInfoTopbar
        heading='Billing Info'
        helperText='Please enter your billing info'
        step={1}
      />
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-x-6 py-4'>
        <Input label='Name' type='text' placeholder='Enter your name' />
        <Input label='Phone Number' type='text' placeholder='Enter your number' />
        <Input label='Address' type='text' placeholder='Enter your address' />
        <Input label='Town/City' type='text' placeholder='Enter your town/city' />
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

BillingInfo.PaymentInfoTopbar = PaymentInfoTopbar;

