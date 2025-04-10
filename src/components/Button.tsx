import { useState } from "react";

export default function Button({
  text,
  onButtonClick,
}: {
  text: string;
  onButtonClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const styleWidth = text === "Add Education" ? "125px" : "130px";

  return (
    <button
      type="button"
      className="mt-3 flex h-8 items-center justify-start overflow-hidden rounded-sm border-2 border-black px-2 py-1 whitespace-nowrap transition-[width] duration-300 ease-in-out hover:cursor-pointer active:bg-gray-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onButtonClick}
      style={{
        width: isHovered ? styleWidth : "50px",
      }}
    >
      {isHovered ? text : "Add"}
    </button>
  );
}
