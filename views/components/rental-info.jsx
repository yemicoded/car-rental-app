import React from "react";
import Input from "../../components/input";
import RadioButton from "../../components/radio-button";
import Select from "../../components/select";
import { clx } from "../../helpers/clx";

export default function RentalInfo({ classname, children }) {
  const classes = clx(
    "bg-white dark:bg-black rounded-xl p-4 w-full h-fit",
    classname
  );
  return (
    <div className={classes}>
      <RentalInfo.PaymentInfoTopbar
        heading='Rental Info'
        helperText='Please select your rental info'
        step={2}
      />
      <div>
        <div>
          <RadioButton label='Pick - Up' classname='mt-4' />
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-x-6 py-4'>
            <Select
              label='Location'
              placeholder='Select your city'
              options={["option1", "option2", "option3"]}
            />
            <Input
              type='date'
              label='Date'
              placeholder='Select delivery date'
              options={["option1", "option2", "option3"]}
            />
            <Select
              label='Time'
              placeholder='Select timezone'
              options={["option1", "option2", "option3"]}
            />
          </div>
        </div>

        <div>
          <RadioButton label='Drop - Off' classname='mt-4' />
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-x-6 py-4'>
            <Select
              label='Location'
              placeholder='Select your city'
              options={["option1", "option2", "option3"]}
            />
            <Input
              type='date'
              label='Date'
              placeholder='Select delivery date'
              options={["option1", "option2", "option3"]}
            />
            <Select
              label='Time'
              placeholder='Select timezone'
              options={["option1", "option2", "option3"]}
            />
          </div>
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

RentalInfo.PaymentInfoTopbar = PaymentInfoTopbar;
