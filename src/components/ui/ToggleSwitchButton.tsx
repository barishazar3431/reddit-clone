import React from 'react';

type Props = {
  isChecked: boolean;
  onChange: (param: any) => void;
};

export default function ToggleSwitchButton({
  isChecked,
  onChange,
}: Props) {
  return (
    <label>
      <input
        type="checkbox"
        className="absolute invisible w-0 h-0 peer"
        checked={isChecked}
        onChange={onChange}
      />
      <div
        className="w-10 h-6 rounded-full bg-neutral-300 dark:bg-neutral-600 peer-checked:bg-blue-600 transition relative cursor-pointer
        before:w-5 before:h-5 before:bg-white before:absolute before:left-[2px] before:top-1/2 before:-translate-y-1/2  before:rounded-full 
        before:peer-checked:left-[calc(100%-2px)] before:peer-checked:-translate-x-full before:transition-all"
      ></div>
    </label>
  );
}
