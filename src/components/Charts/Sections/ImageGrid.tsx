import React from 'react';
import { Heading } from '@/components/Heading';
import GroupedDropdown from '@/components/FormFields/GroupedDropdown';

interface AppInfo {
  name: string;
  iconUrl: string;
}

interface RankingsData {
  countries: string[];
  apps: AppInfo[];
}

const CountryAppRankings: React.FC<{ data: RankingsData }> = ({ data }) => {
  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto relative border sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                #
              </th>
              {data.countries.map((country, index) => (
                <th key={index} scope="col" className="py-3 px-6 text-center">
                  {country}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.apps.map((app, idx) => (
              <tr key={idx} className="bg-white border-0 dark:bg-gray-800 dark:border-gray-700">
                <td className="py-4 px-6 flex items-center">{idx + 1}</td>
                {data.countries.map((country, index) => (
                  <td key={index} className="py-4 px-6 text-center">
                    <img src={app.iconUrl} alt={app.name} className="w-8 h-8 inline" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const sampleData: RankingsData = {
  countries: [
    'Worldwide',
    'United States',
    'United Kingdom',
    'China',
    'India',
    'France',
    'Russia',
    'Germany',
  ],
  apps: [
    {
      name: 'TikTok',
      iconUrl: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/discord-256.png',
    },
    {
      name: 'Instagram',
      iconUrl: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/pinterest-256.png',
    },
    {
      name: 'TikTok',
      iconUrl: 'https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Twitter-64.png',
    },
    {
      name: 'Instagram',
      iconUrl: 'https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Shopify-64.png',
    },
    {
      name: 'TikTok',
      iconUrl:
        'https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_firefox-64.png',
    },
    {
      name: 'Instagram',
      iconUrl: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/pinterest-256.png',
    },
    {
      name: 'TikTok',
      iconUrl: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/discord-256.png',
    },
    {
      name: 'Instagram',
      iconUrl: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/pinterest-256.png',
    },
    {
      name: 'TikTok',
      iconUrl: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/discord-256.png',
    },
    {
      name: 'Instagram',
      iconUrl: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/pinterest-256.png',
    },
  ],
};

const ImageGrid: React.FC = () => {
  const filterConfig = [
    {
      id: 'criteria',
      default: 'today',
      label: 'Criteria',
      items: [
        {
          label: 'Today',
          value: 'today',
        },
        {
          label: 'Last Week',
          value: 'last-week',
        },
      ],
    },
    {
      id: 'date-pair',
      default: 'reviews',
      label: 'Reviews',
      items: [
        {
          label: 'Reviews',
          value: 'reviews',
        },
        {
          label: 'Ratings',
          value: 'ratings',
        },
      ],
    },
    {
      id: 'location',
      default: 'country',
      label: 'Country',
      items: [
        {
          label: 'Country',
          value: 'country',
        },
        {
          label: 'India',
          value: 'india',
        },
      ],
    },
  ];
  return (
    <div>
      <div className="flex mb-6 justify-between">
        <Heading as="h3" className="mt-2 mb-6">
          Top category apps
        </Heading>
        <GroupedDropdown filters={filterConfig} />
      </div>
      <CountryAppRankings data={sampleData} />
    </div>
  );
};

export default ImageGrid;
