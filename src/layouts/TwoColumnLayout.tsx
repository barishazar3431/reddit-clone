import React from 'react';

type Props = {
  left: React.ReactNode;
  right: React.ReactNode;
};

export default function TwoColumnLayout({ left, right }: Props) {
  return (
    <div className="flex justify-center items-start gap-5 px-3 py-5">
      <div className="w-[640px] lg:flex-1 flex-shrink flex flex-col gap-3">
        {left}
      </div>
      <div className="w-[310px] lg:hidden">
        {right}
      </div>
    </div>
  );
}
