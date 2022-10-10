import React from "react";
import { useTheme } from "next-themes";
import Button, { IconButton } from "./button";
import Search from "./search";
import { clx } from "../helpers/clx";
import {
  MdFavorite,
  MdDarkMode,
  MdLightMode,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { BsBellFill } from "react-icons/bs";
import { IoLogIn, IoLogoLinkedin, IoSettingsSharp } from "react-icons/io5";
import { BiSortAlt2 } from "react-icons/bi";
import { SiGmail } from "react-icons/si";
import { RiWhatsappFill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { CgMenuLeft } from "react-icons/cg";
import { FaFacebookSquare } from "react-icons/fa";
import ProfileImage from "./profile-image";
import LinkButton from "./link-button";
import MobileNav from "../views/components/mobile-nav";
import FilterNav from "../views/components/filter-nav";
import NotificationNav from "../views/components/notification-nav";
import Link from "next/link";
import navbarLinks from "../constants/navbar-links";

export default function Header({ classname, children }) {
  const [isNavOpen, setNavOpen] = React.useState(false);
  const [isFilterOpen, setFilterOpen] = React.useState(false);
  const [isNotificationOpen, setNotificationOpen] = React.useState(false);

  const { systemTheme, theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const currentTheme = systemTheme === theme ? systemTheme : theme;
    if (currentTheme === "light") {
      return setTheme("dark");
    }
    return setTheme("light");
  };

  const classes = clx(
    "bg-white dark:bg-black px-3 lg:px-0 py-6 lg:py-8 lg:flex items-center relative",
    classname
  );
  return (
    <div className={classes}>
      <div className='w-full lg:w-[90%] mx-auto flex justify-between'>
        <div className='lg:flex gap-6 flex-1'>
          <h2 className='leading-wide font-bold text-3xl text-primary-500'>
            MORENT
          </h2>
          <Search classname='flex-1 hidden lg:flex' />
        </div>
        <div className='hidden lg:flex px-4 w-full items-center justify-center gap-4'>
          {navbarLinks.map((link) => (
            <Link key={link.id} href={link.route}>
              <div className="flex items-center gap-1 mx-4 hover:cursor-pointer">
                {link.icon}
                <a className='font-medium mx-6'>{link.label}</a>
              </div>
            </Link>
          ))}
          {/* <h3 className='font-semibold text-lg text-secondary-400 px-4'>ToS</h3> */}
        </div>
        <div className='hidden lg:flex gap-4 flex-1 justify-end'>
          <IconButton
            icon={theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
            size='large'
            category='primary'
            variant='contained'
            classname='bg-info-500 hover:bg-none active:bg-none select-none'
            onclick={toggleTheme}
            rounded
          />
          <IconButton
            icon={<MdFavorite />}
            size='large'
            category='secondary'
            variant='outlined'
            rounded
          />
          <IconButton
            icon={<BsBellFill />}
            size='large'
            category='secondary'
            variant='outlined'
            onclick={() => setNotificationOpen(true)}
            rounded
            withNotification
          />
          <IconButton
            icon={<IoSettingsSharp />}
            size='large'
            category='secondary'
            variant='outlined'
            rounded
          />
          <ProfileImage />
        </div>
        {/* Mobile Notificatio  & Profile Image */}
        <div className='lg:hidden flex gap-4 items-center'>
          <IconButton
            icon={<IoMdNotifications />}
            size='large'
            category='primary'
            variant='contained'
            onclick={() => setNotificationOpen(true)}
            rounded
            withNotification
          />
          <ProfileImage />
        </div>
      </div>
      {/* Mobile Search Bar */}
      <div className='flex gap-4 py-6 justify-between lg:hidden'>
        <Search classname='flex-1 w-full' />
        <IconButton
          icon={<IoSettingsSharp />}
          size='medium'
          category='secondary'
          variant='outlined'
          classname='rounded-xl px-3 text-lg'
        />
      </div>

      <div className='lg:hidden flex gap-4 justify-center'>
        <IconButton
          icon={<CgMenuLeft />}
          size='large'
          category='primary'
          variant='contained'
          onclick={() => setNavOpen(true)}
          rounded
        />
        <IconButton
          icon={theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
          size='large'
          category='primary'
          variant='contained'
          classname='bg-info-500 hover:bg-none active:bg-none select-none'
          onclick={toggleTheme}
          rounded
        />
        <IconButton
          icon={<BiSortAlt2 />}
          size='large'
          category='primary'
          variant='contained'
          onclick={() => setFilterOpen(true)}
          rounded
        />
      </div>

      {/* Mobile menu */}
      <MobileNav isOpen={isNavOpen} setOpen={setNavOpen} />
      {/* Mobile filter*/}
      <FilterNav isOpen={isFilterOpen} setOpen={setFilterOpen} />
      {/* Mobile Notification */}
      <NotificationNav
        isOpen={isNotificationOpen}
        setOpen={setNotificationOpen}
      />
    </div>
  );
}
