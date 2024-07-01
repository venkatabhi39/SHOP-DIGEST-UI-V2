import React from 'react';
import dynamic from 'next/dynamic';
import { Heading } from '@/components/Heading';
import GroupedDropdown from '@/components/FormFields/GroupedDropdown';
import { ButtonList } from '@/components/buttons/ButtonList';
import GroupedButton from '@/components/buttons/GroupedButton';
import ApexChart from '@/components/Charts/chart';
import { formatNumber, formatToUSD } from '@/helpers/format-number';
import Image from 'next/image';
import Link from 'next/link';
import dashboard from '@/data/dashboard.json';

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

const ApexAreaChart: React.FC<ApexAreaChartProps> = () => {
  const borderColor = '#F3F4F6';
  const labelColor = '#6B7280';
  const opacityFrom = 0.45;
  const opacityTo = 0;

  const options: ApexCharts.ApexOptions = {
    stroke: {
      curve: 'smooth',
      width: 2, // Set the line thickness here
    },
    chart: {
      type: 'area',
      fontFamily: 'Inter, sans-serif',
      foreColor: labelColor,
      toolbar: {
        show: false,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom,
        opacityTo,
        type: 'vertical',
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      style: {
        fontSize: '14px',
        fontFamily: 'Inter, sans-serif',
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
      categories: dashboard.salesThisWeek.categories,
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
      labels: {
        style: {
          colors: [labelColor],
          fontSize: '14px',
          fontWeight: 500,
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
  const series = dashboard.salesThisWeek.series;

  return <ApexChart height={420} options={options} series={series} type="area" />;
};

const AreaChart: React.FC<ApexAreaChartProps> = () => {
  const handleWeeklyClick = (data: any) => {};
  const handleMonthlyClick = (data: any) => {};
  const handleQuarterlyClick = (data: any) => {};
  const handleYearlyClick = (data: any) => {};

  const buttons: ButtonProps[] = [
    { name: 'Weekly', onClick: handleWeeklyClick },
    { name: 'Monthly', onClick: handleMonthlyClick },
    { name: 'Quarterly', onClick: handleQuarterlyClick },
    { name: 'Yearly', onClick: handleYearlyClick },
  ];

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
    <div className="rounded-lg bg-white dark:bg-gray-800">
      <div className="mb-4 flex items-center justify-between">
        <Heading as="h3" className="mt-2">
          Toal Reviews
        </Heading>
        <GroupedDropdown filters={filterConfig} />
      </div>
      <div className="my-5">
        {/* <div className="flex flex-wrap gap-2 my-5">
          <ButtonList buttonProps={buttons} />
        </div> */}
        <GroupedButton options={['Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
      </div>
      <ApexAreaChart dashboard={dashboard} />
    </div>
  );
};

export default AreaChart;
