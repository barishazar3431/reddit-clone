import React from 'react';
import useDropDown from '../../hooks/useDropDown';
import { AiOutlineDown, AiOutlineEye } from 'react-icons/ai';
import { SiSecurityscorecard } from 'react-icons/si';
import { CgProfile } from 'react-icons/cg';
import { FiLogOut } from 'react-icons/fi';
import DropDownTriggerButton from './DropDownTriggerButton';
import { Link } from 'react-router-dom';

type Props = {};

export default function ProfileDropDown({}: Props) {
  const { dropDownRef, isShown, toggleIsShown } = useDropDown();
  return (
    <div ref={dropDownRef} className="relative ml-4">
      <DropDownTriggerButton onClick={toggleIsShown} isShown={isShown}>
        <div className="flex items-center">
          <img
            src="https://styles.redditmedia.com/t5_ik8je/styles/profileIcon_snoo4ee04b02-3619-49be-8387-d11cdc0120d8-headshot-f.png?width=256&height=256&crop=256:256,smart&s=e85f826adcbf73474ca9b8afee6c32cb37201a63"
            alt="Profile"
            className="w-8 rounded-full mr-1 relative bottom-[3px]"
          />
          <div className="flex flex-col mr-16 gap-[0.1rem] items-start">
            <span className="text-xs font-bold dark:text-white">John Doe</span>
            <div className="flex items-center gap-1">
              <SiSecurityscorecard className="text-red-600 text-xs" />
              <span className="text-xs text-slate-400 font-bold">
                11.3k karma
              </span>
            </div>
          </div>
          <AiOutlineDown className="text-sm text-neutral-400" />
        </div>
      </DropDownTriggerButton>

      {isShown && (
        <div className="absolute right-0 mt-2 w-64 max-h-[75vh] bg-white rounded-sm dark:bg-neutral-900">
          <div className="border border-transparent border-b-neutral-200 dark:border-b-neutral-700 pb-3">
            <div className="pt-4 pb-3 font-bold text-neutral-400 dark:text-neutral-600  grid grid-cols-12 items-center">
              <CgProfile className="text-2xl col-start-2 col-span-1" />
              <span className="text-sm col-start-4 col-span-7">My Stuff</span>
            </div>
            <Link
              to={'/user/johndoe'}
              className="py-3 font-semibold text-black dark:text-neutral-300  grid grid-cols-12 items-center hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              <span className="text-sm col-start-4 col-span-7">Profile</span>
            </Link>
            <Link
              to={'/user/johndoe'}
              className="py-3 font-semibold text-black dark:text-neutral-300  grid grid-cols-12 items-center hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              <span className="text-sm col-start-4 col-span-7">
                User Settings
              </span>
            </Link>
          </div>

          <div className="border border-transparent border-b-neutral-200 dark:border-b-neutral-700 pb-3">
            <div className="pt-4 pb-3 font-bold text-neutral-400 dark:text-neutral-600  grid grid-cols-12 items-center">
              <AiOutlineEye className="text-2xl col-start-2 col-span-1" />
              <span className="text-sm col-start-4 col-span-7">
                View Options
              </span>
            </div>

            <button className="block w-full">
              <div className="py-3 font-semibold text-black dark:text-neutral-300  grid grid-cols-12 items-center justify-items-start hover:bg-neutral-100 dark:hover:bg-neutral-800">
                <span className="text-sm col-start-4 col-span-7">
                  Dark Mode
                </span>
                <CgProfile className="text-2xl col-start-11 col-span-2" />
              </div>
            </button>
          </div>

          <div className="border border-transparent pb-3 mt-3">
            <Link
              to={'/logout'}
              className="py-3 font-semibold  text-black dark:text-neutral-300  grid grid-cols-12 items-center hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              <FiLogOut className="text-2xl col-start-2 col-span-2" />
              <span className="text-sm col-start-4 col-span-7">Log Out</span>
            </Link>
            <div className="pt-4 pb-3 font-bold text-neutral-400 dark:text-neutral-600  grid grid-cols-12 items-center">
              <span className="text-[0.7rem] col-start-2 col-span-10">
                Reddit, Inc. © 2023. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
