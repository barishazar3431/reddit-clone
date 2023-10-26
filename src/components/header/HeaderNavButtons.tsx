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
        <HeaderNavItem>
          <Link to={'/r/popular'}>
            <BiTrendingUp />
          </Link>
        </HeaderNavItem>
      </ToolTip>

      <ToolTip content="Notifications">
        <HeaderNavItem>
          <NotificationsDropDown />
        </HeaderNavItem>
      </ToolTip>

      <ToolTip content="Create Post">
        <HeaderNavItem>
          <Link to={'/submit'}>
            <AiOutlinePlus />
          </Link>
        </HeaderNavItem>
      </ToolTip>
    </div>
  );
}

type HeaderNavItemProps = {
  children: React.ReactNode;
};

function HeaderNavItem({ children }: HeaderNavItemProps) {
  return (
    <div className="hover:bg-neutral-200 dark:hover:bg-neutral-800 p-1">
      {children}
    </div>
  );
}
