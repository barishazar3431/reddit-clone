import React from 'react';

type Props = {
  isChecked: boolean;
  handleInputToggle: (param: any) => void;
};

export default function ToggleSwitchButton({
  isChecked,
  handleInputToggle,
}: Props) {
  return (
    <label className="">
      <input
        type="checkbox"
        className="invisible w-0 h-0 absolute peer"
        checked={isChecked}
        onChange={handleInputToggle}
      />
      <div
        className="w-10 h-6 rounded-full bg-neutral-300 dark:bg-neutral-600 peer-checked:bg-blue-600 transition relative cursor-pointer
        before:w-5 before:h-5 before:bg-white before:absolute before:left-[2px] before:top-1/2 before:-translate-y-1/2  before:rounded-full 
        before:peer-checked:left-[calc(100%-2px)] before:peer-checked:-translate-x-full before:transition-all"
      ></div>
    </label>
  );
}
