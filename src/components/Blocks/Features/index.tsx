import React from 'react';

import ListWithContent from './ListWithContent';

const ListWithContentBlock = () => {
  const sectionProps = {
    title: 'We invest in the world potential',
    description: [
      'Flowbite Budget is a mobile app that helps users easily track their expenses and create a budget.',
      'With a user-friendly interface, the app allows users to quickly input their income and expenses, and then automatically categorizes them for easy tracking.',
      'This website section can be used to highlight the video part of the hero section alongside a couple of CTA buttons and reviews from Trustpilot.',
    ],
    features: [
      {
        title: 'Dynamic Reports and Dashboard',
        icon: (
          <svg
            className="flex-shrink-0 w-5 h-5 text-sdBlue dark:text-primary-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        title: 'Real-time Data Processing',
        icon: (
          <svg
            className="flex-shrink-0 w-5 h-5 text-sdBlue dark:text-primary-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        title: 'Scalable Infrastructure',
        icon: (
          <svg
            className="flex-shrink-0 w-5 h-5 text-sdBlue dark:text-primary-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        ),
        // description: 'Easily handle growth without any performance hit.',
      },
      {
        title: 'Limitless Business Automation',
        icon: (
          <svg
            className="flex-shrink-0 w-5 h-5 text-sdBlue dark:text-primary-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        title: 'Knowledge Management',
        icon: (
          <svg
            className="flex-shrink-0 w-5 h-5 text-sdBlue dark:text-primary-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
    actions: [
      {
        text: 'Start Building',
        url: '#',
        primary: true,
        icon: (
          <svg
            aria-hidden="true"
            className="w-5 h-5 ml-2 -mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      { text: 'Get a demo', url: '#' },
    ],
  };

  return <ListWithContent {...sectionProps} />;
};

export default ListWithContentBlock;
