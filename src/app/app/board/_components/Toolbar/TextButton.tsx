import React from "react";
import IconButton from "../IconButton";
import { PiTextTBold } from "react-icons/pi";

interface TextButtonProps  {
  isActive: boolean;
  onClick: () => void;
};

export default function TextButton({ isActive, onClick }: TextButtonProps) {
  return (
    <div className="w-full flex justify-center items-center hover:bg-indigo-200 hover:text-blue-800 hover:cursor-pointer rounded-md p-2.5 active:bg-indigo-200">
        <IconButton isActive={isActive} onClick={onClick}>  
        <PiTextTBold size="25"/>
    </IconButton>
    </div>
    
  );
}