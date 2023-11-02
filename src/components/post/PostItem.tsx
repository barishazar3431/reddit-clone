import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiUpvote } from 'react-icons/bi';
import { BiDownvote } from 'react-icons/bi';
import { GoComment } from 'react-icons/go';
import { LiaShareSolid } from 'react-icons/lia';
import dummyData from '../../assets/DummyData';

type Props = (typeof dummyData.posts)[0];

export default function PostItem({
  userImgSource,
  userName,
  upvotes,
  content,
  subredditName,
  title,
  postTime,
  commentCount,
  subredditLink,
}: Props) {
  const navigate = useNavigate();

  const handleNavigate = (event: React.MouseEvent) => {
    if (
      event.target instanceof HTMLElement &&
      event.target.closest('button, a')
    )
      return; //If clicked element is a button or a, ignore the navigation to the post.
    navigate('/posts/12');
  };

  return (
    <div
      onClick={handleNavigate}
      className="bg-white dark:bg-neutral-900 border border-transparent hover:border-black dark:hover:border-neutral-500
       flex gap-3 p-2 pb-0 rounded-md cursor-pointer"
    >
      <div className="flex flex-col gap-1 items-center">
        <button>
          <BiUpvote className="text-neutral-500  text-2xl hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-red-500" />
        </button>
        <span className="font-bold text-xs dark:text-neutral-300">
          {upvotes}
        </span>
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
          <Link
            to={subredditLink}
            className="text-sm font-bold dark:text-neutral-300 hover:underline"
          >
            {subredditName}
          </Link>
          <span className="text-neutral-500 text-xs">
            &#x2022; Posted by {userName} {postTime}
          </span>
        </header>
        <div className="mt-2 mb-3 dark:text-neutral-300">
          <Link to="/posts/12" className="text-lg font-bold">
            {title}
          </Link>
          <p className="mt-3">{content}</p>
        </div>
        <footer className="flex text-neutral-500 gap-1 -ml-1">
          <button className="flex gap-1 items-center hover:bg-neutral-200 dark:hover:bg-neutral-800 py-2 px-1">
            <GoComment className="text-2xl" />
            <span className="text-xs font-bold">{commentCount} Comments</span>
          </button>
          <button className="flex gap-1 items-center hover:bg-neutral-200 dark:hover:bg-neutral-800 py-2 px-1">
            <LiaShareSolid className="text-2xl" />
            <span className="text-xs font-bold">Share</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
