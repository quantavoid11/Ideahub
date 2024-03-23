import Room from "@/components/Room";
import Canvas from "../_components/canvas";
import Loading from "@/components/Auth/Loading";
import React from "react";

interface BoardPageProps{
    params:{
        boardId:string
    }
}

export default function BoardPage({params,}:BoardPageProps){
    
    return (
        <div className="h-screen w-screen">
            <Room boardId={params.boardId} fallback={<div><Loading/></div>}>
            <Canvas boardId={params.boardId}/>
            </Room>
            </div>
    )
}