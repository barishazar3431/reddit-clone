import React from 'react';
import { Link } from 'react-router-dom';
import CommunitiesDropDown from '../components/header/CommunitiesDropDown';


function NavBar() {
  return (
    <header className="fixed w-full bg-neutral-900 py-2 px-4 border-b-neutral-700 border-b flex items-center gap-1">
      <Link to={'/'} className="flex gap-2 pr-5">
        <div>
          <img
            src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-reddit-circle-512.png"
            alt="Reddit Logo"
            className="w-8"
          />
        </div>
        <span className="text-neutral-300  text-xl  tracking-wide">
          reddit
        </span>
      </Link>
      <CommunitiesDropDown />
      
    </header>
  );
}

export default NavBar;
