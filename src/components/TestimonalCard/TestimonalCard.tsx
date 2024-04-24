import React from 'react';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  imageUrl: string;
}

export const TestimonialCard: React.FC<TestimonialProps> = ({
  content,
  author,
  role,
  imageUrl,
}) => (
  // <div className="flex flex-col items-center bg-white p-6 shadow rounded-lg text-center mx-4">
  //   <p className="text-gray-500 text-lg italic">"{content}"</p>
  //   <div className="flex items-center mt-4 justify-center">
  //     <img className="w-12 h-12 rounded-full mr-4" src={imageUrl} alt={author} />
  //     <div>
  //       <p className="text-gray-900 text-lg font-semibold">{author}</p>
  //       <p className="text-gray-400 text-sm">{role}</p>
  //     </div>
  //   </div>
  // </div>
  <div className="flex flex-col overflow-hidden rounded-lg mr-6">
    <figure className="p-6 bg-gray-50 rounded dark:bg-gray-800">
      <blockquote className="text-sm text-gray-500 dark:text-gray-400">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Solid foundation for any project
        </h3>
        <p className="my-4">
          "This is a very complex and beautiful set of elements. Under the hood it comes with the
          best things from 2 different worlds: Figma and Tailwind.”
        </p>
      </blockquote>
      <figcaption className="flex items-center space-x-3">
        <img
          className="w-9 h-9 rounded-full"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
          alt="profile picture"
        />
        <div className="space-y-0.5 font-medium dark:text-white">
          <div>Bonnie Green</div>
          <div className="text-sm font-light text-gray-500 dark:text-gray-400">CTO at Open AI</div>
        </div>
      </figcaption>
    </figure>
  </div>
);
