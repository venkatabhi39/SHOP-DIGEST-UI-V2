import { ReactNode, useState } from 'react';
import classNames from 'classnames';

export type Props = {
  // eslint-disable-next-line no-unused-vars
  renderContent: (open: boolean) => ReactNode;
  collapsible?: boolean;
};

export default function Collapse({ renderContent, collapsible = true }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-2">
      {renderContent(open)}
      {collapsible && (
        <div>
          <button
            className="font-medium text-sm text-center inline-flex items-center text-primary-600 dark:text-primary-500"
            type="button"
            onClick={() => setOpen(!open)}
          >
            Show {open ? 'Less' : 'More'}{' '}
            <div
              className={classNames(
                'transition-all transform ml-2',
                !open ? 'rotate-0' : 'rotate-180',
              )}
            >
              <svg
                className="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
