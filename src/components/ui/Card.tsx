import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

function Card({ children }: CardProps) {
  return (
    <div className="p-2 bg-neutral-800 rounded-md border border-neutral-700">
      {children}
    </div>
  );
}

export default Card;
