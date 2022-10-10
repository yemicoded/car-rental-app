import React from "react";
import { clx } from "../helpers/clx";

export default function Button({
  variant = "contained",
  size = "small",
  iconRight,
  iconLeft,
  onclick,
  disabled,
  category = "primary",
  fullWidth,
  classname,
  children,
}) {
  const classes = clx(
    " w-fit flex items-center justify-center rounded-md select-none",
    fullWidth && "w-full",
    iconLeft && "flex items-center justify-center space-x-2",
    iconRight && "flex items-center justify-center space-x-2",
    size === "small" && "text-sm py-2 px-4",
    size === "medium" && "text-md py-2 px-4",
    size === "large" && "text-lg py-3 px-6",
    variant === "contained" &&
      category === "primary" &&
      !disabled &&
      "cursor-pointer rounded-small bg-primary-500 dark:bg-secondary-100 dark:hover:bg-secondary-300 text-white dark:text-secondary-500 font-semibold duration-500  hover:bg-primary-600 focus:bg-primary-500 active:bg-primary-700",
    variant === "contained" &&
      category === "primary" &&
      disabled &&
      "cursor-not-allowed rounded-small bg-primary-500/50 dark:bg-secondary-100 dark:hover:bg-none dark:bg-secondary-200/30 text-white dark:text-secondary-500 font-semibold",
    variant === "outlined" &&
      category === "primary" &&
      !disabled &&
      "cursor-pointer rounded-small border-2 border-primary-200 dark:text-secondary-200 text-primary-400 font-semibold duration-500 hover:border-primary-500 hover:text-primary-500 focus:border-primary-500 focus:text-primary-500 active:bg-primary-500 active:border-primary-600 active:text-white",
    variant === "outlined" &&
      category === "primary" &&
      disabled &&
      "cursor-not-allowed rounded-small border-2 border-primary-200/50 dark:text-secondary-200 text-primary-400/50 font-semibold",
    variant === "outlined" &&
      category === "secondary" &&
      !disabled &&
      "cursor-pointer rounded-small border-2 border-secondary-200 dark:text-secondary-200 text-secondary-400 font-semibold duration-500 hover:border-secondary-400 hover:text-secondary-500 focus:border-secondary-400 focus:text-secondary-500 active:bg-secondary-100 active:border-secondary-200",
    variant === "outlined" &&
      category === "secondary" &&
      disabled &&
      "cursor-not-allowed rounded-small border-2 border-secondary-200/50 dark:text-secondary-200 text-secondary-400/50 font-semibold",
    variant === "text" &&
      category === "secondary" &&
      !disabled &&
      "cursor-pointer rounded-small text-secondary-400/70 font-semibold duration-500 hover:bg-white hover:text-secondary-500 focus:border-2 focus:text-secondary-500 active:bg-secondary-100 active:border-secondary-200",
    variant === "text" &&
      category === "secondary" &&
      disabled &&
      "cursor-not-allowed rounded-small text-secondary-400/70 font-semibold",
    classname
  );
  const buttonClick = () => {
    if (disabled) return null;
    // onclick && console.log('Button Clicked')
    onclick && onclick();
  };
  return (
    <div className={classes} onClick={onclick}>
      {iconLeft}
      <p>{children}</p>
      {iconRight}
    </div>
  );
}

export function IconButton({
  variant = "contained",
  size = "small",
  icon,
  withNotification,
  onclick,
  rounded,
  disabled,
  category = "primary",
  img,
  classname,
  children,
}) {
  const classes = clx(
    " w-fit flex justify-center rounded-md items-center",
    withNotification && 'relative',
    size === "small" && "text-sm py-2 px-2",
    size === "medium" && "text-md py-2 px-2",
    size === "large" && "text-lg py-4 px-4",
    rounded && size === "small" && "w-6 h-6 text-sm py-2 px-2 rounded-full",
    rounded && size === "medium" && "w-8 h-8 text-md py-2 px-2 rounded-full",
    rounded && size === "large" && "w-10 h-10 text-lg py-2 px-2 rounded-full",
    variant === "contained" &&
      category === "primary" &&
      !disabled &&
      "cursor-pointer rounded-small bg-primary-500 text-white font-semibold duration-500  hover:bg-primary-600 focus:bg-primary-500 active:bg-primary-700",
    variant === "contained" &&
      category === "primary" &&
      disabled &&
      "cursor-not-allowed rounded-small bg-primary-500/50 text-white font-semibold",
    variant === "outlined" &&
      category === "primary" &&
      !disabled &&
      "cursor-pointer rounded-small border-2 border-primary-200 text-primary-400 dark:text-secondary-200 font-semibold duration-500 hover:border-primary-500 hover:text-primary-500 focus:border-primary-500 focus:text-primary-500 active:bg-primary-500 active:border-primary-600 active:text-white",
    variant === "outlined" &&
      category === "primary" &&
      disabled &&
      "cursor-not-allowed rounded-small border-2 border-primary-200/50 text-primary-400/50 dark:text-secondary-200 font-semibold",
    variant === "outlined" &&
      category === "secondary" &&
      !disabled &&
      "cursor-pointer rounded-small border-2 border-secondary-100 text-secondary-300 dark:text-secondary-200 font-semibold duration-500 hover:border-secondary-400 hover:text-secondary-500 focus:border-secondary-400 focus:text-secondary-500 active:bg-secondary-100 active:border-secondary-200",
    variant === "outlined" &&
      category === "secondary" &&
      disabled &&
      "cursor-not-allowed rounded-small border-2 border-secondary-200/50 text-secondary-400/50 dark:text-secondary-200 font-semibold",
    variant === "text" &&
      category === "secondary" &&
      !disabled &&
      "cursor-pointer rounded-small text-secondary-400/70 font-semibold duration-500 hover:bg-white hover:text-secondary-500 focus:border-2 focus:text-secondary-500 active:bg-secondary-100 active:border-secondary-200",
    variant === "text" &&
      category === "secondary" &&
      disabled &&
      "cursor-not-allowed rounded-small text-secondary-400/70 font-semibold",
    classname
  );
  const buttonClick = () => {
    if (disabled) return null;
    // onclick && console.log('Button Clicked')
    onclick && onclick();
  };
  return (
    <div className={classes} onClick={buttonClick}>
      {icon}
      {withNotification && <span className="w-[10px] h-[10px] rounded-full bg-red-500 absolute top-0 right-0" />}
      {children}
    </div>
  );
}
