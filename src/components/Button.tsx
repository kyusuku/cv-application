import { useState } from 'react';

export default function Button({ 
  text,
  onButtonClick
}: { 
  text: string 
  onButtonClick: () => void
}) {
  const [isHovered, setIsHovered] = useState(false);
  const styleWidth = text === 'Add Education' ? '125px' : '130px';

  return (
    <button
      type="button"
      className="mt-3 flex items-center justify-start border-2 border-black px-2 py-1 hover:cursor-pointer rounded-sm transition-[width] duration-300 ease-in-out h-8 overflow-hidden whitespace-nowrap active:bg-gray-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onButtonClick}
      style={{
        width: isHovered ? styleWidth : '50px',
      }}
    >
      {isHovered ? text : 'Add'}
    </button>
  );
}
