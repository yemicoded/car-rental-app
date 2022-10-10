import React from "react";
import Card from "../../components/card";
import { clx } from "../../helpers/clx";
import useCars from "../../hooks/useCars";
import CardsTopBar from "./CardsTopbar";

export default function RecentCars({ classname, children }) {

  const [category, setCategory] = React.useState([])
  const { isLoading, data: cars, isError, error } = useCars(category);
  
  const classes = clx("mt-6 lg:max-w-[calc(100vw-250px)]", classname);
  return (
    <div className={classes}>
      <CardsTopBar heading='Recent cars' />
      <div className='flex gap-4 scrollbar-hide overflow-x-scroll'>
        {cars?.data.slice(0, 10).map((car) => (
          <Card key={car._id} car={car} constant/>
        ))}
      </div>
    </div>
  );
}
