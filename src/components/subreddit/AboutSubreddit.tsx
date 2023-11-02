import React from 'react';
import { LuCakeSlice } from 'react-icons/lu';
import { Link } from 'react-router-dom';
type Props = {};

export default function AboutSubreddit({}: Props) {
  return (
    <div className="overflow-hidden bg-white dark:bg-neutral-900 border rounded-md border-neutral-300 dark:border-neutral-700">
      <div className="h-12 bg-blue-600"></div>
      <header className="flex flex-col gap-3 p-4 mb-2 border-b border-b-neutral-300 dark:border-b-neutral-700">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 rounded-full h-14 w-14">
            <img
              src="https://styles.redditmedia.com/t5_2w844/styles/communityIcon_krq4riav5m191.png?width=256&s=3bb045009d2a9d1d7543dc7afb7b53a0e6f18121"
              alt=""
              className="w-full h-full"
            />
          </div>
          <span className='dark:text-neutral-200'>r/NoStupidQuestions</span>
        </div>
        <p className="text-md dark:text-neutral-200">Ask Away.</p>
        <div className="flex items-center gap-3">
          <LuCakeSlice className="text-xl text-neutral-500" />
          <span className="text-sm text-neutral-500">Created Feb 2,2013</span>
        </div>
      </header>
      <div>
        <div className='flex flex-col items-center border-b border-b-neutral-300 dark:border-b-neutral-700 pb-2 dark:text-neutral-200'>
          <span>4.0m</span>
          <span>Members</span>
        </div>
      </div>
      <footer className='p-4'>
        <Link to='/submit' className='btn-secondary w-full justify-center'>Create Post</Link>
      </footer>
    </div>
  );
}
