import classNames from 'classnames';
import { DropdownItem, DropdownProps, Dropdown as FbDropdown } from 'flowbite-react';
import React from 'react';

interface IDropdownProps extends DropdownProps {
  items: any[];
  size?: 'sm' | 'md';
}

export const Dropdown: React.FC<IDropdownProps> = ({
  items,
  size = 'md',
  inline = true,
  ...props
}) => {
  const itemClassName = classNames('rounded-0', {
    'px-3 py-1.5 text-sm': size === 'sm',

    'px-4 py-2 text-md': size === 'md',
  });

  return (
    <FbDropdown inline={inline} {...props}>
      {items.map(item => (
        <DropdownItem key={item.id} className={itemClassName}>
          {item.label}
        </DropdownItem>
      ))}
    </FbDropdown>
  );
};
