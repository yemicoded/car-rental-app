import React from "react";
import useFilter from "../store/useFilter";
import useCars from "./useCars";

const getFilteredCars = (cars = { data: [] }, options) => {
  let filteredCars = [];
  if (options?.category) {
    if (
      options.category.length === 0 &&
      options.capacity.length === 0 &&
      filteredCars.length === 0
    ) {
      filteredCars = cars.data;
    } else if (options.category.length === 0) {
      filteredCars = [...filteredCars];
    } else {
      for (let elem of options.category) {
        const result = cars?.data.filter((car) => car?.category === elem);
        filteredCars = [...filteredCars, ...result];
      }
    }
  }

  if (options?.capacity) {
    const maxCapacity = Math.max(...options.capacity);
    if (filteredCars.length > 0 && options.capacity.length > 0) {
      const result = filteredCars.filter((car) => car.capacity <= maxCapacity);
      filteredCars = [...result];
    } else if (options.capacity.length === 0) {
      filteredCars = [...filteredCars];
    } else {
      const result = cars?.data.filter((car) => car.capacity <= maxCapacity);
      filteredCars = [...filteredCars, ...result];
    }
  }

  if (options?.maxPrice) {
    if (filteredCars.length > 0 && options.maxPrice.length > 0) {
      const result = filteredCars.filter(
        (car) => car.new_price <= parseFloat(`${options.maxPrice}.00`)
      );
      filteredCars = [...result];
    } else if (options.maxPrice.length === 0) {
      filteredCars = [...filteredCars];
    } else {
      const result = cars?.data.filter(
        (car) => car.new_price <= parseFloat(`${options.maxPrice}.00`)
      );
      filteredCars = [...filteredCars, ...result];
    }
  }
  return filteredCars;
};

export default function useFilteredCars() {
  const { isLoading, data: cars, isError, error } = useCars();
  const filters = useFilter(state=>state.filters)
  const [filteredCars, setFilteredCars] = React.useState();
  const [options, setOptions] = React.useState();

  React.useEffect(() => {
    setFilteredCars(getFilteredCars(cars, options));
    setOptions(filters)
  }, [cars, options, filters]);

  return { filteredCars, isLoading };
}
