import React from "react";
import { useStore } from "zustand";
import Checkbox from "../../components/checkbox";
import Slider from "../../components/slider";
import { clx } from "../../helpers/clx";
import useCars from "../../hooks/useCars";
import useFilteredCars from "../../hooks/useFilteredCars";
import useFilter from "../../store/useFilter";

export default function SideBar({ classname, isMobile, children }) {
  const [priceValue, setPriceValue] = React.useState(0);
  const filters = useFilter((state) => state.filters);
  const filterCategory = useFilter((state) => state.filterCategory);
  const filterCapacity = useFilter((state) => state.filterCapacity);
  const setPrice = useFilter(state => state.setPrice)
  const { data: cars } = useCars()
  const [filteredCars, setFilteredCars] = React.useState()

  React.useEffect(() => {
    setFilteredCars(cars?.data)
  }, [cars?.data])
  
  const getCategoryCount = (category) => {
    const result = filteredCars?.filter(car => car.category === category)
    return result?.length
  }

  const getCapacityCount = (capacity) => {
    const result = filteredCars?.filter((car) => car.capacity === capacity.toString());
    return result?.length;
  };

  const getStatus = (list, param) => {
    return list.includes(param);
  };

  console.log(filters);

  const classes = clx(
    "bg-white min-h-[700px] dark:bg-black min-w-[200px] border-t-2 dark:border-white border-secondary-300/10 p-6",
    isMobile ? "block border-t-0" : "hidden lg:block",
    classname
  );
  return (
    <div className={classes}>
      <div className='mb-4'>
        <span className='inline-block text-sm text-secondary-300 font-medium'>
          TYPE
        </span>
        <div className='py-4 flex flex-col gap-4'>
          <Checkbox
            label='Sport'
            quantity={getCategoryCount("sport")}
            onclick={() => filterCategory("sport")}
            active={getStatus(filters.category, "sport")}
          />
          <Checkbox
            label='SUV'
            quantity={getCategoryCount("SUV")}
            onclick={() => filterCategory("SUV")}
            active={getStatus(filters.category, "SUV")}
          />
          <Checkbox
            label='MPV'
            quantity={getCategoryCount("MPV")}
            onclick={() => filterCategory("MPV")}
            active={getStatus(filters.category, "MPV")}
          />
          <Checkbox
            label='Sudan'
            quantity={getCategoryCount("Sudan")}
            onclick={() => filterCategory("Sudan")}
            active={getStatus(filters.category, "Sudan")}
          />
          <Checkbox
            label='Coupe'
            quantity={getCategoryCount("coupe")}
            onclick={() => filterCategory("coupe")}
            active={getStatus(filters.category, "coupe")}
          />
          <Checkbox
            label='Hatchback'
            quantity={getCategoryCount("hatchback")}
            onclick={() => filterCategory("hatchback")}
            active={getStatus(filters.category, "hatchback")}
          />
        </div>
      </div>

      <div className='mb-4'>
        <span className='inline-block text-sm text-secondary-300 font-medium'>
          CAPACITY
        </span>
        <div className='py-4 flex flex-col gap-4'>
          <Checkbox
            label='2 Person'
            quantity={getCapacityCount(2)}
            onclick={() => filterCapacity(2)}
            active={getStatus(filters.capacity, 2)}
          />
          <Checkbox
            label='4 Person'
            quantity={getCapacityCount(4)}
            onclick={() => filterCapacity(4)}
            active={getStatus(filters.capacity, 4)}
          />
          <Checkbox
            label='6 Person'
            quantity={getCapacityCount(6)}
            onclick={() => filterCapacity(6)}
            active={getStatus(filters.capacity, 6)}
          />
          <Checkbox
            label='8 or More'
            quantity={getCapacityCount(8)}
            onclick={() => filterCapacity(8)}
            active={getStatus(filters.capacity, 8)}
          />
        </div>
      </div>

      <Slider price={filters.maxPrice} setPrice={setPrice} />
    </div>
  );
}
