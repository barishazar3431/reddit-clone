import React, { useState } from 'react';

type Props = {
  children: React.ReactNode;
  content: string;
  time?: number;
};

export default function ToolTip({ content, children, time = 500 }: Props) {
  const [isShown, setIsShown] = useState(false);

  let timeoutId: NodeJS.Timeout;

  const handleMouseEnter = () => {
    timeoutId = setTimeout(() => {
      setIsShown(true);
    }, time);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    setIsShown(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isShown && (
        <span className="absolute px-2 py-1 text-xs text-white -translate-x-1/2 rounded-md -bottom-8 left-1/2 bg-neutral-800 before:absolute before:rotate-45 before:w-2 before:h-2 before:left-1/2 before:-translate-x-1/2 before:-top-1 before:bg-neutral-800 whitespace-nowrap">
          {content}
        </span>
      )}
    </div>
  );
}
