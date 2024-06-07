import React from 'react';
import CustomTable from '@/components/Tables/CustomTable';
import { Heading } from '@/components/Heading';

const TableSection: React.FC = () => {
  return (
    <div>
      <Heading as="h2" className="mt-5 mb-5 text-gray-900 ">
        Python starter templates and themes Flowbite
      </Heading>
      <p>
        The studio-quality three-mic array is designed to reduce feedback, so The studio-quality
        three-mic array is designed to reduce feedback, so beamforming technology helps the mics
        ignore background noise. Which beamforming technology helps the mics ignore background
        noise. Which means everyone hears you - not what's going on around you means everyone hears
        you - not what's going on around you.
      </p>
      <CustomTable />
    </div>
  );
};

export default TableSection;
