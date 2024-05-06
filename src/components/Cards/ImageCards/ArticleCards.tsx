import React from 'react';
import Link, { LinkProps } from 'next/link';
import { Card } from 'flowbite-react';

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
    <div className="max-w-sm">
      <Card className="shadow-none card-plain">
        <Link href="#" className="">
          <img className="rounded-lg shadow-none mb-5" src={imageSrc} alt={title} />
        </Link>
        <div>
          <h5 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
            <Link href="#" className="">
              {title}
            </Link>
          </h5>
          <p className="mb-4 text-gray-500 dark:text-gray-400">{description}</p>
          <div className="text-gray-400 dark:text-gray-400 text-sm">
            <span>{date}</span> - <span>{readTime} min read</span>
          </div>
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
  // Add more items here...
];

const ArticleCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 py-4 sm:grid-cols-2 lg:grid-cols-4 sm:py-6 xl:grid-cols-4 xl:py-7 2xl:py-12">
      {articles.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </div>
  );
};

export default ArticleCards;
