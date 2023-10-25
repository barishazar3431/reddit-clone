import React from 'react';
import { CiSearch } from 'react-icons/ci';



export default function HeaderSearchForm() {
  return (
    <div className="relative flex-1 mx-3">
      <label htmlFor="search">
        <CiSearch className="text-2xl absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500 bg-none" />
      </label>
      <input
        id="search"
        type="text"
        className="input w-full py-2 px-5 pl-10 text-sm rounded-full"
        placeholder="Search Reddit"
      />
    </div>
  );
}
