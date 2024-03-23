import React from "react";
import IconButton from "../IconButton";
import { FaArrowPointer } from "react-icons/fa6";

interface SelectionButtonProps  {
  isActive: boolean;
  onClick: () => void;
};

export default function SelectionButton({ isActive, onClick }: SelectionButtonProps) {
  return (
    <div className="w-full flex justify-center items-center hover:bg-indigo-200 hover:text-blue-800 hover:cursor-pointer rounded-md p-2.5 active:bg-indigo-200">
        <IconButton isActive={isActive} onClick={onClick}>  
        <FaArrowPointer size="20"/>
    </IconButton>
    </div>
    
  );
}