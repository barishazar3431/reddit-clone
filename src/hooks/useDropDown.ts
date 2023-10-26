import { useEffect, useRef, useState } from "react";


export default function useDropDown() {
  const [isShown, setIsShown] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target as Node)) {
        setIsShown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
    document.removeEventListener('mousedown', handleClickOutside);

    }
  }, [dropDownRef])

  const toggleIsShown = () => {
    setIsShown((prev) => !prev);
  };

  return {isShown, dropDownRef, toggleIsShown, setIsShown};
}
