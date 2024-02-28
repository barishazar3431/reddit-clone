import React, { useEffect, useState } from 'react';
import useDropDown from '../../hooks/useDropDown';
import { AiOutlineDown, AiOutlineEye } from 'react-icons/ai';
import { SiSecurityscorecard } from 'react-icons/si';
import { CgProfile } from 'react-icons/cg';
import { FiLogOut } from 'react-icons/fi';
import DropDownTriggerButton from './DropDownTriggerButton';
import { Link } from 'react-router-dom';
import ToggleSwitchButton from '../ui/ToggleSwitchButton';
import { useTheme } from '../../contexts/ThemeContext';

type Props = {};

export default function ProfileDropDown({}: Props) {
  const { dropDownRef, isShown, toggleIsShown } = useDropDown();
  const { isDarkTheme, toggleDarkTheme } = useTheme();

  const handleDarkThemeToggle = (event: React.MouseEvent) => {
    event.preventDefault();
    toggleDarkTheme();
  }

  return (
    <div ref={dropDownRef} className="relative ml-4 sm:ml-0">
      <DropDownTriggerButton onClick={toggleIsShown} isShown={isShown}>
        <div className="flex items-center">
          <img
            src="https://styles.redditmedia.com/t5_ik8je/styles/profileIcon_snoo4ee04b02-3619-49be-8387-d11cdc0120d8-headshot-f.png?width=256&height=256&crop=256:256,smart&s=e85f826adcbf73474ca9b8afee6c32cb37201a63"
            alt="Profile"
            className="w-8 rounded-full mr-1 relative bottom-[3px]"
          />
          <div className="flex flex-col mr-16 gap-[0.1rem] items-start lg:hidden">
            <span className="text-xs font-bold dark:text-white">John Doe</span>
            <div className="flex items-center gap-1">
              <SiSecurityscorecard className="text-xs text-red-600" />
              <span className="text-xs font-bold text-slate-400">
                11.3k karma
              </span>
            </div>
          </div>
          <AiOutlineDown className="text-sm text-neutral-400" />
        </div>
      </DropDownTriggerButton>

      {isShown && (
        <div className="absolute right-0 mt-2 w-64 max-h-[75vh] bg-white rounded-sm dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700">
          <div className="pb-3 border border-transparent border-b-neutral-200 dark:border-b-neutral-700">
            <div className="grid items-center grid-cols-12 pt-4 pb-3 font-bold text-neutral-400 dark:text-neutral-600">
              <CgProfile className="col-span-1 col-start-2 text-2xl" />
              <span className="col-span-7 col-start-4 text-sm">My Stuff</span>
            </div>
            <Link
              to={'/user/johndoe'}
              className="grid items-center grid-cols-12 py-3 font-semibold text-black dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              <span className="col-span-7 col-start-4 text-sm">Profile</span>
            </Link>
            <Link
              to={'/user/johndoe'}
              className="grid items-center grid-cols-12 py-3 font-semibold text-black dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              <span className="col-span-7 col-start-4 text-sm">
                User Settings
              </span>
            </Link>
          </div>

          <div className="pb-3 border border-transparent border-b-neutral-200 dark:border-b-neutral-700">
            <div className="grid items-center grid-cols-12 pt-4 pb-3 font-bold text-neutral-400 dark:text-neutral-600">
              <AiOutlineEye className="col-span-1 col-start-2 text-2xl" />
              <span className="col-span-7 col-start-4 text-sm">
                View Options
              </span>
            </div>

            <button onClick={handleDarkThemeToggle} className="block w-full">
              <div className="grid items-center grid-cols-12 py-3 font-semibold text-black dark:text-neutral-300 justify-items-start hover:bg-neutral-100 dark:hover:bg-neutral-800">
                <span className="col-span-6 col-start-4 text-sm">
                  Dark Mode
                </span>
                <div className="flex items-center col-span-3 col-start-10 text-2xl justify-self-center">
                  <ToggleSwitchButton
                    isChecked={isDarkTheme}
                    onChange={handleDarkThemeToggle}
                  />
                </div>
              </div>
            </button>
          </div>

          <div className="pb-3 mt-3 border border-transparent">
            <Link
              to={'/logout'}
              className="grid items-center grid-cols-12 py-3 font-semibold text-black dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              <FiLogOut className="col-span-2 col-start-2 text-2xl" />
              <span className="col-span-7 col-start-4 text-sm">Log Out</span>
            </Link>
            <div className="grid items-center grid-cols-12 pt-4 pb-3 font-bold text-neutral-400 dark:text-neutral-600">
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
