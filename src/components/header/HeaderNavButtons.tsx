import React from 'react';
import NotificationsDropDown from './NotificationsDropDown';
import { Link } from 'react-router-dom';
import { BiTrendingUp } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import ToolTip from '../ui/ToolTip';

export default function HeaderNavButtons() {
  return (
    <div className="flex items-center gap-2 ml-4 text-2xl dark:text-white">
      <ToolTip content="Popular">
        <Link
          to={'/r/popular'}
          className="block p-1 hover:bg-neutral-200 dark:hover:bg-neutral-800"
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
          className="block p-1 hover:bg-neutral-200 dark:hover:bg-neutral-800"
        >
          <AiOutlinePlus />
        </Link>
      </ToolTip>
    </div>
  );
}
