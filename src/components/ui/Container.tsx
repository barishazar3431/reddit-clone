import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div className="max-w-5xl mx-auto w-[calc(100%-1rem)]">{children}</div>
  );
}
