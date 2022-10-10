import React from "react";
import { BiSortAlt2 } from "react-icons/bi";
import Button, { IconButton } from "../components/button";
import Card from "../components/card";
import RadioButton from "../components/radio-button";
import SmallSelect from "../components/small-select";
import { clx } from "../helpers/clx";
import GeneralLayout from "../layouts/general-layout";
import Carousel from "./components/carousel";
import DeliveryType from "./components/delivery-type";
import PopularCars from "./components/popular-cars";
import RecommendedCars from "./components/recommended";

export default function HomeWrapper({ classname, children }) {
  const classes = clx("px-3 lg:px-0 lg:w-[90%] mx-auto py-6 ", classname);
  return (
    <div className={classes}>
      <Carousel />
      <DeliveryType />
      <PopularCars />
      <RecommendedCars />

      {/* <div>
          <HomeWrapper.CardsTopbar heading='Recommended cars' />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            <Card brand='Rolls-Royce' />
            <Card brand='Rolls-Royce' />
            <Card brand='Rolls-Royce' />
            <Card brand='Rolls-Royce' />
            <Card brand='Rolls-Royce' />
            <Card brand='Rolls-Royce' />
            <Card brand='Rolls-Royce' />
            <Card brand='Rolls-Royce' />
          </div>
          
        </div> */}
    </div>
  );
}
