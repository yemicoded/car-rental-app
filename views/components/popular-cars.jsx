import React from "react";
import Card from "../../components/card";
import { clx } from "../../helpers/clx";
import useCars from "../../hooks/useCars";
import CardsTopBar from "./CardsTopbar";

export default function PopularCars({ classname, children }) {
  const { isLoading, data: cars, isError, error } = useCars();

  const classes = clx("flex gap-4 scrollbar-hide overflow-x-scroll", classname);
  return (
    <div>
      <CardsTopBar heading='Popular cars' />
      <div className={classes}>
        {cars?.data.slice(0, 10).map((car) => (
          <Card key={car._id} car={car} constant />
        ))}
      </div>
    </div>
  );
}
