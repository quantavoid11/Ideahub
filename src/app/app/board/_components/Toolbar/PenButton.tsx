import React from "react";
import IconButton from "../IconButton";
import { FaPen } from "react-icons/fa";
<FaPen />

interface PenButtonProps  {
  isActive: boolean;
  onClick: () => void;
};

export default function PenButton({ isActive, onClick }: PenButtonProps) {
  return (
    <div className="w-full flex justify-center items-center hover:bg-indigo-200 hover:text-blue-800 hover:cursor-pointer rounded-md p-2.5 active:bg-indigo-200">
        <IconButton isActive={isActive} onClick={onClick}>  
        <FaPen size="20"/>
    </IconButton>
    </div>
    
  );
}