import React from 'react';
import { Heading } from '@/components/Heading';
import { SectionHeader } from '@/components/section/SectionHeader';
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
  <div className="py-10 lg:py-14 mx-auto">
    <div className="mx-auto max-w-screen-md text-center sectionHeader">
      {/* <Heading as="h2" className="mb-4">
        You're in a good company.
      </Heading>

      <p className="mb-8">
        Explore the whole collection of open-source web components and elements built with the
        utility classes from Tailwind
      </p> */}
            <SectionHeader 
            title="You're in a good company."
            description="Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind"/>
    </div>
    <TestimonialsCarousel testimonials={testimonialsData} itemsPerSlide={3} />
  </div>
);

export default Carousel;
