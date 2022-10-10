import { useRouter } from "next/router";
import React from "react";
import Button from "../components/button";
import Card from "../components/card";
import Paginate from "../components/paginate";
import { clx } from "../helpers/clx";
import useFilteredCars from "../hooks/useFilteredCars";
import usePaginate from "../hooks/usePaginate";
import useFilter from "../store/useFilter";
import CarList from "./components/car-list";
import DeliveryType from "./components/delivery-type";
import SideBar from "./components/sidebar";

export default function CategoryWrapper({ classname, children }) {

  const router = useRouter()
  const { filteredCars, isLoading } = useFilteredCars();
  const { filteredCars: Cars } = usePaginate(filteredCars, 12);
  const filters = useFilter(state => state.filters)
  const setCategory = useFilter(state => state.filterCategory)
  const setCapacity = useFilter(state => state.filterCapacity)
  const setPage = useFilter((state) => state.setPage);
  const currentPage = useFilter((state) => state.currentPage);
  // const {category, page, capacity} = router.query
  
  React.useEffect(() => {
  const { category, page, capacity } = router.query;

    if (
      currentPage
    ) {
      router.push(
        `${router.pathname}?page=${currentPage}`
      );
    } else {
      router.push("/products");
    }
  }, [currentPage]);

  const classes = clx("flex", classname);
  return (
    <div className={classes}>
      <SideBar />
      <div className='flex-1 p-3 lg:p-4'>
        <DeliveryType />
        <div className=''>
          <CarList />
          {Cars.length>0 && <div className='py-8 flex justify-center'>
            <Paginate />
          </div>}
        </div>
      </div>
    </div>
  );
}
