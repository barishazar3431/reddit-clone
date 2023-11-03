import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { GoComment } from 'react-icons/go';
import { LiaShareSolid } from 'react-icons/lia';
import dummyData from '../../assets/DummyData';
import { LuHeading1 } from 'react-icons/lu';
import VoteButtons from './VoteButtons';
import PostButton from './PostButton';

type Props = (typeof dummyData.posts)[0] & { isClickable?: boolean };

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
  isClickable = true,
}: Props) {
  const navigate = useNavigate();

  const handleNavigate = (event: React.MouseEvent) => {
    if (
      event.target instanceof HTMLElement &&
      event.target.closest('button, a')
    )
      return; //If clicked element is a button or a, ignore the navigation to the post.
    navigate('/r/UnpopularOpinion/posts/1');
  };

  return (
    <article
      onClick={isClickable ? handleNavigate : undefined}
      className={`bg-white dark:bg-neutral-900 border border-transparent 
       flex gap-3 p-2 pb-0 rounded-md ${
         isClickable
           ? 'hover:border-black dark:hover:border-neutral-500 cursor-pointer'
           : ''
       } `}
    >
      <VoteButtons upvotes={123} orientation="vertical" />
      <div>
        <header className="flex items-center gap-1">
          {isClickable && (
            <>
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
            </>
          )}
          <span className="text-neutral-500 text-xs">
            {isClickable && <>&#x2022; </>}Posted by {userName} {postTime}
          </span>
        </header>
        <div className="mt-2 mb-3 dark:text-neutral-300">
          <div className="text-lg font-bold">
            {isClickable && <Link to="/posts/12">{title}</Link>}
            {!isClickable && <h1>{title}</h1>}
          </div>
          <p className="mt-3">{content}</p>
        </div>
        <footer className="flex text-neutral-500 gap-1 -ml-1">
          <PostButton
            isDisabled={!isClickable}
            icon={<GoComment className="text-2xl" />}
            text={
              <span className="text-xs font-bold">{commentCount} Comments</span>
            }
          />
          <PostButton
            icon={<LiaShareSolid className="text-2xl" />}
            text={<span className="text-xs font-bold">Share</span>}
          />
        </footer>
      </div>
    </article>
  );
}
