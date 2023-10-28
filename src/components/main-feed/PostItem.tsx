import React from 'react';
import { Link } from 'react-router-dom';
import { BiUpvote } from 'react-icons/bi';
import { BiDownvote } from 'react-icons/bi';
import { GoComment } from 'react-icons/go';
import { LiaShareSolid } from 'react-icons/lia';

type Props = {};

export default function PostItem({}: Props) {
  return (
    <Link
      to="#"
      className="bg-white dark:bg-neutral-900 border border-transparent hover:border-black dark:hover:border-neutral-500
       flex gap-3 p-2 pb-0 rounded-md"
    >
      <div className="flex flex-col gap-1 items-center">
        <button>
          <BiUpvote className="text-neutral-500  text-2xl hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-red-500" />
        </button>
        <span className="font-bold text-xs dark:text-neutral-300">432</span>
        <button>
          <BiDownvote className="text-neutral-500  text-2xl hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-blue-500" />
        </button>
      </div>
      <div>
        <header className="flex items-center gap-1">
          <img
            src="https://styles.redditmedia.com/t5_2tk0s/styles/communityIcon_v5b469kmb68b1.png?width=256&s=73d117baa4756f1cf092c67446f013bdf5c9bf32"
            alt=""
            className="w-5 rounded-full"
          />
          <span className="text-sm font-bold dark:text-neutral-300">r/unpopularopinion</span>
          <span className="text-neutral-500 text-xs">
            &#x2022; Posted by u/JohnDoe 4 hours ago
          </span>
        </header>
        <div className="mt-2 mb-3 dark:text-neutral-300">
          <span className="text-lg font-bold">
            French tourists are the worst
          </span>
          <p className="mt-3">
            I used to serve French tourists in NYC everyday and they were the
            worst, they had no manners and understanding of common etiquette.
            They’d yell, waste people’s time, make a mess, and not follow
            instructions that they said they understood. Now I’ve travelled to 3
            countries, currently in Japan and I’ve seen them do the same thing
            and annoy the staff here. They obviously don’t say anything but it’s
            annoying af to see. Not sure if they’re all like this but my god
          </p>
        </div>
        <footer className="flex text-neutral-500 gap-1 -ml-1">
          <button className="flex gap-1 items-center hover:bg-neutral-200 dark:hover:bg-neutral-800 py-2 px-1">
            <GoComment className="text-2xl" />
            <span className="text-xs font-bold">340 Comments</span>
          </button>
          <button className="flex gap-1 items-center hover:bg-neutral-200 dark:hover:bg-neutral-800 py-2 px-1">
            <LiaShareSolid className="text-2xl" />
            <span className="text-xs font-bold">Share</span>
          </button>
        </footer>
      </div>
    </Link>
  );
}
