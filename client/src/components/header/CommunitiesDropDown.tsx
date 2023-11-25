import React from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AiOutlineStar } from 'react-icons/ai';
import dummyData from '../../assets/DummyData';
import useDropDown from '../../hooks/useDropDown';
import DropDownTriggerButton from './DropDownTriggerButton';

export default function CommunitiesDropDown() {
  const { dropDownRef, isShown, toggleIsShown } = useDropDown();

  return (
    <div className="relative" ref={dropDownRef}>
      <DropDownTriggerButton onClick={toggleIsShown} isShown={isShown}>
        <div className="flex items-center justify-between gap-2 text-black dark:text-white">
          <AiFillHome className="text-2xl" />
          <span className="mr-40 text-sm font-light md:hidden">Home</span>
          <AiOutlineDown className="text-sm" />
        </div>
      </DropDownTriggerButton>
      {isShown && (
        <div className=" absolute top-8 left-0 right-0 min-w-fit bg-white dark:bg-neutral-900 border border-t-transparent dark:border-t-transparent border-neutral-200 dark:border-neutral-700 h-[30rem] overflow-auto">
          <input
            autoFocus
            type="text"
            placeholder="Filter"
            className="input mt-4 mx-4 w-[calc(100%-2rem)]  py-1 px-2 text-sm "
          />
          <span className="text-[0.6rem] uppercase text-neutral-500 dark:text-neutral-400 mt-4 mb-3 block ml-6">
            Your Communities
          </span>
          <ul>
            {dummyData.communities.map((community) => (
              <li className="px-5 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                <Link to={'/'} className="flex items-center">
                  <img
                    className="w-5 mr-2 rounded-full"
                    src={community.src}
                    alt="#"
                  />
                  <span className="mr-auto text-sm text-neutral-700 dark:text-white">
                    {community.name}
                  </span>
                  <AiOutlineStar className="text-2xl text-neutral-400 dark:text-neutral-500" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
