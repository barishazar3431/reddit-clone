import React, { useEffect, useRef } from 'react';
import { CiSearch } from 'react-icons/ci';
import useDropDown from '../../hooks/useDropDown';
import dummyData from '../../assets/DummyData';

export default function HeaderSearchBar() {
  const { dropDownRef, isShown, setIsShown } = useDropDown();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyEvent = (event: KeyboardEvent) => {
      const inputElement = inputRef.current;
      if (!inputElement) return;
      if (event.key === 'Escape') {
        inputElement.blur();
        return;
      }
      if ((event.target as HTMLElement).closest('input, textarea, select'))
        return;

      event.preventDefault();
      if (
        event.key === '?' ||
        event.key === '/' ||
        (event.ctrlKey && event.key === 'k')
      ) {
        inputElement.focus();
      }
    };
    document.addEventListener('keydown', handleKeyEvent);

    return () => {
      document.removeEventListener('keydown', handleKeyEvent);
    };
  }, []);

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
      className="relative flex-1 mx-3 sm:mx-0"
    >
      <label htmlFor="search">
        <CiSearch className="absolute text-2xl -translate-y-1/2 top-1/2 left-3 text-neutral-500 bg-none" />
      </label>
      <input
        ref={inputRef}
        id="search"
        type="text"
        className="w-full px-5 py-2 pl-10 text-sm rounded-full input"
        placeholder="Search Reddit"
      />

      {isShown && (
        <div className="absolute left-0 right-0 py-3 mt-1 bg-white rounded-sm min-w-max dark:bg-neutral-900">
          <p className="px-4 mb-3 text-sm font-semibold text-neutral-600 dark:text-neutral-300">
            Communities
          </p>
          <ul>
            {dummyData.searchItems.map((item) => (
              <li className="flex items-center gap-2 px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                <img src={item.src} alt="" className="w-6 h-6 rounded-full " />
                <div className="flex flex-col">
                  <span className="text-sm font-bold dark:text-neutral-300">
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
