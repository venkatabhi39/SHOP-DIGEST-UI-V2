import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Heading } from '@/components/Heading';
import { ApexOptions } from 'apexcharts';
import GroupedDropdown from '@/components/FormFields/GroupedDropdown';

// Dynamically import ReactApexChart with SSR disabled
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface ApexChartProps {
  seriesData: number[];
  categories: string[];
}

const ApexChart: React.FC<ApexChartProps> = ({ seriesData, categories }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsBrowser(true);
    }
  }, []);

  const series = [
    {
      data: seriesData,
    },
  ];
  const icons = {
    WhatsApp: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/whatsapp-64.png',
    Messenger: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/skype-64.png',
    Facebook: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/appstore-64.png',
    Snapchat: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/snapchat-64.png',
    Instagram: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/instagram-64.png',
    YouTube: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/youtube-64.png',
    Uber: 'https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_uber-64.png',
    Spotify: 'https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Spotify-64.png',
    Twitter: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/twitter-64.png',
    Netflix:
      'https://cdn3.iconfinder.com/data/icons/apple-ios-app-big-sur-dark/1024/Netflix-64.png',
  };

  const options: ApexOptions = {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: categories.map(category => `${category}`),
    },
    grid: {
      show: true, // Default is true, specify to clarify intention
      borderColor: '#f1f1f1', // Change or remove this line if you don't want visible grid lines at all
      xaxis: {
        lines: {
          show: false, // Keeps vertical grid lines visible
        },
      },
      yaxis: {
        lines: {
          show: false, // Disables horizontal grid lines
        },
      },
    },
  };

  if (!isBrowser) {
    return <div>Loading...</div>; // Or any other placeholder
  }

  return (
    <div>
      <div className="p-4 bg-white border border-gray-200 rounded-lg shadow">
        {isBrowser && <ReactApexChart options={options} series={series} type="bar" height={350} />}
      </div>
    </div>
  );
};

const BarChartContainer = () => {
  const seriesData = [
    41.2, // WhatsApp
    39.3, // Messenger
    36.0, // Facebook
    27.0, // Snapchat
    25.6, // Instagram
    12.5, // YouTube
    10.9, // Uber
    10.2, // Spotify
    8.3, // Twitter
    7.5, // Netflix
  ];
  const categories = [
    'WhatsApp',
    'Messenger',
    'Facebook',
    'Snapchat',
    'Instagram',
    'YouTube',
    'Uber',
    'Spotify',
    'Twitter',
    'Netflix',
  ];

  const filterConfig = [
    {
      id: 'timePeriod',
      default: 'today',
      label: 'Today',
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
      {/* <FilterBlock /> */}
      <div className="flex mb-6 justify-between">
        <Heading as="h3" className="mt-2">
          Toal Reviews
        </Heading>
        <GroupedDropdown filters={filterConfig} />
      </div>

      <ApexChart seriesData={seriesData} categories={categories} />
    </div>
  );
};

export default BarChartContainer;
