import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isShown: boolean;
};

export default function DropDownTriggerButton({
  onClick,
  isShown,
  children,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`${
        isShown
          ? 'border-neutral-100 dark:border-neutral-700'
          : 'border-transparent'
      } border hover:border-neutral-100 dark:hover:border-neutral-700  py-1 px-3 rounded-sm`}
    >
      {children}
    </button>
  );
}
