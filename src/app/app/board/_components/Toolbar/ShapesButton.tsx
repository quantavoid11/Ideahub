import React from "react";
import IconButton from "../IconButton";
import { LuShapes } from "react-icons/lu";


interface ShapesButtonProps  {
  isActive: boolean;
  onClick: () => void;
};

export default function ShapesButton({ isActive, onClick }: ShapesButtonProps) {
  return (
    <div className="w-full flex justify-center items-center hover:bg-indigo-200 hover:text-blue-800 hover:cursor-pointer rounded-md p-2.5 active:bg-indigo-200">
        <IconButton isActive={isActive} onClick={onClick}>  
        <LuShapes size="25"/>
    </IconButton>
    </div>
    
  );
}