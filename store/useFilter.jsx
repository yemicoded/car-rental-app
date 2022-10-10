import create from "zustand";

const filterList = (list, param) => {
  if (list.has(param)) {
    list.delete(param)
  } else {
    list.add(param)
  }
  return [...list]
};

const categoryList = new Set()
const capacityList = new Set()

const useFilter = create((set) => ({
  filters: {
    category: [...categoryList],
    capacity: [...capacityList],
    maxPrice: "",
  },
  currentPage: 1,
  
  filterCategory: (param) =>
    set((state) => ({
      filters: {
        ...state.filters,
        category: filterList(categoryList, param),
      },
    })),
  filterCapacity: (param) =>
    set((state) => ({
      filters: {
        ...state.filters,
        capacity: filterList(capacityList, param),
      },
    })),
  setPrice: (param) => set(state => ({
    filters: {
      ...state.filters,
      maxPrice: param
    }
  })),
  setPage: (param) => set(state => ({
    filters: state.filters,
    currentPage: param
  }))
}));

export default useFilter;
