import React from 'react';

type Props = {
  left: React.ReactNode;
  right: React.ReactNode;
};

export default function TwoColumnLayout({ left, right }: Props) {
  return (
    <div className="flex items-start justify-center gap-5"> 
      <div className="lg:flex-1 flex-shrink">
        {left}
      </div>
      <div className="w-[310px] flex-shrink-0 lg:hidden">
        {right}
      </div>
    </div>
  );
}
