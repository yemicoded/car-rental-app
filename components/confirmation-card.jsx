import React from "react";
import { BsCheck } from "react-icons/bs";
import Image from "next/image";
import { clx } from "../helpers/clx";
import Button from "./button";

const initialChecks = {
  check1: false,
  check2: false,
  overallCheck: false,
};

const reducer = (initialState = initialChecks, action) => {
  switch (action.type) {
    case "handleCheck1":
      if (initialState.check1 === false) {
        if (initialState.check2 === false) {
          return {
            ...initialState,
            check1: true,
          };
        } else {
          return {
            ...initialState,
            check1: true,
            overallCheck: true,
          };
        }
      } else {
        return {
          ...initialState,
          overallCheck: false,
          check1: false,
        };
      }

    case "handleCheck2":
      if (initialState.check2 === false) {
        if (initialState.check1 === false) {
          return {
            ...initialState,
            check2: true,
          };
        } else {
          return {
            ...initialState,
            check2: true,
            overallCheck: true,
          };
        }
      } else {
        return {
          ...initialState,
          overallCheck: false,
          check2: false,
        };
      }
    default:
      return initialState;
  }
};

export default function ConfirmationCard({ classname, step=4, children }) {
  const [checks, dispatch] = React.useReducer(reducer, initialChecks);
  const classes = clx(" p-4 rounded-lg shadow-lg bg-white dark:bg-black", classname);
  return (
    <div className={classes}>
      <div>
        <div className='flex gap-4 justify-between lg:items-end'>
          <div className='w-fit'>
            <h3 className='font-bold text-lg'>Confirmation</h3>
            <p className='hidden lg:block text-secondary-300 text-sm'>
              We are getting to the end. Just few clicks and your rental is
              ready!
            </p>
          </div>
          <span className='text-secondary-300 text-sm'>Step {step} of 4</span>
        </div>
        <p className='lg:hidden text-secondary-300 w-[80%] text-sm'>
          We are getting to the end. Just few clicks and your rental is ready!
        </p>
      </div>
      <div className='py-6 flex flex-col gap-4'>
        <ConfirmationCard.CheckLabel
          checked={checks.check1}
          onclick={() => dispatch({ type: "handleCheck1" })}
        >
          I agree with sending an Marketing and newsletter emails. No spam,
          promissed!
        </ConfirmationCard.CheckLabel>
        <ConfirmationCard.CheckLabel
          checked={checks.check2}
          onclick={() => dispatch({ type: "handleCheck2" })}
        >
          I agree with our terms and conditions and privacy policy!
        </ConfirmationCard.CheckLabel>
      </div>
      <Button size='medium' disabled={!checks.overallCheck}>
        Rent Now
      </Button>
      <div className='mt-6'>
        <div className='w-[30px] h-[30px]'>
          <Image
            src='/images/verify.png'
            width={100}
            height={100}
            alt='Verify'
            layout='responsive'
            objectFit='contain'
          />
        </div>
        <h3 className='font-semibold text-lg'>All your data are safe</h3>
        <p className='text-secondary-300 text-sm'>
          We are using the most advanced security to provide you the best
          experience ever.
        </p>
      </div>
    </div>
  );
}

export function CheckLabel({ classname, label, children, checked, onclick }) {
  const classes = clx(
    "flex gap-2 items-center font-medium text-secondary-400",
    classname
  );
  return (
    <div className='w-full rounded-lg p-4 bg-secondary-300/10 flex items-center'>
      <div className={classes}>
        <div
          className={`flex justify-center items-center min-w-[20px] h-[20px] rounded-md ${
            checked ? "bg-primary-500" : "border-secondary-300 border-2"
          }`}
          onClick={onclick}
        >
          {checked && <BsCheck color='white' />}
        </div>
        <span className='text-sm'>{children}</span>
      </div>
    </div>
  );
}

ConfirmationCard.CheckLabel = CheckLabel;
