import React, { useEffect, useRef } from 'react';
import { CiSearch } from 'react-icons/ci';
import useDropDown from '../../hooks/useDropDown';
import dummyData from '../../assets/DummyData';

export default function HeaderSearchBar() {
  const { dropDownRef, isShown, setIsShown } = useDropDown();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyEvent = (event: KeyboardEvent) => {
      if (event.key === '?' || event.key === '/') {
        inputRef.current?.focus();
      } else if (event.key === 'Escape') {
        inputRef.current?.blur();
      }
    };
    document.addEventListener('keyup', handleKeyEvent);

    return () => {
      document.removeEventListener('keyup', handleKeyEvent);
    };
  }, [inputRef]);

  const handleSearchBarFocus = () => {
    setIsShown(true);
  };

  const handleSearchBarBlur = () => {
    setIsShown(false);
  };

  return (
    <div
      ref={dropDownRef}
      onFocus={handleSearchBarFocus}
      onBlur={handleSearchBarBlur}
      className="relative flex-1 mx-3"
    >
      <label htmlFor="search">
        <CiSearch className="text-2xl absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500 bg-none" />
      </label>
      <input
        ref={inputRef}
        id="search"
        type="text"
        className="input w-full py-2 px-5 pl-10 text-sm rounded-full"
        placeholder="Search Reddit"
      />

      {isShown && (
        <div className="absolute left-0 right-0 min-w-max mt-1 bg-white dark:bg-neutral-900 rounded-sm py-3">
          <p className="text-neutral-600 dark:text-neutral-300 font-semibold text-sm px-4 mb-3">
            Communities
          </p>
          <ul>
            {dummyData.searchItems.map((item) => (
              <li className="px-4 py-2 hover:bg-neutral-100 flex items-center gap-2">
                <img src={item.src} alt="" className="w-6 h-6 rounded-full " />
                <div className="flex flex-col">
                  <span className="font-bold text-sm dark:text-neutral-300">
                    {item.name}
                  </span>
                  <span className="text-xs text-neutral-500">
                    Community &#x2022; {item.memberCount} members
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
