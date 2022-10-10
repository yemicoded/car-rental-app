import { useRouter } from "next/router";
import React from "react";
import ConfirmationCard from "../components/confirmation-card";
import SummaryCard from "../components/summary-card";
import { clx } from "../helpers/clx";
import useCar from "../hooks/useCar";
import BillingInfo from "./components/billing-info";
import PaymentMethods from "./components/payment-methods";
import RentalInfo from "./components/rental-info";

export default function PaymentWrapper({ classname, children }) {

  const router = useRouter()

  const {
    isLoading,
    data: car,
    isError,
    error,
  } = useCar(router.query.selectedCar);
  const [selectedCar, setSelectedCar] = React.useState()
  
  React.useEffect(() =>{
    setSelectedCar(car?.data)
  }, [car])

  const classes = clx(
    "p-3 lg:px-0 py-6 lg:w-[90%] mx-auto flex flex-col-reverse lg:flex-row gap-4",
    classname
  );
  return (
    <div className={classes}>
      <div className='flex-1 flex flex-col gap-4'>
        <BillingInfo />
        <RentalInfo />
        <PaymentMethods />
        <ConfirmationCard />
      </div>
      <div className='flex-2'>
        <SummaryCard car={selectedCar} />
      </div>
    </div>
  );
}
