import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { twMerge } from "tailwind-merge";

interface SectionButtonProps {
  isRouting: boolean;
  setIsSection: (isSection: boolean) => void;
}

const SectionButton: React.FC<SectionButtonProps> = ({
  isRouting,
  setIsSection,
}) => {
  return (
    <button
      className={twMerge(
        "absolute top-1/2 left-10 text-secondary opacity-40",
        "hover:text-primary hover:border-primary hover:opacity-100",
        "p-2 border-2 border-secondary rounded-full",
        "transition-all duration-300",
        isRouting && "opacity-0"
      )}
      onClick={() => setIsSection(true)}
    >
      <MdOutlineRemoveRedEye size={25} />
    </button>
  );
};

export default SectionButton;
