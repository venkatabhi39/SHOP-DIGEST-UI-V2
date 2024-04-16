import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<
  {
    id: string;
  } & Pick<JSX.IntrinsicElements['input'], 'value' | 'onChange' | 'checked'>
>;

export default function RadioSwitchButton({ id, value, onChange, children, checked }: Props) {
  return (
    <div className="relative">
      <input
        className="opacity-0 fixed w-0 peer"
        type="radio"
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <label
        htmlFor={id}
        className="cursor-pointer inline-block bg-white peer-checked:bg-primary-50 peer-checked:ring-2 peer-checked:ring-primary-600 border border-sdGray-border px-5 py-2.5 rounded"
      >
        {children}
      </label>
    </div>
  );
}
