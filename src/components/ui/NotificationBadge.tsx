import React from 'react';

type Props = {
  children: React.ReactNode;
  content: number;
  max?: number;
};

export default function NotificationBadge({
  children,
  content,
  max = 99,
}: Props) {
  const isShown = content > 0;

  return (
    <div className="relative">
      {isShown && (
        <span className="text-[0.6rem] text-white font-bold bg-red-600 borde  absolute top-1 right-0 -translate-y-1/2 translate-x-1/2 min-w-[1rem] h-4 px-1 rounded-full inline-flex justify-center items-center z-50 select-none">
          {content > max ? `${max}+` : content}
        </span>
      )}
      {children}
    </div>
  );
}
