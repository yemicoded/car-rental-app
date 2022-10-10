import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { IoLogIn, IoLogoLinkedin } from 'react-icons/io5';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { RiWhatsappFill } from 'react-icons/ri';
import { SiGmail } from 'react-icons/si';
import Button from '../../components/button';
import LinkButton from '../../components/link-button';
import navbarLinks from '../../constants/navbar-links';
import { clx } from '../../helpers/clx'

export default function MobileNav({
      classname,
      isOpen,
      setOpen,
      children
}) {

  const router=useRouter()

      const classes = clx(
        "lg:hidden fixed bg-secondary-200/20 h-screen z-20 duration-300",
        isOpen ? "block top-0 right-0 left-0" : "top-0 left-[-100%]",
        classname
      );
      return (
        <div className={classes} onClick={() => setOpen(false)}>
          <div className='w-[70%] md:w-[40%] bg-white dark:bg-black h-screen p-4 relative'>
            {/* Menu close Arrow */}
            <span
              className='absolute right-[-12px] top-[30%] hover:cursor-pointer translate-y-[-30%] ring-2 ring-primary-500 ring-offset-2 w-6 h-6 bg-info-500 rounded-full flex justify-center items-center text-white'
              onClick={() => setOpen(false)}
            >
              <MdOutlineKeyboardArrowLeft className='text-3xl' />
            </span>
            <div className='flex flex-col justify-between h-[90vh]'>
              <div>
                <h2 className='leading-wide font-bold text-3xl text-primary-500'>
                  MORENT
                </h2>
                <div className='py-8 flex flex-col gap-4'>
                  {navbarLinks.map((link, index) => (
                    <LinkButton
                      key={link.id}
                      href={link.route}
                      label={link.label}
                      icon = {link.icon}
                      active={link.route === router.pathname}
                      fullWidth
                    />
                  ))}
                  {/* <LinkButton label='Home' fullWidth /> */}
                </div>

                <div>
                  <h3 className='font-semibold text-primary-500 text-lg'>
                    Socials
                  </h3>
                  <div
                    className='grid grid-cols-3 items-end py-2'
                    target='_blank'
                  >
                    <Link href='https://www.linkedin.com/in/sodiq-oloko-684248226'>
                      <IoLogoLinkedin className='text-4xl text-primary-700' />
                    </Link>
                    <Link href='https://olokoopeyemi06@gmail.com' target='_blank'>
                      <SiGmail className='text-3xl text-red-500' />
                    </Link>
                    {/* <FaFacebookSquare className='text-4xl text-primary-900' /> */}
                    <Link href='https://wa.link/2dkq1m' target='_blank'>
                      <a>
                        <RiWhatsappFill className='text-4xl text-success-600' />
                      </a>
                    </Link>
                  </div>
                  <h5 className='font-medium text-secondary-300 py-2'>
                    <span className='font-semibold pr-2 text-secondary-500 dark:text-secondary-200'>
                      Mobile:
                    </span>
                    +2349034015397
                  </h5>
                  <div className='py-4 flex border-2 border-dashed rounded-xl flex-col items-center gap-2'>
                    <h3 className='font-semibold text-primary-500 text-lg'>
                      Need Help ?
                    </h3>
                    <Button>Contact Support</Button>
                  </div>
                </div>
              </div>
              <div className='flex gap-2 items-center'>
                <IoLogIn className='text-xl text-primary-500' />
                <span className='font-medium text-lg'>Login</span>
              </div>
            </div>
          </div>
        </div>
      );
}