import React, { useRef, useState } from 'react';
import Link, { LinkProps } from 'next/link';
import { Card } from 'flowbite-react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
interface ArticleCardProps {
  title: string;
  description: string;
  imageSrc: string;
  date: string;
  readTime: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  imageSrc,
  date,
  readTime,
}) => {
  return (
    <div className="max-w-full md:max-w-64 xl:max-w-72">
      <Card className="shadow-none card-plain">
        <Link href="#" className="">
          <img className="rounded-lg shadow-none mb-5 w-full" src={imageSrc} alt={title} />
        </Link>
        <h5 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
          <Link href="#" className="">
            {title}
          </Link>
        </h5>
        <p className="mb-4 text-gray-500 dark:text-gray-400">{description}</p>
        <div className="text-gray-400 dark:text-gray-400 text-sm">
          <span>{date}</span> - <span>{readTime} min read</span>
        </div>
      </Card>
    </div>
  );
};

const articles = [
  {
    title: 'Our first office',
    description:
      'Over the past year, Volosoft has undergone many changes! After months of preparation.',
    imageSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png',
    date: 'Aug 15, 2021',
    readTime: '16',
  },
  {
    title: 'Our first office',
    description:
      'Over the past year, Volosoft has undergone many changes! After months of preparation.',
    imageSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png',
    date: 'Aug 15, 2021',
    readTime: '16',
  },
  {
    title: 'Our first office',
    description:
      'Over the past year, Volosoft has undergone many changes! After months of preparation.',
    imageSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png',
    date: 'Aug 15, 2021',
    readTime: '16',
  },
  {
    title: 'Our first office',
    description:
      'Over the past year, Volosoft has undergone many changes! After months of preparation.',
    imageSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png',
    date: 'Aug 15, 2021',
    readTime: '16',
  },
  {
    title: 'Our first office',
    description:
      'Over the past year, Volosoft has undergone many changes! After months of preparation.',
    imageSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png',
    date: 'Aug 15, 2021',
    readTime: '16',
  },
  {
    title: 'Our first office',
    description:
      'Over the past year, Volosoft has undergone many changes! After months of preparation.',
    imageSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png',
    date: 'Aug 15, 2021',
    readTime: '16',
  },
  {
    title: 'Our first office',
    description:
      'Over the past year, Volosoft has undergone many changes! After months of preparation.',
    imageSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png',
    date: 'Aug 15, 2021',
    readTime: '16',
  },
  {
    title: 'Our first office',
    description:
      'Over the past year, Volosoft has undergone many changes! After months of preparation.',
    imageSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png',
    date: 'Aug 15, 2021',
    readTime: '16',
  },
  // Add more items here...
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const CustomLeftArrow = ({ onClick, ...rest }) => {
  return (
    <div
      style={{
        position: 'absolute',
        right: '25px',
        top: '0',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        zIndex: 1,
      }}
      onClick={onClick}
      {...rest}
    >
      <button
        type="button"
        class="flex justify-center items-center mr-4 h-full cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          <span class="hidden">Previous</span>
        </span>
      </button>
    </div>
  );
};

export const CustomRightArrow = ({ onClick, ...rest }) => {
  return (
    <div
      style={{
        position: 'absolute',
        right: '15px',
        top: '0',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        zIndex: 1,
      }}
      onClick={onClick}
      {...rest}
    >
      <button
        type="button"
        class="flex justify-center items-center h-full cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
          <span class="hidden">Next</span>
        </span>
      </button>
    </div>
  );
};

const ArticleCards: React.FC = () => {
  const carouselRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    carouselRef.current.next();
  };

  const previous = () => {
    carouselRef.current.previous();
  };

  const handleSlideChange = newIndex => {
    setCurrentIndex(newIndex);
  };
  return (
    <div className="relative">
      <div class="flex justify-center items-center mt-4 h-5">
        {currentIndex > 0 && <CustomLeftArrow onClick={previous} />}
        {currentIndex === articles.length / 2 ? null : <CustomRightArrow onClick={next} />}
      </div>

      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
        ref={carouselRef}
        ssr={true}
        autoPlay={true}
        showDots={true}
        afterChange={(previousSlide, { currentSlide }) => handleSlideChange(currentSlide)}
        dotListClass="sd-custom-dot-list-style"
        containerClass="sd-carousel-container"
      >
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </Carousel>
    </div>
  );
};

export default ArticleCards;
