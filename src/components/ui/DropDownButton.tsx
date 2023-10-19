import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function DropDownButton({ children }: Props) {
  return (
    <button className="text-white border border-transparent transition  hover:border hover:border-neutral-700 p-2 rounded-md">
      {children}
    </button>
  );
}
