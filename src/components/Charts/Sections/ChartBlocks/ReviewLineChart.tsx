import React from 'react';
//import Chart from 'react-apexcharts';
import dynamic from 'next/dynamic';
import { Heading } from '@/components/Heading';
import GroupedDropdown from '@/components/FormFields/GroupedDropdown';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
interface LineChartProps {
  title: string;
  data: {
    name: string;
    data: number[];
  }[];
  categories: string[];
}

const LineChart: React.FC<LineChartProps> = ({ title, data, categories }) => {
  const borderColor = '#eceef2';
  const labelColor = '#6B7280';
  const opacityFrom = 0.45;
  const opacityTo = 0;
  const options = {
    chart: {
      type: 'line',
      height: 350,
      fontFamily: 'Inter, sans-serif',
      foreColor: labelColor,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    title: {
      text: title,
      align: 'left',
    },
    stroke: {
      curve: 'smooth',
      width: 2, // Set the line thickness here
    },
    tooltip: {
      style: {
        fontSize: '14px',
        fontFamily: 'Inter, sans-serif',
      },
      x: {
        format: 'MMM yyyy',
      },
    },
    grid: {
      show: true,
      borderColor: borderColor,
      strokeDashArray: 1,
      padding: {
        left: 35,
        bottom: 15,
      },
    },
    markers: {
      size: 5,
      strokeColors: '#ffffff',
      hover: {
        size: undefined,
        sizeOffset: 3,
      },
    },
    xaxis: {
      categories: categories,
      title: {
        text: 'Days',
        style: {
          fontSize: '16px',
          fontWeight: 500,
        },
      },
      labels: {
        style: {
          colors: [labelColor],
          fontSize: '14px',
          fontWeight: 500,
        },
      },
      axisBorder: {
        color: borderColor,
      },
      axisTicks: {
        color: borderColor,
      },
      crosshairs: {
        show: true,
        position: 'back',
        stroke: {
          color: borderColor,
          width: 1,
          dashArray: 10,
        },
      },
    },
    yaxis: {
      title: {
        text: 'Reviews',
        style: {
          fontSize: '16px',
          fontWeight: 500,
        },
      },
      labels: {
        style: {
          colors: [labelColor],
          fontSize: '14px',
          fontWeight: 400,
        },
        formatter: function (value) {
          return '$' + value;
        },
      },
    },
    legend: {
      fontSize: '14px',
      fontWeight: 500,
      fontFamily: 'Inter, sans-serif',
      labels: {
        colors: [labelColor],
      },
      itemMargin: {
        horizontal: 10,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          xaxis: {
            labels: {
              show: false,
            },
          },
        },
      },
    ],
  };

  return <ReactApexChart options={options} series={data} type="line" height={480} />;
};

const ReviewLineChart = () => {
  const chartData = {
    title: '',
    data: [
      { name: 'Whatsapp', data: [1, 3, 10] },
      { name: 'Youtube', data: [0.5, 2, 5, 10] },
      { name: 'Twitter', data: [0.1, 1, 3, 5, 7] },
      { name: 'Netflix', data: [0, 0.5, 2, 3, 5, 7] },
    ],
    categories: ['7', '14', '30', '2M', '1yr', '7yr'],
  };
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

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <Heading as="h3" className="mt-2">
          Toal Reviews
        </Heading>
        <GroupedDropdown filters={filterConfig} />
      </div>

      <LineChart title={chartData.title} data={chartData.data} categories={chartData.categories} />
    </div>
  );
};

export default ReviewLineChart;
