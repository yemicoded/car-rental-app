import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { clx } from "../helpers/clx";

export default function Input({
  classname,
  placeholder,
  type,
  bgWhite,
  name,
  label,
  children,
}) {
  const [selectedDate, setDate] = React.useState();
  const classes = clx("", classname);
  switch (type) {
    case "text":
      return (
        <div className={classes}>
          <label htmlFor={name} className='font-semibold block py-2'>
            {label}
          </label>
          <input
            type='text'
            name={name}
            id={name}
            placeholder={placeholder}
            className={`px-4 py-3 dark:text-secondary-400 dark:font-medium ${
              bgWhite ? "bg-white dark:bg-secondary-100" : "bg-secondary-300/10"
            } rounded-lg w-full outline-none`}
          />
        </div>
      );
    case "date":
      return (
        <div className={classes}>
          <label htmlFor={name} className='font-semibold block py-2'>
            {label}
          </label>
          <DatePicker
            selected={selectedDate}
            placeholderText='dd-MM-yyyy'
            dateFormat='dd-MM-yyyy'
            onChange={(Date) => setDate(Date)}
            className={`px-4 py-3 dark:text-secondary-400 dark:font-medium ${
              bgWhite ? "bg-white dark:bg-secondary-100" : "bg-secondary-300/10"
            } rounded-lg w-full outline-none`}
          />
        </div>
      );
  }
}
