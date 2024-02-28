import React from 'react';
import { BiUpvote } from 'react-icons/bi';
import { BiDownvote } from 'react-icons/bi';

type Props = {
  upvotes: number,
  orientation: keyof typeof orientationStyles
};

const orientationStyles = {
  vertical: 'flex flex-col gap-1 items-center',
  horizontal: 'flex gap-1 items-center'
}

export default function VoteButtons({upvotes, orientation}: Props) {
  return (
    <div className={orientationStyles[orientation]}>
      <button>
        <BiUpvote className="text-neutral-500  text-2xl hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-red-500" />
      </button>
      <span className="font-bold text-sm dark:text-neutral-300">{upvotes}</span>
      <button>
        <BiDownvote className="text-neutral-500  text-2xl hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-blue-500" />
      </button>
    </div>
  );
}
