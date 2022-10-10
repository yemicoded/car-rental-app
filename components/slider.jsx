import React from "react";
import { clx } from "../helpers/clx";

export default function Slider({ ref, price, setPrice, classname, children }) {
  const [label, setLabel] = React.useState();
  const priceRef = React.useRef();
  const onValueChange = () => {
    const currentValue = priceRef.current.value;
    setPrice(currentValue);
  };

  React.useEffect(() => {
    setLabel(priceRef.current.value);
  }, [priceRef.current?.value, setPrice, label]);

  const classes = clx("w-full", classname);
  return (
    <div className={classes}>
      <span className='block font-semibold text-secondary-400'>
        {" "}
        <span className='w-[10px] h-[10px] p-1 bg-primary-500 text-white px-2 rounded-md text-md'>
          $
        </span>{" "}
        {label}
      </span>
      <input
        type='range'
        ref={priceRef}
        name='price-slider'
        defaultValue={0}
        id='price-slider'
        min={0}
        max={100}
        step={10}
        onChange={onValueChange}
        className='bg-primary-500 w-full'
      />
      <span className='block font-semibold text-md text-secondary-400'>
        Max. $100
      </span>
    </div>
  );
}
