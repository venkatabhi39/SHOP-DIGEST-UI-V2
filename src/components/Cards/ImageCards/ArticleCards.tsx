import React, { useRef, useState, useEffect } from 'react';
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
    <div className="max-w-full md:max-w-64 xl:max-w-[17rem]">
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
    // the number of items you want to see on the screen
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
    partialVisibilityGutter: 60, // this is needed to adjust the responsiveness
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    partialVisibilityGutter: 50,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 10,
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
  // State to manage the autoplay feature based on screen width
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Update the state based on the window width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Call the function to set the initial state
    handleResize();

    // Add event listener for subsequent updates
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold">Articles</h3>
        <a href="#" className="text-primary-500 hover:underline font-semibold text-sm mr-3">
          See More
        </a>
      </div>
      <div className="flex justify-center items-center mt-4 h-5" style={{ display: 'none' }}>
        {currentIndex > 0 && <CustomLeftArrow onClick={previous} />}
        {currentIndex === articles.length / 2 ? null : <CustomRightArrow onClick={next} />}
      </div>

      <Carousel
        swipeable={isMobile}
        draggable={isMobile}
        showDots={isMobile}
        responsive={responsive}
        ssr // Server-side rendering for SEO benefits
        infinite={isMobile}
        ref={carouselRef}
        afterChange={(previousSlide, { currentSlide }) => handleSlideChange(currentSlide)}
        autoPlay={isMobile} // Use state to control autoplay
        removeArrowOnDeviceType={['desktop', 'superLargeDesktop']}
        deviceType={isMobile ? 'mobile' : 'desktop'}
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
