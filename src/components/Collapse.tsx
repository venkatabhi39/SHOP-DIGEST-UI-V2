import { PropsWithChildren, ReactElement, useState } from 'react';

type Props = PropsWithChildren<{
  // eslint-disable-next-line no-unused-vars
  renderTrigger: (isOpen: boolean, onClick: () => void) => ReactElement;
}>;

export default function Collapse({ renderTrigger, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => setIsOpen(!isOpen);

  const btn = renderTrigger(isOpen, onClick);

  return (
    <div>
      {btn}
      {isOpen && children}
    </div>
  );
}
