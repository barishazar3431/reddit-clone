import React, { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

type Props = {};

export default function CreatePost({}: Props) {
  const navigate = useNavigate();

  const navigateToSubmit = (event: MouseEvent | FormEvent) => {
    event.preventDefault();
    navigate('submit');
  };

  return (
    <div className="flex gap-3 items-center w-full bg-white dark:bg-neutral-900  px-3 py-1">
      <Link to="/profile" className="h-12 w-12 rounded-full relative">
        <img
          src="https://styles.redditmedia.com/t5_ik8je/styles/profileIcon_snoo4ee04b02-3619-49be-8387-d11cdc0120d8-headshot-f.png?width=256&height=256&crop=256:256,smart&s=e85f826adcbf73474ca9b8afee6c32cb37201a63"
          alt="Profile"
          className="absolute -top-1"
        />
      </Link>
      <form  className="flex-1" onSubmit={navigateToSubmit}>
        <input
          onClick={navigateToSubmit}
          type="text"
          className="input w-full px-3 py-1 rounded-md"
          placeholder="Create Post"
        />
      </form>
    </div>
  );
}
