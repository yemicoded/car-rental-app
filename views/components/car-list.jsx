import React from "react";
import Router from "next/router";
import axios from "axios";
import { useQuery } from "react-query";
import Card from "../../components/card";
import { clx } from "../../helpers/clx";
import bufferString from "../../helpers/bufferString";
import useCars from "../../hooks/useCars";
import useFilteredCars from "../../hooks/useFilteredCars";
import useFilter from "../../store/useFilter";
import Paginate from "../../components/paginate";
import usePaginate from "../../hooks/usePaginate";
import ProductNoMatch from "../../components/product-no-match";

export default function CarList({ classname, children }) {
  const { filteredCars, isLoading } = useFilteredCars();
  const {filteredCars: Cars} = usePaginate(filteredCars, 12)

  const classes = clx(
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
    Cars?.length===0 && 'lg:h-[60vh] flex md:flex lg:flex items-center justify-center',
    classname
  );

  if (!isLoading && Cars?.length === 0) {
    return (
      <div className={classes}>
        <ProductNoMatch />
      </div>
    );
  }
  return (
      <div className={classes}>
        {Cars?.map((car) => (
          <Card key={car._id} car={car} />
        ))}
      </div>
  );
}
