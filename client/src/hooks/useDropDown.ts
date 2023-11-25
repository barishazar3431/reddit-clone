import { useEffect, useRef, useState } from 'react';

export default function useDropDown() {
  const [isShown, setIsShown] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setIsShown(false);
      }
    };

    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsShown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapePress);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapePress);
    };
  }, []);

  const toggleIsShown = () => {
    setIsShown((prev) => !prev);
  };

  return { isShown, dropDownRef, toggleIsShown, setIsShown };
}
