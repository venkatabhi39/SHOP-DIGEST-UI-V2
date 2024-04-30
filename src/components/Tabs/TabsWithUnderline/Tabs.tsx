import React, { useState } from 'react';
import { Heading } from '@/components/Heading';
interface Tab {
  id: string;
  title: string;
  content: JSX.Element;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className='py-6'>
                 <Heading as="h2" className="mb-2">
                 Today's Featured Shopify apps
          </Heading>
      
            <div className="border-b border-gray-200 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
                    {tabs.map(tab => (
                        <li key={tab.id} className="mr-2">
                            <button
                                className={`inline-block py-4 mr-6 rounded-t-lg ${activeTab === tab.id ? 'border-b-2 border-blue-500 text-blue-600' : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}
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
                        className={`py-4 rounded-lg  dark:bg-gray-800 ${activeTab === tab.id ? 'block' : 'hidden'}`}
                        id={tab.id}
                    >
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tabs;