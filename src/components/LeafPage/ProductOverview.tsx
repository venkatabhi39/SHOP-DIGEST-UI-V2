// components/ProductInfo.tsx
import React from 'react';

export interface PricingPlan {
  type: string; // You might want to refine this to specific color names if you have a limited set
  amount: string;
}
export interface AppDetails {
  logoUrl: string;
  name: string;
  title: string;
  rating: number;
  reviewsCount: string;
  pricing: PricingPlan[];
  highlights: string[];
}

interface ProductInfoProps {
  appDetails: AppDetails;
}

const ProductOverview: React.FC<ProductInfoProps> = ({ appDetails }) => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <div className="flex items-center space-x-4">
        <img src={appDetails.logoUrl} alt={`${appDetails.name} Logo`} className="w-20" />
        <div>
          <h2 className="text-lg font-semibold">{appDetails.title}</h2>
          <div className="flex items-center">
            <div className="flex text-yellow-400">
              {[...Array(Math.ceil(appDetails.rating)).keys()].map((_, i) => (
                <svg key={i} fill="currentColor" viewBox="0 0 20 20" className="h-5 w-5">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0L12.9 6.5h4.55c.946 0 1.341 1.158.577 1.704l-3.683 2.615 1.386 4.507c.2.65-.537 1.174-1.163.855l-3.799-1.953-3.8 1.953c-.625.319-1.362-.205-1.162-.855l1.386-4.507-3.683-2.615c-.764-.546-.369-1.704.577-1.704h4.55l1.049-3.573z"></path>
                </svg>
              ))}
            </div>
            <span className="ml-2 text-sm font-medium">
              ({appDetails.rating.toFixed(1)}) {appDetails.reviewsCount} Reviews
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button className="text-blue-600 hover:text-blue-800">Open gallery</button>
        <div className="flex items-center space-x-2">
          {appDetails.pricing.map((price, index) => (
            <span
              key={index}
              className={`bg-${price.type}-100 text-${price.type}-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-${price.type}-200 dark:text-${price.type}-800`}
            >
              {price.amount}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Highlights</h3>
        <ul className="list-disc pl-5 text-sm">
          {appDetails.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductOverview;
