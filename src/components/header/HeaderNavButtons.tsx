import React from 'react';
import NotificationsDropDown from './NotificationsDropDown';
import { Link } from 'react-router-dom';
import { BiTrendingUp } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import ToolTip from '../ui/ToolTip';

export default function HeaderNavButtons() {
  return (
    <div className="flex gap-2 items-center text-2xl dark:text-white ml-4">
      <ToolTip content="Popular">
        <Link
          to={'/r/popular'}
          className="hover:bg-neutral-200 dark:hover:bg-neutral-800 p-1 block"
        >
          <BiTrendingUp />
        </Link>
      </ToolTip>

      <ToolTip content="Notifications">
        <NotificationsDropDown />
      </ToolTip>

      <ToolTip content="Create Post">
        <Link
          to={'/submit'}
          className="hover:bg-neutral-200 dark:hover:bg-neutral-800 p-1 block"
        >
          <AiOutlinePlus />
        </Link>
      </ToolTip>
    </div>
  );
}
