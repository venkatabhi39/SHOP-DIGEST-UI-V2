import React, { useState } from 'react';
import { Heading } from '@/components/Heading';
import IconLink from '@/components/Links/IconLink';
import { LineDownRight } from '@/components/SvgIcons/IconList';

interface Tab {
  id: string;
  title: string;
  content: JSX.Element;
  heading: string;
  mainHeading: Boolean;
}

interface TabsProps {
  tabs: Tab[];
  linkHide: Boolean;
}

const Tabs: React.FC<TabsProps> = ({ tabs, linkHide }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [heading, setHeading] = useState('');

  React.useEffect(() => {
    let indexVal = tabs?.findIndex(tab => tab.id == activeTab);
    let hTitle = tabs[indexVal].heading;
    setHeading(hTitle);
  }, [activeTab]);

  return (
    <div className="pt-2 pb-4">
      {tabs[0]?.mainHeading && heading && (
        <Heading as="h4" className="mb-2">
          {heading}
        </Heading>
      )}

      <div className="border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
          {tabs.map(tab => (
            <li key={tab.id} className="mr-2">
              <button
                className={`inline-block py-4 mr-6 rounded-t-lg ${
                  activeTab === tab.id
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {tabs.map(tab => (
          <div
            key={tab.id}
            className={`py-4 rounded-lg  dark:bg-gray-800 ${
              activeTab === tab.id ? 'block' : 'hidden'
            }`}
            id={tab.id}
          >
            {tab.heading && (
              <Heading as="h4" className="mb-2">
                {tab.heading}
              </Heading>
            )}
            {tab.content}
            {!linkHide && (
              <p className="text-center">
                <IconLink
                  url="#"
                  targetAtt="_blank"
                  label="See More"
                  className="!text-blue-500 font-medium hover:!text-blue-800 mr-0"
                  svg={LineDownRight}
                  iconPlacement="right"
                />
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
