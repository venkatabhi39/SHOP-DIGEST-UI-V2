import React from 'react';

// Interfaces
export interface Milestone {
  type: 'liveProduct' | 'firstCustomer' | 'firstPMF';
  month: number;
}

export interface Company {
  name: string;
  milestones: Milestone[];
}

export interface TimelineProps {
  companies: Company[];
}

const iconMap = {
  liveProduct: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L22 20H2L12 2Z" fill="#FFD700" />
    </svg>
  ),
  firstCustomer: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" fill="green" />
    </svg>
  ),
  firstPMF: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="red" />
    </svg>
  ),
};

const Legend: React.FC = () => {
  return (
    <div className="flex items-center space-x-4">
      {Object.entries(iconMap).map(([key, icon], index) => (
        <div key={index} className="flex items-center space-x-2">
          <div className="w-6 h-6">{icon}</div>
          <span className="text-sm font-medium capitalize">{getLabel(key)}</span>
        </div>
      ))}
    </div>
  );
};

function getLabel(key: string): string {
  switch (key) {
    case 'liveProduct':
      return 'Live product';
    case 'firstCustomer':
      return 'First customer';
    case 'firstPMF':
      return 'First felt PMF';
    default:
      return '';
  }
}

const Timeline: React.FC<TimelineProps> = ({ companies }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-300 border rounded">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              App
            </th>
            {Array.from({ length: 14 }, (_, i) => (
              <th
                key={i}
                scope="col"
                className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Month {i + 1}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {companies.map((company, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {company.name}
              </td>
              {Array.from({ length: 14 }, (_, idx) => (
                <td key={idx} className="px-2 py-4 text-center text-sm text-gray-500">
                  {company.milestones.map((milestone, mIdx) =>
                    milestone.month === idx + 1 ? (
                      <span key={mIdx} className={`font-bold ${getIconClasses(milestone.type)}`}>
                        {iconMap[milestone.type]}
                      </span>
                    ) : null,
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function getIconClasses(type: string): string {
  switch (type) {
    case 'liveProduct':
      return 'text-blue-500';
    case 'firstCustomer':
      return 'text-green-500';
    case 'firstPMF':
      return 'text-red-500';
    default:
      return '';
  }
}

// Sample data
const sampleData: Company[] = [
  {
    name: 'Sprig',
    milestones: [
      { type: 'liveProduct', month: 3 },
      { type: 'firstPMF', month: 12 },
    ],
  },
  {
    name: 'Gusto',
    milestones: [
      { type: 'liveProduct', month: 2 },
      { type: 'firstCustomer', month: 5 },
      { type: 'firstPMF', month: 14 },
    ],
  },
  {
    name: 'Vanta',
    milestones: [
      { type: 'liveProduct', month: 1 },
      { type: 'firstCustomer', month: 6 },
      { type: 'firstPMF', month: 18 },
    ],
  },
  {
    name: 'Ramp',
    milestones: [
      { type: 'liveProduct', month: 4 },
      { type: 'firstCustomer', month: 7 },
      { type: 'firstPMF', month: 10 },
    ],
  },
  {
    name: 'Canva',
    milestones: [
      { type: 'liveProduct', month: 5 },
      { type: 'firstCustomer', month: 12 },
      { type: 'firstPMF', month: 14 },
    ],
  },
  {
    name: 'Zip',
    milestones: [
      { type: 'liveProduct', month: 2 },
      { type: 'firstCustomer', month: 8 },
    ],
  },
  {
    name: 'Looker',
    milestones: [
      { type: 'liveProduct', month: 3 },
      { type: 'firstCustomer', month: 9 },
      { type: 'firstPMF', month: 12 },
    ],
  },
  {
    name: 'GitHub',
    milestones: [
      { type: 'liveProduct', month: 1 },
      { type: 'firstCustomer', month: 4 },
      { type: 'firstPMF', month: 8 },
    ],
  },
  {
    name: 'Retool',
    milestones: [
      { type: 'liveProduct', month: 6 },
      { type: 'firstCustomer', month: 10 },
      { type: 'firstPMF', month: 14 },
    ],
  },
  {
    name: 'Census',
    milestones: [
      { type: 'liveProduct', month: 2 },
      { type: 'firstCustomer', month: 5 },
      { type: 'firstPMF', month: 13 },
    ],
  },
];

const TimeLineTable: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-xl font-bold mb-4">App Milestone Timeline</h1>
      <div className="mt-2 mb-7">
        <Legend />
      </div>

      <Timeline companies={sampleData} />
    </div>
  );
};

export default TimeLineTable;
