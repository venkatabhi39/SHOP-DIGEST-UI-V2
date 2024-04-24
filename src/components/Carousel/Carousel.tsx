import React from 'react';
import { TestimonialCard } from '@/components/TestimonalCard/TestimonalCard';
import { Carousel } from 'flowbite-react';

interface TestimonialsCarouselProps {
  testimonials: TestimonialProps[];
  itemsPerSlide?: number; // Optional prop to define how many items per slide
}

export const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({
  testimonials,
  itemsPerSlide = 3, // Default to 3 items per slide
}) => {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const goToSlide = (slideIndex: number) => {
    setActiveSlide(slideIndex);
  };

  // Group testimonials into sets for each slide according to itemsPerSlide
  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += itemsPerSlide) {
    groupedTestimonials.push(testimonials.slice(i, i + itemsPerSlide));
  }

  const trX = (num: number) => num * 100;

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform"
          style={{
            transform: `translateX(-${
              (activeSlide * trX(itemsPerSlide)) / groupedTestimonials.length
            }%)`,
          }}
        >
          {groupedTestimonials.map((group, index) => (
            <div className="flex min-w-full justify-center" key={index}>
              {' '}
              {/* Each group takes the full width */}
              {group.map((testimonial, idx) => (
                <div key={idx} style={{ width: `calc(${100 / itemsPerSlide}% - 1rem)` }}>
                  {' '}
                  {/* Adjust width based on itemsPerSlide and subtract the total gap */}
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-14 left-0 right-0 flex justify-center p-2">
        {groupedTestimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 bg-gray-300 rounded-full mx-1 ${
              activeSlide === index ? '!bg-blue-500' : ''
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Slide ${index}`}
          />
        ))}
      </div>
    </div>
  );
};

// export const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({ testimonials }) => {
//   const [activeSlide, setActiveSlide] = React.useState(0);

//   const handleIndicatorClick = (index: number) => {
//     setActiveSlide(index);
//   };
//   // Calculate the number of slides needed
//   const slides = [];
//   for (let i = 0; i < testimonials.length; i += 3) {
//     slides.push(testimonials.slice(i, i + 3));
//   }

//   return (
//     <div className="h-56 sm:h-64 xl:h-80 2xl:h-[600px]">
//       <Carousel className="testimonal-carousel" active={activeSlide}>
//         {slides.map((slide, index) => (
//           <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
//             {slide.map((testimonial, idx) => (
//               <TestimonialCard key={idx} {...testimonial} />
//             ))}
//           </div>
//         ))}
//       </Carousel>
//       <div className="flex justify-center p-4">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             className={`w-3 h-3 bg-gray-300 rounded-full mx-2 ${
//               activeSlide === index ? '!bg-blue-500' : ''
//             }`}
//             onClick={() => handleIndicatorClick(index)}
//             aria-label={`Slide ${index}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };
