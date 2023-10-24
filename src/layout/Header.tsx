import React from 'react';
import { Link } from 'react-router-dom';
import CommunitiesDropDown from '../components/header/CommunitiesDropDown';
import HeaderSearchForm from '../components/header/HeaderSearchForm';
import { BiTrendingUp } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import NotificationsDropDown from '../components/header/NotificationsDropDown';
import NotificationBadge from '../components/ui/NotificationBadge';

function Header() {
  return (
    <header className="fixed w-full  bg-white dark:bg-neutral-900 py-[0.35rem] px-4 border-b-neutral-200 dark:border-b-neutral-700 border-b flex items-center gap-1">
      <Link to={'/'} className="flex gap-2 pr-5">
        <div>
          <img
            src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-reddit-circle-512.png"
            alt="Reddit Logo"
            className="w-8"
          />
        </div>
        <span className="dark:text-neutral-300 text-black font-medium  text-xl  tracking-wide">
          reddit
        </span>
      </Link>

      <CommunitiesDropDown />

      <HeaderSearchForm />
      <div className="flex gap-2 items-center text-2xl dark:text-white">
        <Link
          to={'/r/popular'}
          className="hover:bg-neutral-200 dark:hover:bg-neutral-800 p-1"
        >
          <BiTrendingUp />
        </Link>
        <NotificationsDropDown />

        <Link
          to={'/submit'}
          className="hover:bg-neutral-200 dark:hover:bg-neutral-800 p-1 block"
        >
          <AiOutlinePlus />
        </Link>
      </div>
      <div className="w-56"></div>
    </header>
  );
}

export default Header;
