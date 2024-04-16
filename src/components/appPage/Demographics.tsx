import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { type ReviewDistributionByCountry } from '@/services/appRating.service';

ChartJs.register(ArcElement, Tooltip, Legend);

type Props = { reviewsDistributionByCountry: ReviewDistributionByCountry };

const colors = ['#f97316', '#fb800f', '#fd8d08', '#fe9a02', '#ffa600'] as const;

export default function Demographics({ reviewsDistributionByCountry }: Props) {
  const sortedCountries = [...reviewsDistributionByCountry].sort((a, b) => b.count - a.count);
  const top4Countries = sortedCountries.slice(0, 4);
  const othersCount = sortedCountries.slice(5).reduce((prev, curr) => prev + curr.count, 0);

  return (
    <Doughnut
      className="max-w-[300px} max-h-[300px] mx-auto"
      options={{
        plugins: {
          legend: {
            position: 'right',
            // display: false,
          },
        },
        cutout: '70%',
        datasets: {
          doughnut: {},
        },
      }}
      data={{
        labels: top4Countries.map(item => item.country).concat('Others'),
        datasets: [
          {
            data: top4Countries.map(item => item.count).concat(othersCount),
            backgroundColor: colors,
            borderWidth: 3,
          },
        ],
      }}
    />
  );
}
