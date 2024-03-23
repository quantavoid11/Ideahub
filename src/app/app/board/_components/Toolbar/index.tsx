'use client'

import ConnectionLineButton from "./ConnectionLineButton";
import PenButton from "./PenButton";
import RedoButton from "./RedoButton";
import SelectionButton from "./SelectionButton";
import ShapesButton from "./ShapesButton";
import StickyNotesButton from "./StickyNotesButton";
import TextButton from "./TextButton";
import UndoButton from "./UndoButton";

export default function Toolbar(){
    return (
        <div className=" w-12 absolute left-2 top-[100px]     ">
            <div className=" p-1 w-full flex flex-col items-center bg-white shadow-md rounded-md mb-2">
            <SelectionButton isActive={false} onClick={()=>{}}/>
            <PenButton isActive={false} onClick={()=>{}}/>
            <TextButton isActive={false} onClick={()=>{}}/>
            <StickyNotesButton isActive={false} onClick={()=>{}}/>
            <ShapesButton isActive={false} onClick={()=>{}}/>
            <ConnectionLineButton isActive={false} onClick={()=>{}}/>
            </div >
            <div className=" p-1 w-full flex flex-col items-center bg-white shadow-md rounded-md">
            <UndoButton isActive={false} onClick={()=>{}}/>
            <RedoButton isActive={false} onClick={()=>{}}/>
            </div>
            
        </div>
    )
}