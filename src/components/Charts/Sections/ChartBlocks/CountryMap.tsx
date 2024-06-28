// components/SessionsByCountryMap.tsx
import React, { FC, useEffect } from 'react';

import { Heading } from '@/components/Heading';
import 'svgmap/dist/svgMap.min.css';

import LegendList from '@/components/LegendList';
import AnchorLink from '@/components/Links/AcnhorLink';

interface SessionsByCountryMapProps {
  dashboard: DashboardPageData;
}

const SessionsByCountryMap: FC<SessionsByCountryMapProps> = ({ dashboard }) => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const SVGMap = require('svgmap');
    const previousMap = document.getElementsByClassName('svgMap-map-wrapper')[0];
    previousMap?.parentElement?.removeChild(previousMap);

    new SVGMap({
      targetElementID: 'map',
      colorMin: '#A4CAFE',
      colorMax: '#1A56DB',
      colorNoData: '#D1D5DB',
      flagType: 'image',
      flagURL: 'https://flowbite.com/application-ui/demo/images/flags/{0}.svg',
      data: {
        data: {
          visitors: {
            name: 'Visitors:',
            format: '{0}',
            thousandSeparator: ',',
            thresholdMax: 500000,
            thresholdMin: 0,
          },
          change: {
            name: 'Change:',
            format: '{0} %',
          },
        },
        applyData: 'visitors',
        values: dashboard.sessionsByCountryMap,
      },
    });
  }, [dashboard.sessionsByCountryMap]);

  return <div id="map" className="my-6" />;
};

export interface DashboardPageData {
  sessionsByCountryMap: {
    [countryCode: string]: {
      visitors: number;
      change: number;
    };
  };
}

const sampleData: DashboardPageData = {
  sessionsByCountryMap: {
    US: { visitors: 120000, change: 5 },
    IN: { visitors: 80000, change: 3 },
    DE: { visitors: 60000, change: -2 },
  },
};

const CountryMap: React.FC = () => {
  return (
    <div className="my-4 grid grid-cols-1 xl:gap-4  2xl:grid-cols-3">
      <div className="mb-4 rounded-lg bg-white p-4 border  dark:bg-gray-800 sm:p-6 xl:mb-0 xl:p-8 2xl:col-span-2">
        <div className="container mx-auto">
          <Heading as="h3" className="mb-0">
            Sessions by Country
          </Heading>
          <SessionsByCountryMap dashboard={sampleData} />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-1">
        <div className="flex flex-col justify-between  mb-4 h-full border rounded-lg bg-white p-4  dark:bg-gray-800 sm:p-6">
          <LegendList />
          <div className="border-t pt-4 pb-0  mt-2">
            <AnchorLink
              href="#"
              variant="default"
              size="small"
              classProp="mt-0 text-sm uppercase font-semibold"
            >
              View All Countries
            </AnchorLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryMap;
