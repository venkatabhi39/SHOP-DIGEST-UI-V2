import React from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import { Heading } from '@/components/Heading';
import GroupedDropdown from '@/components/FormFields/GroupedDropdown';
import { ButtonList } from '@/components/buttons/ButtonList';

// Dynamically import ReactApexChart with SSR disabled
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

type ButtonProps = {
  name: string;
  onClick: (data: any) => void; // If you are actually using 'data' in your onClick functions
};

interface ApexAreaChartProps {
  series: {
    name: string;
    data: number[];
  }[];
  categories: string[];
}

const ApexAreaChart: React.FC<ApexAreaChartProps> = ({ series, categories }) => {
  const options: ApexOptions = {
    chart: {
      height: 350,
      type: 'area',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: true,
      },
      stacked: true, // Enable stacking for the area chart
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'monotoneCubic',
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.8,
      },
    },
    title: {
      text: 'Price Trend',
      align: 'left',
    },
    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['transparent'],
        opacity: 0.5,
      },
    },
    markers: {
      size: 5,
      hover: {
        sizeOffset: 5,
      },
    },
    xaxis: {
      categories: categories,
      title: {
        text: 'Date',
      },
    },
    yaxis: {
      title: {
        text: 'Price',
      },
      min: 0,
      max: 100,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
  };

  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow">
      <ReactApexChart options={options} series={series} type="area" height={350} />
    </div>
  );
};

// const series = [
//   {
//     name: 'Series 1',
//     data: [31, 40, 28, 51, 42, 109, 100],
//   },
//   {
//     name: 'Series 2',
//     data: [11, 32, 45, 32, 34, 52, 41],
//   },
// ];

const categories = ['11 Feb', '13 Feb', '15 Feb', '17 Feb', '19 Feb', '21 Feb', '23 Feb'];

const AreaChart = () => {
  const [series, setSeries] = React.useState([
    {
      name: 'Series 1',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'Series 2',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ]);
  const filterConfig = [
    {
      id: 'apps',
      default: 'whatsapp',
      label: 'Whatsapp',
      items: [
        {
          label: 'Whatsapp',
          value: 'whatsapp',
        },
        {
          label: 'Facebook',
          value: 'facebook',
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

  const handleWeeklyClick = (data: any) => {
    setSeries([
      {
        name: 'Series 1',
        data: [11, 32, 45, 32, 34, 52, 41],
      },
      {
        name: 'Series 2',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ]);
  };

  const handleMonthlyClick = (data: any) => {
    setSeries([
      {
        name: 'Series 1',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'Series 2',
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ]);
  };
  const handleQuarterlyClick = (data: any) => {
    setSeries([
      {
        name: 'Series 1',
        data: [1, 32, 45, 32, 34, 52, 41],
      },
      {
        name: 'Series 2',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ]);
  };
  const handleYearlyClick = (data: any) => {
    setSeries([
      {
        name: 'Series 1',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'Series 2',
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ]);
  };

  const buttons: ButtonProps[] = [
    { name: 'Weekly', onClick: handleWeeklyClick },
    { name: 'Monthly', onClick: handleMonthlyClick },
    { name: 'Quarterly', onClick: handleQuarterlyClick },
    { name: 'Yearly', onClick: handleYearlyClick },
  ];

  return (
    <div className="container mx-auto">
      <div className="flex mb-6 justify-between">
        <Heading as="h3" className="mt-2">
          Toal Reviews
        </Heading>
        <GroupedDropdown filters={filterConfig} />
      </div>
      <div>
        <div className="flex flex-wrap gap-2 my-5">
          <ButtonList buttonProps={buttons} />
        </div>
      </div>
      <ApexAreaChart series={series} categories={categories} />
    </div>
  );
};

export default AreaChart;
