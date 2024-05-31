import React, { ReactNode } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface CarouselProps {
  children: ReactNode;
  swipeable?: boolean;
  draggable?: boolean;
  showDots?: boolean;
  responsive: any;
  ssr?: boolean;
  infinite?: boolean;
  autoPlay?: boolean;
  autoPlaySpeed?: number;
  keyBoardControl?: boolean;
  customTransition?: string;
  transitionDuration?: number;
  containerClass?: string;
  removeArrowOnDeviceType?: string[];
  deviceType?: string;
  dotListClass?: string;
  itemClass?: string;
}

const responsiveData = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    partialVisibilityGutter: 40,
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

const CustomCarousel: React.FC<CarouselProps> = ({
  children,
  swipeable = true,
  draggable = false,
  showDots = false,
  responsive = responsiveData,
  ssr = true,
  infinite = true,
  autoPlay = false,
  autoPlaySpeed = 3000,
  keyBoardControl = true,
  customTransition = 'all ease-in-out',
  transitionDuration = 300,
  containerClass = 'carousel-container',
  removeArrowOnDeviceType = ['tablet', 'mobile'],
  deviceType,
  dotListClass = 'sd-custom-dot-list-style',
  itemClass = 'carousel-item-padding-40-px',
}) => {
  return (
    <Carousel
      swipeable={swipeable}
      draggable={draggable}
      showDots={showDots}
      responsive={responsive}
      ssr={ssr}
      infinite={infinite}
      autoPlay={deviceType !== 'mobile' ? autoPlay : false}
      autoPlaySpeed={autoPlaySpeed}
      keyBoardControl={keyBoardControl}
      customTransition={customTransition}
      transitionDuration={transitionDuration}
      containerClass={containerClass}
      removeArrowOnDeviceType={removeArrowOnDeviceType}
      deviceType={deviceType}
      dotListClass={dotListClass}
      itemClass={itemClass}
    >
      {children}
    </Carousel>
  );
};

export default CustomCarousel;
