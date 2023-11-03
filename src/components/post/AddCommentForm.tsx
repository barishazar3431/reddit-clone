import React, { useRef, useState } from 'react';

type Props = {};

export default function AddCommentForm({}: Props) {
  const [comment, setComment] = useState('');

  const handleInputChange = (event: React.SyntheticEvent) => {
    const inputValue = (event.target as HTMLTextAreaElement).value;
    setComment(inputValue);
  };

  const isButtonDisabled = comment.trim().length === 0;

  return (
    <div className="px-9 mt-6">
      <p className='mb-2 dark:text-neutral-300'>
        Comment as <span className='text-blue-600'>JohnDoe</span>
      </p>
      <form className="w-full border border-transparent focus-within:border-black dark:focus-within:border-white rounded-md overflow-hidden">
        <textarea
          placeholder="What are your thoughts?"
          name="comment-form"
          id="comment-form"
          rows={6}
          className="w-full px-5 pt-3 pb-7 outline-none border border-neutral-200 dark:border-neutral-700 border-b-transparent
          dark:border-b-transparent dark:text-neutral-300 rounded-t-md
          dark:bg-neutral-900 min-h-[10rem]"
          onChange={handleInputChange}
        ></textarea>
        <div className="py-1 px-3 flex justify-end items-center bg-neutral-100 dark:bg-neutral-800">
          <button disabled={isButtonDisabled} className="btn-secondary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
