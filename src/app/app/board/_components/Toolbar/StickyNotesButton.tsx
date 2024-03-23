import React from "react";
import IconButton from "../IconButton";
import { FaRegNoteSticky } from "react-icons/fa6";


interface StickyNotesButtonProps  {
  isActive: boolean;
  onClick: () => void;
};

export default function StickyNotesButton({ isActive, onClick }: StickyNotesButtonProps) {
  return (
    <div className="w-full flex justify-center items-center hover:bg-indigo-200 hover:text-blue-800 hover:cursor-pointer rounded-md p-2.5 active:bg-indigo-200">
        <IconButton isActive={isActive} onClick={onClick}>  
        <FaRegNoteSticky size="25"/>
    </IconButton>
    </div>
    
  );
}