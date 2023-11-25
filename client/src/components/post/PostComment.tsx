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
  const [areChildrenVisible, setAreChildrenVisible] = useState(true);
  const [isCommentFormVisible, setIsCommentFormVisible] = useState(false);

  const toggleChildrenVisibility = () => {
    setAreChildrenVisible((prevState) => !prevState);
  };

  const toggleCommentFormVisibility = () => {
    setIsCommentFormVisible((prevState) => !prevState);
  };

  return (
    <div className="relative mx-4">
      {areChildrenVisible && (
        <button
          onClick={toggleChildrenVisibility}
          className="absolute bottom-0 top-14 left-6 -translate-x-1/2 before:static before:block before:w-[2px]
       before:bg-neutral-300 before:hover:bg-blue-600 before:h-full before:mx-1 
        dark:before:bg-neutral-600 dark:before:hover:bg-white"
        ></button>
      )}

      <div
        className={`flex items-start transition ${
          !areChildrenVisible ? 'translate-x-8' : ''
        }`}
      >
        {!areChildrenVisible && (
          <button
            onClick={toggleChildrenVisibility}
            className="absolute -left-8 top-1/2 -translate-y-1/2"
          >
            <BiMoveVertical className="text-2xl dark:text-blue-800" />
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
            <Link to="/user/1" className="text-sm font-bold mr-1 dark:text-neutral-300">
              John Doe
            </Link>
            <span className="text-xs text-neutral-500 mr-1">&#x2022;</span>
            <span className="text-neutral-500 text-xs"> 2 hours ago</span>
          </div>
          {areChildrenVisible && (
            <div className="">
              <p className="whitespace-pre-line mb-3 dark:text-neutral-300">
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
                  onClick={toggleCommentFormVisibility}
                  icon={<GoComment className="text-2xl" />}
                  text={<p className="text-xs font-bold">Reply</p>}
                />
              </footer>
              {isCommentFormVisible && (
                <div className="px-3 mt-3">
                  <AddCommentForm
                    showCancelButton={true}
                    setIsCommentFormVisible={setIsCommentFormVisible}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="ml-8 mt-4">{areChildrenVisible && children}</div>
    </div>
  );
}
