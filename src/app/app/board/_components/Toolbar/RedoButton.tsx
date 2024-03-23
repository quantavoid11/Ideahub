import React from "react";
import IconButton from "../IconButton";
import { MdRedo } from "react-icons/md";


interface RedoButtonProps  {
  isActive: boolean;
  onClick: () => void;
};

export default function RedoButton({ isActive, onClick }: RedoButtonProps) {
  return (
    <div className="w-full flex justify-center items-center hover:bg-indigo-200 hover:text-blue-800 hover:cursor-pointer rounded-md p-2.5 active:bg-indigo-200">
        <IconButton isActive={isActive} onClick={onClick}>  
        <MdRedo size="20"/>
    </IconButton>
    </div>
    
  );
}