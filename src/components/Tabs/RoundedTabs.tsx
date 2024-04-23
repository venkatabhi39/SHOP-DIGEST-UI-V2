import { useState } from 'react';

interface ToggleButtonProps {
  options: string[];
}

const ToggleButtonGroup: React.FC<ToggleButtonProps> = ({ options }) => {
  const [selected, setSelected] = useState<string>(options[0]);

  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      {options.map(option => (
        <button
          key={option}
          type="button"
          className={`px-4 py-2 text-sm font-medium focus:z-10 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
            selected === option ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'
          } ${
            options.indexOf(option) === 0
              ? 'rounded-l-lg border border-gray-200'
              : options.indexOf(option) === options.length - 1
              ? 'rounded-r-lg border border-gray-200 border-l-0'
              : 'border-t border-b border-gray-200 border-l-0'
          }`}
          onClick={() => setSelected(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ToggleButtonGroup;
