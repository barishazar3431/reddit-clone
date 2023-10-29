import React from 'react';
import { Link } from 'react-router-dom';



export default function HomeAside() {
  return (
    <aside className='bg-white dark:bg-neutral-900'>
      <div className='bg-[url("https://www.redditstatic.com/desktop2x/img/id-cards/home-banner@2x.png")] bg-contain bg-no-repeat h-10'></div>
      <div className='p-3'>
        <header className='flex justify-start items-center gap-3 mb-2'>
          <img src="https://www.redditstatic.com/desktop2x/img/id-cards/snoo-home@2x.png" alt="reddit" className='w-10 -mt-7' />
          <span className='font-semibold dark:text-neutral-200'>Home</span>
        </header>
        <p className='mb-5 pb-4 dark:text-neutral-200 border border-transparent border-b-neutral-200 dark:border-b-neutral-700'>
        Your personal Reddit frontpage. Come here to check in with your favorite communities.
        </p>
        <footer className='flex flex-col gap-3'>
          <Link to="#" className='btn-secondary flex justify-center'>Create Post</Link>
          <Link to="#" className='btn-secondary-outline flex justify-center'>Create Community</Link>
        </footer>
      </div>
    </aside>
  );
}
