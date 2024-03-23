import React from "react";
import IconButton from "../IconButton";
import { MdUndo } from "react-icons/md";


interface UndoButtonProps  {
  isActive: boolean;
  onClick: () => void;
};

export default function UndoButton({ isActive, onClick }: UndoButtonProps) {
  return (
    <div className="w-full flex justify-center items-center hover:bg-indigo-200 hover:text-blue-800 hover:cursor-pointer rounded-md p-2.5 active:bg-indigo-200">
        <IconButton isActive={isActive} onClick={onClick}>  
        <MdUndo size="20"/>
    </IconButton>
    </div>
    
  );
}