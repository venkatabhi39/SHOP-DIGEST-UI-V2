import { Field, Input } from '@headlessui/react';
import clsx from 'clsx';
import React from 'react';

interface TextInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const TextInput: React.FC<TextInputProps> = ({ placeholder = '', value, onChange, className }) => {
  return (
    <div className="w-full">
      <Field>
        <Input
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={clsx(
            'bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
            className,
          )}
        />
      </Field>
    </div>
  );
};

export default TextInput;
