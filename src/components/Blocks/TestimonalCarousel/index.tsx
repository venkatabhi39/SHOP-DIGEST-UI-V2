import React from 'react';
import { TestimonialsCarousel } from '@/components/Carousel/Carousel';

const testimonialsData = [
  {
    title: 'Solid foundation for any project',
    content:
      'This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind.',
    author: 'Bonnie Green',
    role: 'CTO at Open AI',
    imageUrl: '/path/to/bonnie-green-image.jpg', // Replace with actual image path
  },
  {
    title: 'Solid foundation for any project',
    content:
      'This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind.',
    author: 'Bonnie Green',
    role: 'CTO at Open AI',
    imageUrl: '/path/to/bonnie-green-image.jpg', // Replace with actual image path
  },
  {
    title: 'Solid foundation for any project',
    content:
      'This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind.',
    author: 'Bonnie Green',
    role: 'CTO at Open AI',
    imageUrl: '/path/to/bonnie-green-image.jpg', // Replace with actual image path
  },
  {
    title: 'Solid foundation for any project',
    content:
      'This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind.',
    author: 'Bonnie Green',
    role: 'CTO at Open AI',
    imageUrl: '/path/to/bonnie-green-image.jpg', // Replace with actual image path
  },
  {
    title: 'Solid foundation for any project',
    content:
      'This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind.',
    author: 'Bonnie Green',
    role: 'CTO at Open AI',
    imageUrl: '/path/to/bonnie-green-image.jpg', // Replace with actual image path
  },
  {
    title: 'Solid foundation for any project',
    content:
      'This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind.',
    author: 'Bonnie Green',
    role: 'CTO at Open AI',
    imageUrl: '/path/to/bonnie-green-image.jpg', // Replace with actual image path
  },
  // ... Add more testimonials here
];

const Carousel = () => (
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-0 lg:py-14 mx-auto">
    <div className="mx-auto max-w-screen-md text-center">
      <h2 className="mb-4">Testimonials</h2>
      <p className="mb-8">
        Explore the whole collection of open-source web components and elements built with the
        utility classes from Tailwind
      </p>
    </div>
    <TestimonialsCarousel testimonials={testimonialsData} itemsPerSlide={3} />
  </div>
);

export default Carousel;
