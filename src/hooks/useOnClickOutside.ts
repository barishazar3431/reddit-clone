import { useEffect } from 'react';

export default function useOnClickOutside(
  ref: React.RefObject<HTMLDivElement>,
  onClickOutside: () => void
) {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClickOutside]);
}
