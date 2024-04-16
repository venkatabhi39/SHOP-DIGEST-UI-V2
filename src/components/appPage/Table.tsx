import { PropsWithChildren, ReactNode } from 'react';

export default function Table({
  headings,
  children,
}: PropsWithChildren<{ headings: ReactNode[] }>) {
  return (
    <table className="w-full text-sm text-left border-t-2 border-t-primary">
      <thead className="text-sm capitalize bg-primary-50 [&_th]:font-semibold">
        <tr className="border-b">
          {headings.map((heading, i) => (
            <th scope="col" className="p-4 text-base" key={i}>
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-gray-500">{children}</tbody>
    </table>
  );
}
