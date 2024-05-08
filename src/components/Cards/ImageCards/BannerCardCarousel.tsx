import React from 'react';
import { Card, Button } from 'flowbite-react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CustomCard = ({
  title,
  description,
  buttonLabel,
  backgroundImage,
  backgroundColor,
  link,
  backgroundPos,
  textColor,
}) => {
  return (
    <div className="w-full mx-auto my-4">
      <Card
        style={{
          backgroundColor,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'contain',
          backgroundPosition: backgroundPos || 'right center',
          backgroundRepeat: 'no-repeat',
        }}
        horizontal
        className="flex justify-between items-center min-h-60 rounded-2xl shadow-none"
      >
        <div className="bg-white bg-opacity-60 p-4 sm:bg-transparent sm:bg-opacity-100">
          <h3 className={`text-2xl font-semibold`} style={{ color: textColor || 'inherit' }}>
            {title}
          </h3>
          <p style={{ color: textColor || 'inherit' }}>{description}</p>
          <Button
            color="light"
            pill
            className="bg-transparent mt-4 border-gray-500 border-2"
            style={{ color: textColor || 'inherit' }}
          >
            {buttonLabel}
          </Button>
        </div>
      </Card>
    </div>
  );
};

const BannerCardCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="flex justify-between items-center mb-0 px-4">
        <h2 className="font-bold">Extensions</h2>
        <a href="#" className="text-blue-500 hover:underline font-semibold">
          See More
        </a>
      </div>
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
        ssr={true}
        autoPlay={true}
        showDots={true}
        infinite={true}
        dotListClass="sd-custom-dot-list-style"
      >
        <div className="p-4">
          <CustomCard
            title="Favourites of 2023"
            description="Discover the standout extensions that made our year"
            buttonLabel="See Collection"
            backgroundImage="https://i.ibb.co/kHbpRHY/6132448-36471-removebg-preview.png"
            backgroundColor="#EFFBE7"
            backgroundPos="96% center"
            link="#"
          />
        </div>
        <div className="p-4">
          <CustomCard
            title="Favourites of 2023"
            description="Discover the standout extensions that made our year"
            buttonLabel="See Collection"
            backgroundImage="https://i.ibb.co/ZhsV2yT/28563713-6152022-general2-24-removebg-preview.png"
            backgroundColor="#FFF6E8"
            backgroundPos="96% center"
            link="#"
          />
        </div>

        <div className="p-4">
          <CustomCard
            title="Favourites of 2023"
            textColor="#fff"
            description="Discover the standout extensions that made our year"
            buttonLabel="See Collection"
            backgroundImage="https://i.ibb.co/0yt3j24/5683385-2956660-1-removebg-preview.png"
            backgroundColor="#221E5B"
            backgroundPos="96% center"
            link="#"
          />
        </div>
        <div className="p-4">
          <CustomCard
            title="Favourites of 2023"
            description="Discover the standout extensions that made our year"
            buttonLabel="See Collection"
            backgroundImage="https://i.ibb.co/kHbpRHY/6132448-36471-removebg-preview.png"
            backgroundColor="#EFFBE7"
            backgroundPos="96% center"
            link="#"
          />
        </div>
      </Carousel>
    </>
  );
};

export default BannerCardCarousel;
