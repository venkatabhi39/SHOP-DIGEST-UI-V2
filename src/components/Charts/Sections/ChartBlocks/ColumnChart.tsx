import React from 'react';
import classNames from 'classnames';
import { Heading } from '@/components/Heading';
import styles from '@/components/FormFields/Dropdown.module.scss';
import dynamic from 'next/dynamic';
import Dropdown from '@/components/FormFields/Dropdown';
import AnchorLink from '@/components/Links/AcnhorLink';
// Dynamically import ReactApexChart with SSR disabled
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ColumnChart = () => {
  const options = {
    chart: {
      type: 'bar',
      fontFamily: 'Inter, sans-serif',
      height: 250,
      width: '100%',
      toolbar: {
        show: false, // Hides the toolbar
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '40%',
        endingShape: 'rounded',
        borderRadius: 3, // Sets the border radius for bars
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yaxis: {
      // title: {
      //   text: 'Average per month',
      // },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + ' units';
        },
      },
    },
    colors: ['#2f59de', '#f5b889'],
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

  const series = [
    {
      name: 'Previous Month',
      data: [44, 55, 57, 56, 61, 58, 63],
    },
    {
      name: 'Current Month',
      data: [76, 85, 101, 98, 87, 105, 91],
    },
  ];

  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg">
      <Heading as="h3" className="mt-0 text-center text-base">
        Average per month
      </Heading>
      <ReactApexChart options={options} series={series} type="bar" height={260} />
      <div className="flex justify-between items-center">
        <div>
          <Dropdown
            //icon={<ImCalendar />}
            classes={(classNames(styles.smDropdownContainer), 'active:!ring-0 focus:!ring-0')}
            value={'last7days'}
            //onChange={newCategory => setCategory(newCategory)}
            label="Last 7 days"
            items={[
              {
                label: 'Last 7 days',
                value: 'last7days',
              },
              {
                label: 'Last 1 Month',
                value: 'last1month',
              },
            ]}
          />
        </div>

        <AnchorLink
          href="#"
          variant="default"
          size="small"
          classProp="mt-0 text-sm uppercase font-semibold"
        >
          Leads Report
        </AnchorLink>
      </div>
    </div>
  );
};

export default ColumnChart;
