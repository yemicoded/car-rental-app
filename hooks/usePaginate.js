import React from "react";
import useFilter from "../store/useFilter";
import useFilteredCars from "./useFilteredCars";

const getPageList = (data, itemsPerPage) => {
  const list = [];
  const pageCount = Math.ceil(data?.length / itemsPerPage);
  for (let i = 0; i < pageCount; i++) {
    list.push(i + 1);
  }
  return list;
};

export default function usePaginate(data, perPageCount) {
  const [pageList, setPageList] = React.useState([]);
  const [itemsPerPage, setItemsPerPage] = React.useState();
  const [pageChanged, setPageChanged] = React.useState(false);
  const [startIndex, setStartIndex] = React.useState(0);
  const [filteredCars, setFilteredCars] = React.useState();
  const [endIndex, setEndIndex] = React.useState();
  const currentPage = useFilter((state) => state.currentPage);

  React.useEffect(() => {
    setPageList(getPageList(data, itemsPerPage));
    setItemsPerPage(perPageCount);

    if (currentPage === 1) {
      setStartIndex(0);
      setPageChanged(false);
    } else {
      setPageChanged(true);
      if (pageChanged) {
        setStartIndex((currentPage - 1) * perPageCount);
      }
    }
    setEndIndex(startIndex + perPageCount);
    setFilteredCars(data?.slice(startIndex, endIndex));
  }, [
    data,
    itemsPerPage,
    perPageCount,
    currentPage,
    startIndex,
    endIndex,
    pageChanged,
  ]);

  return { pageList, filteredCars };
}
