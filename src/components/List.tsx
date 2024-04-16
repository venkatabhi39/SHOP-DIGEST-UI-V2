import classNames from 'classnames';
import { PropsWithChildren, Children, ReactNode, HTMLAttributes, ComponentProps } from 'react';

type Props = PropsWithChildren<
  {
    listStyle?: 'disc' | 'decimal';
    listTitle?: ReactNode;
    ulClassName?: HTMLAttributes<HTMLUListElement>['className'];
  } & ComponentProps<'div'>
>;

export default function List({ listTitle, listStyle, ulClassName, children, ...props }: Props) {
  return (
    <div {...props}>
      {listTitle && <p className="mb-4">{listTitle}</p>}
      <ul
        className={classNames(
          'list ml-[1.875rem] space-y-[0.3125rem]',
          listStyle === 'disc' && 'list-disc',
          listStyle === 'decimal' && 'list-decimal',
          ulClassName,
        )}
      >
        {Children.map(children, (child, i) => (
          <li key={i}>{child}</li>
        ))}
      </ul>
    </div>
  );
}
