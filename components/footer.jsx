import React from "react";
import { clx } from "../helpers/clx";

export default function Footer({ classname, children }) {
  const classes = clx("bg-white dark:bg-black px-3 lg:px-0 h-fit shadow-md py-6", classname);
  return (
    <div className={classes}>
      <div className='lg:w-[90%] mx-auto flex flex-col lg:flex-row gap-6 lg:gap-0'>
        <div className='flex-1 w-full'>
          <h2 className='leading-wide font-bold text-3xl text-primary-500'>
            MORENT
          </h2>
          <p className='text-secondary-400 w-[80%] lg:w-[60%] py-2'>
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div className='flex-1 grid grid-cols-2 md:grid-cols-3 gap-0 lg:justify-end'>
          <div>
            <h3 className='font-semibold text-secondary-500 dark:text-secondary-200 text-lg'>
              About
            </h3>
            <div className='flex flex-col gap-4 py-4'>
              <span className='inline-block text-secondary-400'>
                How it works
              </span>
              <span className='inline-block text-secondary-400'>Featured</span>
              <span className='inline-block text-secondary-400'>
                Partnership
              </span>
              <span className='inline-block text-secondary-400'>
                Business Relation
              </span>
            </div>
          </div>
          <div>
            <h3 className='font-semibold text-secondary-500 dark:text-secondary-200 text-lg'>
              Community
            </h3>
            <div className='flex flex-col gap-4 py-4'>
              <span className='inline-block text-secondary-400'>Events</span>
              <span className='inline-block text-secondary-400'>Blogs</span>
              <span className='inline-block text-secondary-400'>Podcast</span>
              <span className='inline-block text-secondary-400'>
                Invite a friend
              </span>
            </div>
          </div>
          <div>
            <h3 className='font-semibold text-secondary-500 dark:text-secondary-200 text-lg'>
              Socials
            </h3>
            <div className='flex flex-col gap-4 py-4'>
              <span className='inline-block text-secondary-400'>Discord</span>
              <span className='inline-block text-secondary-400'>Instagram</span>
              <span className='inline-block text-secondary-400'>Twitter</span>
              <span className='inline-block text-secondary-400'>Facebook</span>
            </div>
          </div>
        </div>
      </div>

      <div className='lg:w-[90%] mx-auto border-t-2 py-4 mt-6 lg:flex items-ccenter justify-between'>
        <span className='hidden lg:block font-semibold text-secondary-500 dark:text-secondary-200'>
          ©2022 MORENT. All rights reserved
        </span>
        <div className='flex gap-4 justify-between lg:justify-end font-semibold text-secondary-500 dark:text-secondary-200'>
          <span>Privacy & Policy</span>
          <span>Terms & Condition</span>
        </div>
        <span className='lg:hidden inline-block mt-6 font-semibold text-secondary-500 dark:text-secondary-200'>
          ©2022 MORENT. All rights reserved
        </span>
      </div>
    </div>
  );
}
