import React from 'react';

type Props = {
  children: React.ReactNode;
  size?: keyof typeof containerSize; 
};

const containerSize = {
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
};

export default function Container({ children, size='md' }: Props) {
  return (
    <div className={`${containerSize[size]} mx-auto w-[calc(100%-1rem)]`}>{children}</div>
  );
}
