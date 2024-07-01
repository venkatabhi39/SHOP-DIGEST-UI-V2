import { useState } from 'react';
import classNames from 'classnames';

const TabSelector = ({ options }) => {
  const [activeTab, setActiveTab] = useState(options[0]);

  return (
    <div className="flex">
      {options.map((option, index) => (
        <button
          key={option}
          className={classNames(
            'py-2 px-4 text-sm  text-center border font-semibold',
            index === 0 ? 'rounded-tl-full rounded-bl-full' : '',
            index === options?.length - 1 ? 'rounded-tr-full rounded-br-full' : '',
            activeTab === option ? 'border bg-primary-800 text-white' : 'text-gray-600',
          )}
          onClick={() => setActiveTab(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default TabSelector;
