import React from 'react'
import axios from "axios";
import { useQuery } from "react-query";

const fetchCar = (carId) => {
  return axios.get(`/api/v1/cars/${carId? carId: ''}`);
};

export default function useCar(carId) {
  return useQuery(["car-product", carId], () => fetchCar(carId));
}
