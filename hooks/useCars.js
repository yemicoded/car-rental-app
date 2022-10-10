import axios from "axios";
import { useQuery } from "react-query";

const fetchCars = (category) => {
  if (category && category.length!==0) {
    return axios.get(`/api/v1/cars?category=${category}`);
  } else {
  return axios.get(`/api/v1/cars`);
  }
};

export default function useCars(category) {
  if (category) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery("queried-car-products", () => fetchCars(category));
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery("car-products", () => fetchCars());
}
