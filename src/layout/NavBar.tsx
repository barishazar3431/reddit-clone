import React from 'react';
import Card from '../components/ui/Card';
import { Link } from 'react-router-dom';
import DropDownButton from '../components/ui/DropDownButton';
import { AiOutlineDown } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai';

function NavBar() {
  return (
    <header className="bg-neutral-900 py-2 px-4 border-b-neutral-500 border-b flex items-center gap-1">
      <Link to={'/'} className="flex gap-2 pr-5">
        <div>
          <img
            src="https://assets.stickpng.com/images/6002f95551c2ec00048c6c70.png"
            alt="Reddit Logo"
            className="w-8"
          />
        </div>
        <span className="text-neutral-300  text-xl font-semibold tracking-wide">
          reddit
        </span>
      </Link>
      <DropDownButton>
        <div className="flex justify-between items-center gap-2">
          <AiFillHome className="text-2xl" />
          <span className="mr-40 text-sm font-semibold">Home</span>
          <AiOutlineDown className="text-white text-sm" />
        </div>
      </DropDownButton>
    </header>
  );
}

export default NavBar;
