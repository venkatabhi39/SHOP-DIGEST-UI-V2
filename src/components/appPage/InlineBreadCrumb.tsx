import { ReactNode } from 'react';
import { IconType } from 'react-icons';

export default function InlineBreadCrumb({
  items,
}: {
  items: { icon?: IconType; content: ReactNode }[];
}) {
  return (
    <nav aria-label="Breadcrumb">
      <div className="[&_*]:align-middle text-gray-500 font-medium text-sm">
        {items.map(({ icon: Icon, content }, i) => (
          <>
            {Icon && <Icon className="inline-block mr-2 h-4 w-4" />}
            {content}
            {i !== items.length - 1 && (
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="mx-1 h-6 w-6 text-gray-400 md:mx-2 inline-block"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            )}
          </>
        ))}
      </div>
    </nav>
  );
}
