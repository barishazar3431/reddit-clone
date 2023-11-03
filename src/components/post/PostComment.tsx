import React, { useState } from 'react';
import AddCommentForm from './AddCommentForm';
import { Link } from 'react-router-dom';
import VoteButtons from './VoteButtons';
import PostButton from './PostButton';
import { GoComment } from 'react-icons/go';
import { isButtonElement } from 'react-router-dom/dist/dom';
import { BiMoveVertical } from 'react-icons/bi';
import { CgNametag } from 'react-icons/cg';

type Props = {
  children?: React.ReactNode;
};

export default function PostComment({ children }: Props) {
  const [showChildren, setShowChildren] = useState(true);

  const toggleShowChildren = () => {
    setShowChildren((prevState) => !prevState);
  };

  return (
    <div className="relative mx-3">
      <button
        onClick={toggleShowChildren}
        className="absolute bottom-0 top-14 left-6 -translate-x-1/2 before:static before:block before:w-[2px]
       before:bg-neutral-300 before:hover:bg-blue-600 before:h-full before:mx-1 "
      ></button>

      <div className={`flex items-start transition ${!showChildren ? 'translate-x-6' : ''}`}>
        {!showChildren && (
          <button
            onClick={toggleShowChildren}
            className="absolute -left-5 top-3"
          >
            <BiMoveVertical className="text-2xl" />
          </button>
        )}
        <div
          className={`w-12 h-12 rounded-full flex-shrink-0 bg-neutral-200 dark:bg-neutral-700 z-10}`}
        >
          <img
            src="https://styles.redditmedia.com/t5_1npj8v/styles/profileIcon_snoo978ffaae-2c70-4f7e-bbbe-4f5df096419e-headshot.png?width=256&height=256&crop=256:256,smart&s=397dd6215c19f6b869b26527013737c91f58f30b"
            alt=""
            className="p-1"
          />
        </div>
        <div className="mt-3">
          <div className="mb-3">
            <Link to="/user/1" className="text-sm font-bold mr-1">
              John Doe
            </Link>
            <span className="text-xs text-neutral-500 mr-1">&#x2022;</span>
            <span className="text-neutral-500 text-xs"> 2 hours ago</span>
          </div>
          {showChildren && (
            <div className="">
              <p className="whitespace-pre-line mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                officiis pariatur,
                <br />
                <br />
                corporis quaerat est inventore libero tenetur, iste facilis odit
                placeat ducimus! Quo voluptates quis unde, laudantium rerum iure
                voluptatibus!
              </p>
              <footer className="text-neutral-500 flex items-center gap-2">
                <VoteButtons upvotes={87} orientation="horizontal" />
                <PostButton
                  icon={<GoComment className="text-2xl" />}
                  text={<p className="text-xs font-bold">Reply</p>}
                />
              </footer>
            </div>
          )}
        </div>
      </div>
      <div className="ml-8 mt-4">{showChildren && children}</div>
    </div>
  );
}
