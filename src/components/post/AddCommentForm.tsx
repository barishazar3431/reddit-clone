import React, { useRef, useState } from 'react';

type Props = {
  showCancelButton?: boolean;
  setIsCommentFormVisible?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AddCommentForm({
  showCancelButton = false,
  setIsCommentFormVisible,
}: Props) {
  const [comment, setComment] = useState('');

  const handleInputChange = (event: React.SyntheticEvent) => {
    const inputValue = (event.target as HTMLTextAreaElement).value;
    setComment(inputValue);
  };

  const isButtonDisabled = comment.trim().length === 0;

  return (
    <>
      <p className="mb-2 dark:text-neutral-300">
        Comment as <span className="text-blue-600">JohnDoe</span>
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
        <div className="py-1 px-3 flex justify-end gap-3 items-center bg-neutral-100 dark:bg-neutral-800">
          {showCancelButton && setIsCommentFormVisible && (
            <button
              onClick={() => setIsCommentFormVisible(false)}
              className="text-blue-600 font-bold px-3 py-1 hover:bg-neutral-300 dark:hover:bg-neutral-700 rounded-full"
              type="button"
            >
              Cancel
            </button>
          )}
          <button disabled={isButtonDisabled} className="btn-secondary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
