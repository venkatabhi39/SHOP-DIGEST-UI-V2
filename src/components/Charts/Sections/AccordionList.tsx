// ReviewTable.tsx
import React from 'react';
import { Heading } from '@/components/Heading';
import { AccordionComponent } from '@/components/Accordion/Accordion';

export interface ReviewData {
  target: string;
  value: string | number;
  change?: string;
}

interface ReviewTableProps {
  data: ReviewData[];
}

export interface AccordionItem {
  title: string;
  content: string | JSX.Element;
}

export const reviewData: ReviewData[] = [
  { target: 'How many days it took to achieve first review', value: '₹2,538.00' },
  { target: 'How many days it took to achieve first 10 reviews', value: '₹2,538.00' },
  { target: 'How many days it took to achieve first 25 reviews', value: '₹17,17,110.79Cr' },
  { target: 'How many days it took to achieve first 50 reviews', value: '68.36L' },
  { target: 'How many days it took to achieve first 100 reviews', value: '4.27 %' },
  { target: 'How many days it took to achieve first 250 reviews', value: '-4.63 %' },
  { target: 'How many days it took to achieve first 500 reviews', value: '₹2,538.00' },
  { target: 'How many days it took to achieve first 1000 reviews', value: '₹2,538.00' },
  { target: 'How many days it took to achieve first 2500 reviews', value: '₹17,17,110.79Cr' },
  { target: 'How many days it took to achieve first 5000 reviews', value: '68.36L' },
  { target: 'then 5000 more reviews going forward', value: '-4.63 %' },
];

const ReviewTable: React.FC<ReviewTableProps> = ({ data }) => {
  return (
    <div className="p-4 bg-white rounded-lg">
      {/* <h2 className="text-lg font-semibold mb-4">#days for reaching target reviews</h2> */}
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-50">
            <th className="w-1/2 px-4 py-2 text-left">Investors</th>
            <th className="w-1/4 px-4 py-2 text-right">3M change</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2">{item.target}</td>
              <td
                className={`px-4 py-2 text-right ${
                  item.change && item.change.startsWith('-') ? 'text-red-500' : 'text-green-500'
                }`}
              >
                {item.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const sampleAccordionData: AccordionItem[] = [
  {
    title: 'Days for reaching target reviews',
    content: <ReviewTable data={reviewData} />,
  },
  {
    title: 'Frequency of each review type',
    content: <ReviewTable data={reviewData} />,
  },
  {
    title: 'Quality of reviews received',
    content: <ReviewTable data={reviewData} />,
  },
];

const AccordionList: NextPage = () => {
  return (
    <div className="rounded-lg">
      <Heading as="h3" className="mb-0 px-5 pt-4 pb-4">
        Key Insights
      </Heading>
      <AccordionComponent items={sampleAccordionData} />
    </div>
  );
};

export default AccordionList;
