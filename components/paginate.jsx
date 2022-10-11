import React from "react";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { clx } from "../helpers/clx";
import useFilteredCars from "../hooks/useFilteredCars";
import usePaginate from "../hooks/usePaginate";
import useFilter from "../store/useFilter";
import { IconButton } from "./button";

export default function Paginate({ classname, children }) {
  const [perPageCount, setPerPageCount] = React.useState(12);
  const { filteredCars } = useFilteredCars();
  const activePage = useFilter((state) => state.currentPage);
  const setPage = useFilter((state) => state.setPage);
  const { pageList } = usePaginate(filteredCars, perPageCount);

  const getNextPage = () => {
    if (activePage !== pageList.length) {
      window.scrollTo(0,0)
      setPage(activePage + 1);
    }
  };

  const getPrevPage = () => {
    if (activePage !== 1) {
      window.scrollTo(0, 0);
      setPage(activePage - 1);
    }
  };

  const onLabelClick = (param) => {
    window.scrollTo(0, 0);
    setPage(param);
  }

  React.useEffect(() => {
    if (filteredCars?.length <= perPageCount) {
      setPage(1);
    }
  });

  const classes = clx("flex items-center gap-4", classname);
  return (
    <div className={classes}>
      <IconButton
        size='medium'
        icon={<IoMdArrowRoundBack />}
        onclick={getPrevPage}
        disabled={activePage === 1}
        rounded
      />
      <div className='flex gap-4 items-center'>
        {pageList.map((pageNumber) => (
          <IconButton
            key={pageNumber}
            variant={pageNumber === activePage ? "contained" : "outlined"}
            onclick={() => onLabelClick(pageNumber)}
            rounded
          >
            {pageNumber}
          </IconButton>
        ))}
      </div>
      <IconButton
        size='medium'
        icon={<IoMdArrowRoundForward />}
        onclick={getNextPage}
        disabled={activePage === pageList.length}
        rounded
      />
    </div>
  );
}
