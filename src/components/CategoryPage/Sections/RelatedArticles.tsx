import React from 'react';
import { CardWithReview2 } from '@/components/Cards/ImageCards/CardWithReview';
import { Heading } from '@/components/Heading';

const RelatedArticles: NextPage = () => {
  return (
    <div className="">
      <Heading as="h2" className="mt-2">
        Related Articles
      </Heading>
      <CardWithReview2 />
      <div className="border-gray-100 border mb-10"></div>
      <Heading as="h2" className="mt-4">
        Related Articles
      </Heading>
      <CardWithReview2 />
    </div>
  );
};

export default RelatedArticles;
