import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ReactNode;
  text?: React.ReactNode;
  isDisabled?: boolean;
};

export default function PostButton({
  icon,
  text,
  isDisabled = false,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`flex gap-1 items-center hover:bg-neutral-200 dark:hover:bg-neutral-800 py-2 px-1 
    ${isDisabled ? 'hover:bg-inherit dark:hover:bg-inherit' : ''}`}
      disabled={isDisabled}
    >
      {icon && icon}
      {text && text}
    </button>
  );
}
