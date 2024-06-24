import React from 'react';
import ColumnChart from './ChartBlocks/ColumnChart';

const AveragePerMonthBlock = () => {
  const charts = [
    {
      title: 'Average per Month',
      yTitle: 'Average per month',
      series: [
        { name: 'Previous Month', data: [44, 55, 57, 56, 61, 58, 63] },
        { name: 'Current Month', data: [76, 85, 101, 98, 87, 105, 91] },
      ],
    },
    {
      title: 'Average per Quarter',
      yTitle: 'Average per quarter',
      series: [
        { name: 'Previous Quarter', data: [65, 76, 73, 69, 80, 70, 90] },
        { name: 'Current Quarter', data: [85, 89, 108, 99, 91, 113, 110] },
      ],
    },
    {
      title: 'Average per Year',
      yTitle: 'Average per year',
      series: [
        { name: 'Previous Year', data: [78, 88, 95, 89, 95, 120, 110] },
        { name: 'Current Year', data: [95, 100, 120, 105, 110, 130, 125] },
      ],
    },
  ];

  return (
    <div className="flex flex-wrap justify-between">
      {charts.map((chart, index) => (
        <ColumnChart key={index} title={chart.title} series={chart.series} yTitle={chart.yTitle} />
      ))}
    </div>
  );
};

export default AveragePerMonthBlock;
