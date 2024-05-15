import React from 'react';
import { Heading } from '@/components/Heading';
interface Article {
  title: string;
  description: string;
  imageSrc: string;
  readTime: string;
  href: string;
  date: string;
}

interface RelatedArticlesProps {
  title: string;
  articles: Article[];
}

const ArticleCard: React.FC<Article> = ({ title, description, imageSrc, readTime, href, date }) => {
  return (
    <article className="flex mb-8 flex-col md:flex-row">
      <a href={href} className="shrink-0">
        <img
          src={imageSrc}
          className="mb-4 w-full mr-5 md:w-44 max-w-full align-middle rounded-lg"
          alt={title}
        />
      </a>
      <div className="flex flex-col justify-center">
        <Heading as="h3" className="mb-4">
          <a href={href}>{title}</a>
        </Heading>
        {/* <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
     
        </h2> */}
        <p className="mb-2 text-gray-500 dark:text-gray-400">{description}</p>
        <div className="text-gray-400 dark:text-gray-400 text-sm">
          <span>{date}</span> - <span>{readTime} min read</span>
        </div>
      </div>
    </article>
  );
};

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ title, articles }) => {
  return (
    <aside
      aria-label="Related articles"
      className="py-8 lg:py-14 bg-white dark:bg-gray-900 antialiased"
    >
      <div className="px-4 mx-auto max-w-screen-xl">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </aside>
  );
};

const sampleArticles: Article[] = [
  {
    title: 'Our first office',
    description:
      'Over the past year, Volosoft has undergone many changes! After months of preparation.',
    imageSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-1.png',
    readTime: '2 minutes',
    href: '#',
    date: 'Aug 15, 2021',
  },
  {
    title: 'Enterprise design tips',
    description:
      'Over the past year, Volosoft has undergone many changes! After months of preparation.',
    imageSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-2.png',
    readTime: '12 minutes',
    href: '#',
    date: 'Aug 15, 2021',
  },
  {
    title: 'We partnered up with Google',
    description:
      'Over the past year, Volosoft has undergone many changes! After months of preparation.',
    imageSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-3.png',
    readTime: '8 minutes',
    href: '#',
    date: 'Aug 15, 2021',
  },
];

const ArticleRowCards: React.FC = () => {
  return <RelatedArticles title="Read next" articles={sampleArticles} />;
};

export default ArticleRowCards;
