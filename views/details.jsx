import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import CardThumbnail from "../components/card-thumbnail";
import CarouselCard from "../components/carousel-card";
import DetailsCard from "../components/details-card";
import { clx } from "../helpers/clx";
import RecentCars from "./components/recent-cars";
import RecommendedCars from "./components/recommended-cars";
import Reviews from "./components/reviews";
import SideBar from "./components/sidebar";
import useCar from "../hooks/useCar";
import bufferString from "../helpers/bufferString";
import ThumbnailsWrapper from "./components/card-thumbnails";
import useCars from "../hooks/useCars";

export default function DetailsWrapper({ classname, children }) {
  const getImageString = (buffer) => {
    const string = bufferString(buffer);
    return `/upload/${string}`;
  };
  const router = useRouter();

  const { isLoading, data: car, isError, error } = useCar(router.query.id)
  const [selectedCar, setSelectedCar] = React.useState()
  const [isActive, setActive] = React.useState(1);
  const [activeImage, setImage] = React.useState();

  React.useEffect(() => {
    setSelectedCar(car?.data)
    setImage(getImageString(selectedCar?.product_images[0]));
  }, [router.query, selectedCar, car?.data]);

  console.log(activeImage)

  const changeActiveImage = (image, id) => {
    setImage(`/upload/${image}`);
    setActive(id);
  };

  const classes = clx("flex", classname);

    return (
      <div className={classes}>
        <SideBar/>
        <div className='flex-1 p-3 py-6 mb-6 lg:p-4 w-full'>
          {car && <div className='flex flex-col lg:flex-row gap-4 max-w-full'>
            <div className='flex-1 flex flex-col gap-4 '>
              <div className='relative h-[250px] lg:flex-1 bg-white dark:bg-secondary-100 lg:min-h-[300px] overflow-hidden rounded-xl'>
                <Image
                  src={activeImage}
                  alt='image'
                  layout='fill'
                  objectFit={`${isActive===1? 'contain':'fill'}`}
                  quality={100}
                  className='m-auto'
                />
              </div>
              <div className='flex gap-4 lg:gap-6'>
                <ThumbnailsWrapper images={selectedCar?.product_images} onclick={changeActiveImage} activeIndex={isActive} />
              </div>
            </div>
            <div className='flex-1 '>
              <DetailsCard carData={selectedCar} />
            </div>
          </div>}
          <Reviews />
          <RecentCars />
          <RecommendedCars />
        </div>
      </div>
    );
}
