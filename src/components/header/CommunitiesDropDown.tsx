import React, { useState, useRef } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { Link } from 'react-router-dom';
import { AiOutlineStar } from 'react-icons/ai';
import dummyData from '../../assets/DummyData';

export default function CommunitiesDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(dropDownRef, () => setIsOpen(false));

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative" ref={dropDownRef}>
      <button
        onClick={toggleIsOpen}
        className={`${
          isOpen ? 'border-neutral-700' : 'border-transparent'
        } border hover:border-neutral-700  py-1 px-3`}
      >
        <div className="flex text-white justify-between items-center gap-2">
          <AiFillHome className="text-2xl" />
          <span className="mr-40 text-sm font-light">Home</span>
          <AiOutlineDown className="text-sm" />
        </div>
      </button>
      {isOpen && (
        <div className=" absolute top-8 left-0 right-0  text-white bg-neutral-900 border border-t-transparent border-neutral-700 h-[30rem] overflow-auto">
          <input
            type="text"
            placeholder="Filter"
            className="bg-neutral-800 mt-4 mx-4 w-[calc(100%-2rem)]  py-1 px-2 text-sm border border-neutral-700 outline-none placeholder-neutral-500 hover:border-white focus:border-white"
          />
          <span className="text-[0.6rem] uppercase text-neutral-400 mt-4 mb-3 block ml-6">
            Your Communities
          </span>
          <ul>
            {dummyData.communities.map((community) => (
              <li className="px-5 py-1 hover:bg-neutral-800">
                <Link to={'/'} className="flex items-center">
                  <img
                    className="rounded-full w-7 mr-2"
                    src={community.src}
                    alt="#"
                  />
                  <span className="mr-auto">{community.name}</span>
                  <AiOutlineStar className="text-2xl text-neutral-500" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
