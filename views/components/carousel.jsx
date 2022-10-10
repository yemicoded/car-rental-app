import React from "react";
import CarouselCard from "../../components/carousel-card";
import { clx } from "../../helpers/clx";

export default function Carousel({ classname, children }) {
  const [activeCarousel, setActiveCarousel] = React.useState(1);
  const classes = clx("", classname);
  React.useEffect(() => {
    const carouselInterval = setInterval(() => {
      if (activeCarousel === 1) {
        setActiveCarousel(2);
        clearInterval(carouselInterval);
      } else {
        setActiveCarousel(1);
        clearInterval(carouselInterval);
      }
    }, 4000);
  }, [activeCarousel]);
  return (
    <div className={classes}>
      <div className='hidden lg:grid grid-cols-2 gap-6'>
        <CarouselCard
          src='/images/carousel-img1.png'
          heading='The Best Platform for Car Rental'
          bgLight
        >
          Ease of doing a car rental safely and reliably. Of course at a low
          price.
        </CarouselCard>
        <CarouselCard
          src='/images/carousel-img2.png'
          heading='Easy way to rent a car at a low price'
        >
          Providing cheap car rental services and safe and comfortable
          facilities.
        </CarouselCard>
      </div>
      <div className='lg:hidden grid-cols-2 gap-6'>
        {activeCarousel === 1 && (
          <CarouselCard
            src='/images/carousel-img1.png'
            heading='The Best Platform for Car Rental'
            bgLight
          >
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </CarouselCard>
        )}
        {activeCarousel === 2 && (
          <CarouselCard
            src='/images/carousel-img2.png'
            heading='Easy way to rent a car at a low price'
          >
            Providing cheap car rental services and safe and comfortable
            facilities.
          </CarouselCard>
        )}
        {/* <div className='py-4 flex gap-4 justify-center items-center'>
          <span
            className={`w-4 h-4 rounded-full border-2 inline-block ${
              activeCarousel === 1 ? "bg-primary-500" : "bg-white"
            }`}
            onClick={() => setActiveCarousel(1)}
          ></span>
          <span
            className={`w-4 h-4 rounded-full border-2 inline-block ${
              activeCarousel === 2 ? "bg-primary-500" : "bg-white"
            }`}
            onClick={() => setActiveCarousel(2)}
          ></span>
        </div> */}
      </div>
    </div>
  );
}
