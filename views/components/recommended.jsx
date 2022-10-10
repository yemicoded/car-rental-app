import React from "react";
import { useRouter } from "next/router";
import Button from "../../components/button";
import Card from "../../components/card";
import { clx } from "../../helpers/clx";
import CardsTopBar from "./CardsTopbar";
import useCars from "../../hooks/useCars";

export default function RecommendedCars({ classname, children }) {
  const router = useRouter();
  const { isLoading, data: cars, isError, error } = useCars();

  const classes = clx(
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
    classname
  );
  return (
    <div>
      <CardsTopBar heading='Recommended cars' />
      <div className={classes}>
        {cars?.data.slice(10, 18).map((car) => (
          <Card key={car._id} car={car}/>
        ))}
      </div>
      <div className='py-8 flex justify-center'>
        <Button onclick={() => router.push("/products")}>Show All Cars</Button>
      </div>
    </div>
  );
}
